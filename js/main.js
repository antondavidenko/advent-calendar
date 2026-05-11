function main()
{
  /**
   * Now let's try and stop pixi from preventing touch move...
   */
  /* var pixiContainer = document.getElementById('pixiJS');
  if (pixiContainer) {
      var pageY = null;
      pixiContainer.addEventListener('touchstart', function(e) {
          pageY = e.changedTouches[0].pageY;
      });
      pixiContainer.addEventListener('touchmove', function(e) {
          var nextPageY = e.changedTouches[0].pageY;
          window.scrollBy(0, pageY - nextPageY);
      }, true);
  } /* */


  var GET = [];
    createGET();
    var brand = GET['brand'];
    var day = GET['day'];

    if (!brand || !day) {
        document.getElementById("demo_content").style.display = "none";
        document.getElementById("selectors").style.display = "flex";
        
        // Add event listener to showButton
        document.getElementById('showButton').addEventListener('click', function() {
            var selectedBrand = document.getElementById('brandSelector').value;
            var selectedDay = document.getElementById('daySelector').value;
            var newUrl = window.location.origin + window.location.pathname + '?brand=' + encodeURIComponent(selectedBrand) + '&day=' + encodeURIComponent(selectedDay);
            window.location.href = newUrl;
        });
        
        return;
    }

    //console.log("BRAND = "+brand);
    //console.log("DAY = "+day);

    var appW;
    var appH;
    var config;

    if (brand === 'ch') { config = new ConfigCH(); } else
    if (brand === 'fb') { config = new ConfigFB(); } else
    if (brand === 'fc') { config = new ConfigFC(); } else
    if (brand === 'bn') { config = new ConfigBN(); } else {
      console.error("Unknown brand: "+brand);
       return;
    }
    config.day = day;

    var configSnow = new ConfigSnow();
    var view = new View(config, configSnow);
    config.view = view;
    var viewType;
    var VIEW_TYPE_MOBILE = "view_type_mobile";
    var VIEW_TYPE_DESCTOP = "view_type_desctop";

    var appDsc = new PIXI.Application(config.appWdsc, config.appHdsc, {backgroundColor: config.bgColor});
    var appMob = new PIXI.Application(config.appWmob, config.appHmob, {backgroundColor: config.bgColor});
    $("#pixiJS").append(appDsc.view, appMob.view);

    /**
    * Allow scroll on the mobile canvas
    */
    appMob.renderer.plugins.interaction.autoPreventDefault = false;
    appMob.view.style.touchAction = '';


    view.canvasTest = appDsc.view;

    var i;
    var loader = new type.Loader();
    for (i=0; i<config.fonts.length; i++) {
        loader.add(config.fonts[i][0], config.fonts[i][1]);
    }
    loader.once('loadComplete', init);
    loader.load();

    function createGET()
    {
        var pageURL = window.location.href;
        var getParams = pageURL.substr(pageURL.indexOf('?')+1, pageURL.length).split('&');
        var tmp;
        var i;

        for(i=0; i<getParams.length; i++)
        {
            tmp = getParams[i].split('=');
            GET[tmp[0]] = tmp[1];
        }
    }

    function init() {
        PIXI.loader
            .add(config.imgPath+'objects.json')
        if (config.drawAnimation) { PIXI.loader.add(config.imgPath+'animation.json') };
        if (config.drawSnow) { PIXI.loader.add(config.imgPath+'snow.json') };
        PIXI.loader.load(onAssetsLoaded);
    }

    window.onload = function () {
        resize();
    };

    var lastWidth = null;
    function resize() {
        var w = window.innerWidth;
        var h = window.innerHeight;

        /*if (w === lastWidth) {
            return;
        } /* */
        lastWidth = w;

        detectDscOrMob(w,h);

        if (viewType === VIEW_TYPE_DESCTOP) {
            resizeDscView(appDsc, w);
        } else if (viewType === VIEW_TYPE_MOBILE) {
            resizeMobView(appMob, w, h);
        }
    }

    function resizeDscView(app, windowW)
    {
        app.renderer.view.style.height = "640px";
        app.renderer.view.width = windowW;

        var delta = Math.round((windowW-config.appWcentred)/2) + 130;
        view.setupScaleDelta(delta);
    }

    function resizeMobView(app, windowW, windowH)
    {
        // console.log(windowW, windowH);
        app.renderer.view.style.height = windowH+"px";
        var multiplayer2 = windowH/appH;
        app.renderer.view.width = windowW/multiplayer2/* - 23/multiplayer2*/;

        // console.log(app.renderer.view.width, 'vs', windowW);

        /*var delta = Math.round((windowW-config.appWcentredMob*multiplayer2)/2);
        view.setupScaleDelta(delta);*/

      var delta = Math.round((app.renderer.view.width-config.appWcentredMob + 40)/2);
      view.setupScaleDelta(delta);
    }

    function detectDscOrMob(w,h)
    {
        if (config.minW>0) {
            if (w > h) {
                viewType = VIEW_TYPE_DESCTOP;
                appW = config.appWdsc;
                appH = config.appHdsc;
                appDsc.renderer.view.style.display = "block";
                appMob.renderer.view.style.display = "none";
                $("#pageHeader_mob").hide();
                $("#pageFooter_mob").hide();

                $("#pageFooter_dsc").show();
                $("#pageHeader_dsc").show();
            } else {
                viewType = VIEW_TYPE_MOBILE;
                appW = config.appWmob;
                appH = config.appHmob;
                appDsc.renderer.view.style.display = "none";
                appMob.renderer.view.style.display = "block";
                $("#pageHeader_mob").show();
                $("#pageFooter_mob").show();

                $("#pageFooter_dsc").hide();
                $("#pageHeader_dsc").hide();
            }
        }
    }

    window.addEventListener('resize', resize);

    function onAssetsLoaded() {
        view.drawMob(appMob.stage, day);
        view.drawDsc(appDsc.stage, day);
        view.closePopUp();

        appDsc.ticker.add(function(delta) { view.updateDsc(delta); });
        appMob.ticker.add(function(delta) { view.updateMob(delta); });

        resize();
    }
}