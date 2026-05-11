var View = function (setConfig, setConfigSnow) {
    var config = setConfig;
    var configSnow = setConfigSnow;
    var scene = [];
    var popupCcontainer = new PIXI.Container();

    var snowDsc;
    var snowMob;

    this.drawMob = function(appMob) {
        var i;

        if (config.drawSnow) { snowMob = new SnowFall(appMob, configSnow.snowMob, storeElement); }

        for(i=0; i<config.sceneMob.length; i++ ) { drawSprite(config.sceneMob[i], appMob); }

        drawPathAndItems(appMob, config.pathMob, config.animationMob);

        for(i=0; i<config.textsMob.length; i++ ) { drawText(config.textsMob[i], appMob); }

        setupButtons(config.buttonsMob, appMob, this, {path:config.pathMob, day:config.day});
        setupPopup(config.popup, appMob, this);
    };

    this.drawDsc = function(appDsc) {
        var i;

        if (config.drawSnow) { snowDsc = new SnowFall(appDsc, configSnow.snowDsc, storeElement); }

        for(i=0; i<config.scene.length; i++ ) { drawSprite(config.scene[i], appDsc); }

        drawPathAndItems(appDsc, config.path, config.animation);

        for(i=0; i<config.texts.length; i++ ) { drawText(config.texts[i], appDsc); }

        setupButtons(config.buttons, appDsc, this, {path:config.path, day:config.day});
    };

    function drawPathAndItems(app, path, animation)
    {
        var container = new PIXI.Container();
        app.addChild(container);
        if (config.drawPath) { new DrawPath(container, path, config.imgPath); }
        storeElement(container);

        if (config.animation) { setupAnimation(animation, {path:path, day:config.day}, app); }

        for(i=0; i<path.length; i++ ) { drawPathSprite(path, i, app); }

    }

    this.updateDsc = function(delta)
    {
        if (config.drawSnow) {
            snowDsc.snowUpdate(delta);
        }
    };

    this.updateMob = function(delta)
    {
        if (config.drawSnow) {
            snowMob.snowUpdate(delta);
        }
    };

    this.setupScaleDelta = function(dalta){
        for(var i=0; i<scene.length; i++ ) {
            scene[i].x = scene[i].originX + dalta;
        }
    };

    this.showPopUp = function() {
        popupCcontainer.visible = true;
    };

    this.closePopUp = function() {
        popupCcontainer.visible = false
    };

    function toRadians (angle) {
        return angle * (Math.PI / 180);
    }

    function setupButtons(arrayData, app, view, pathDay)
    {
        var button;
        var dayId;

        for(var i=0; i<arrayData.length; i++ ) {

            if (arrayData[i].onCurrentItem)
            {
                dayId = Number(pathDay.day) - 1;
                arrayData[i].image[0] = pathDay.path[dayId][0];
                arrayData[i].image[1] = pathDay.path[dayId][1];
                arrayData[i].image[2] = pathDay.path[dayId][2];
            }

            button = drawSprite(arrayData[i].image, app);
            drawText(arrayData[i].text, app);

            button.interactive = true;
            button.buttonMode = true;
            button.action = arrayData[i].action;
            button.on('pointerdown', onClick);
            button.view = view;

            function onClick () {
                this.action.call(this, this.view);
            }

            storeElement(button);
        }
    }

    function setupPopup(arrayData, app, view)
    {
        app.addChild(popupCcontainer);

        for(var i=0; i<arrayData.length; i++ ) {
            if (arrayData[i].type === "image") {
                arrayData[i].data[2] = arrayData[i].data[2].replace("%%POPUP_IMAGE%%", config.popupImagesList[config.day-1]);
                drawSprite(arrayData[i].data, popupCcontainer);
            }
            else if (arrayData[i].type === "text") {
                arrayData[i].data[2] = arrayData[i].data[2].replace("%%CURRENT_DAY%%", config.day);
                arrayData[i].data[2] = arrayData[i].data[2].replace("%%DAYLY_TEXT%%", config.popupTextsList[config.day-1]+"\n                                                                                                      ");
                arrayData[i].data[2] = arrayData[i].data[2].replace("%%DAY_DATE%%", config.popupDatesList[config.day-1]+"\n                                   ");
                drawText(arrayData[i].data, popupCcontainer);
            }
            else if (arrayData[i].type === "button") { setupButtons([arrayData[i].data],popupCcontainer, view); }
            else if (arrayData[i].type === "animation") { setupAnimation(arrayData[i].data, "nopath", popupCcontainer); }
        }
    }

    function setupAnimation(config, pathDay, app) {
        var frames = [];
        for (var i = 0; i < config.sequence.length; i++) {
            frames.push(PIXI.Texture.fromFrame(config.sequence[i]));
        }

        var anim = new PIXI.extras.AnimatedSprite(frames);

        var dayId = Number(pathDay.day) - 1;
        if (pathDay == "nopath") {
            anim.x = config.setup[0];
            anim.y = config.setup[1];
        } else {
            anim.x = pathDay.path[dayId][0];
            anim.y = pathDay.path[dayId][1];
            if (config.scaleList) {
                config.setup[3] = config.scaleList[dayId];
            }
        }

        anim.anchor.set(0.5);
        anim.animationSpeed = config.speed;
        anim.play();
        anim.scale.x = anim.scale.y = config.setup[3];
        anim.alpha = config.setup[4];
        app.addChild(anim);

        storeElement(anim);
    }

    function drawPathSprite(path, currentId, app){
        var dayId = Number(config.day) - 1;
        var currentData = [];
        var spriteData = path[currentId]

        if (dayId>currentId) {
            currentData = config.pathStates.before;
        } else
        if (dayId<currentId) {
            currentData = config.pathStates.after;
        } else {
            currentData = config.pathStates.current;
        }

        spriteData[4] = currentData[4];
        spriteData[5] = currentData[5];
        spriteData[6] = currentData[6];
        spriteData[2] = spriteData[2]+currentData[2];

        drawSprite(spriteData, app);
    }

    function drawSprite(arrayData, app){
        var sprite;
        var i;
        var allFilters;
        var currentFilter;
        sprite = new PIXI.Sprite.fromImage(arrayData[2]);
        sprite.anchor.set(0.5);
        sprite.x = arrayData[0];
        sprite.y = arrayData[1];
        sprite.scale.x = sprite.scale.y = arrayData[3];
        sprite.alpha = arrayData[4];

        if (arrayData[5]) { sprite.rotation = toRadians(arrayData[5]); }
        if (arrayData[6]) {
            allFilters = [];
            for (i=0; i<arrayData[6].length; i++ ) {
                if (arrayData[6][i].name === "outlineFilter") {
                    currentFilter = new PIXI.filters.OutlineFilter(arrayData[6][i].thickness, arrayData[6][i].color);
                } else
                if (arrayData[6][i].name === "glowFilter") {
                    currentFilter = new PIXI.filters.GlowFilter(arrayData[6][i].distance, arrayData[6][i].outerStrength, arrayData[6][i].innerStrength, arrayData[6][i].color, arrayData[6][i].quality)
                }
                allFilters.push(currentFilter);
            }
            sprite.filters = allFilters;
        }

        app.addChild(sprite);
        storeElement(sprite);

        return sprite;
    }

    function drawText(arrayData, app){
        var text = new PIXI.Text(arrayData[2], arrayData[3]);
        text.x = arrayData[0];
        text.y = arrayData[1];
        app.addChild(text);
        storeElement(text);
    }

    function storeElement(element) {
        element.originX = element.x;
        scene.push(element);
    }
};