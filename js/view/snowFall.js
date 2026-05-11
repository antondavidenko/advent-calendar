var SnowFall = function(app, setConfig, storeElement)
{
    var snowArray = [];
    var config = setConfig;

    function drawSprite(arrayData, app, speed){
        var sprite;
        sprite = new PIXI.Sprite.fromImage(arrayData[2]);
        sprite.anchor.set(0.5);
        sprite.x = arrayData[0];
        sprite.y = arrayData[1];
        sprite.snowSpeed = speed;
        sprite.scale.x = sprite.scale.y = arrayData[3];
        sprite.alpha = arrayData[4];

        if (arrayData[5]) { sprite.rotation = toRadians(arrayData[5]); }

        app.addChild(sprite);

        storeElement.call(this, sprite);
        return sprite;
    };

    for(var i=0; i<config.particles.length; i++ ) {
        snowArray.push(drawSprite(config.particles[i][0], app, config.particles[i][1]));
    }

    this.snowUpdate = function(delta)
    {
        var dy;
        for(var i=0; i<snowArray.length; i++ ) {
            dy = delta * snowArray[i].snowSpeed[0] * config.allSpeedMod;
            snowArray[i].y = ((snowArray[i].y+dy) < 400)?snowArray[i].y+dy:-50;
            snowArray[i].rotation += snowArray[i].snowSpeed[1] * delta * config.allSpeedMod;
        }
    }
}