var ConfigFC = function()
{
    this.bgColor = 0xebeff2;
    this.imgPath = 'img/fc/';

    this.appWdsc = 3840; //1920//1640
    this.appHdsc = 640;
    this.appWcentred = 1920;
    this.appWcentredMob = 375;
    this.appWmob = 1122;
    this.appHmob = 574;
    this.minW = 400;

    this.drawPath = false;
    this.drawSnow = false;
    this.drawAnimation = true;

    this.fonts = [["kn67","fnt/kn67.ttf"],["kn50","fnt/kn50.ttf"]];

    this.path = [
        [443, 408,"obj_1",1],
        [539, 534,"obj_2",1],
        [580, 155,"obj_3",1],
        [663, 310,"obj_4",1],
        [752, 450,"obj_5",1],
        [912, 417,"obj_6",1],
        [910, 510,"obj_7",1],
        [1110, 539,"obj_8",1],
        [1240, 519,"obj_9",1],
        [1170, 248,"obj_10",1],
        [1040, 125,"obj_11",1],
        [1018, 284,"obj_12",1]];

    this.pathStates = {};
    this.pathStates.before =  ["", "","","", 1,0,[{name:"outlineFilter", color:0xFFFFFF, thickness:1},{name:"glowFilter", color:0x000000, distance:15, outerStrength:2, innerStrength:1, quality:0.5}]];
    this.pathStates.current = ["", "","","", 1,0,[{name:"outlineFilter", color:0xFFFFFF, thickness:4},{name:"glowFilter", color:0x000000, distance:15, outerStrength:2, innerStrength:1, quality:0.5}]];
    this.pathStates.after =   ["", "","h","",1];

    this.pathMob = [
        [53, 288,"obj_1",0.6],
        [115,370,"obj_2",0.6],
        [127,125,"obj_3",0.8],
        [193,223,"obj_4",0.6],
        [263,317,"obj_5",0.8],
        [58, 465,"obj_6",0.8],
        [55, 525,"obj_7",0.8],
        [305, 450,"obj_8",0.8],
        [330, 535,"obj_9",0.8],
        [330, 100,"obj_10",0.8],
        [200, 365,"obj_11",0.8],
        [184, 533,"obj_12",1]];

    this.scene = [
        [820,321,"./img/fc/bg_dsc.png",1,1]
    ];

    this.sceneMob = [
        [187,287,"./img/fc/bg_mob.png",1,1]
    ];

    this.buttons = [
        {
            onCurrentItem:true,
            image:[752, 450,"obj_5",1,0],
            text:[760, 595, "", {}],
            action:function action (view){console.log("button click "+view);}
        }
    ];

    this.buttonsMob = [
        {
            onCurrentItem:true,
            image:[263, 317,"obj_5",0.8,0],
            text:[760, 595, "", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
            action:function action (view){view.showPopUp();}
        }
    ];

    this.texts = [
        [652, 33, "\n12 DAYS OF CRISTMAS", {"fill":"0x000085", "align":"center", fontSize: 54, fontFamily: "kn67"}]
    ];

    this.textsMob = [
        [40, -5, "\n12 DAYS OF CRISTMAS", {"fill":"0x000085", "align":"center", fontSize: 54, fontFamily: "kn67"}]
    ];

    this.animation = {};
    this.animation.setup = [750,466,"animation",0.8,1];
    this.animation.speed = 0.5;
    this.animation.sequence = [
        "circle-anim0125",
        "circle-anim0126",
        "circle-anim0127",
        "circle-anim0128",
        "circle-anim0129",
        "circle-anim0130",
        "circle-anim0131",
        "circle-anim0132",
        "circle-anim0133",
        "circle-anim0134",
        "circle-anim0135",
        "circle-anim0136",
        "circle-anim0137",
        "circle-anim0138",
        "circle-anim0139",
        "circle-anim0140",
        "circle-anim0141",
        "circle-anim0142",
        "circle-anim0143",
        "circle-anim0144",
        "circle-anim0145",
        "circle-anim0146",
        "circle-anim0147",
        "circle-anim0148",
        "circle-anim0149",
        "circle-anim0150",
        "circle-anim0151",
        "circle-anim0152",
        "circle-anim0153",
        "circle-anim0154",
        "circle-anim0155",
        "circle-anim0156",
        "circle-anim0157",
        "circle-anim0158",
        "circle-anim0159",
        "circle-anim0160",
        "circle-anim0161",
        "circle-anim0162",
        "circle-anim0163",
        "circle-anim0164",
        "circle-anim0165",
        "circle-anim0166",
        "circle-anim0167",
        "circle-anim0168",
        "circle-anim0169",
        "circle-anim0170",
        "circle-anim0171",
        "circle-anim0172",
        "circle-anim0173",
        "circle-anim0174",

        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175",
        "circle-anim0175"
    ];

    this.animationMob = {setup:[263, 317,"animation",0.8,1], speed:0.5, sequence:this.animation.sequence};

    this.popupImagesList = ["obj_1","obj_2","obj_3p","obj_4","obj_5","obj_6","obj_7","obj_8","obj_9","obj_10","obj_11","obj_12p"];

    this.popupDatesList = [];

    this.popupTextsList = [];

    this.popup = [
        {type:"image", data:[187,398,"./img/fc/bg_popup.png",1,1]},
        {type:"image", data:[160,120,"./img/fb/white_circle.png",0.65,0.25]},
        {type:"image", data:[160,120,"./img/fb/white_circle.png",0.55,1]},
        {type:"image", data:[160,115,"%%POPUP_IMAGE%%",1.25,1]},
        {type:"text", data:[-10, 275, "\nYOU GET 200% DEPOSIT BONUS TODAY", {"fill":"0xffffff", "align":"center", fontSize: 24, fontFamily: "kn50"}]},
        {type:"text", data:[132, 220, "\nDAY %%CURRENT_DAY%%", {"fill":"0xf7be32", "align":"center", fontSize: 48, fontFamily: "kn67"}]},
        {type:"text", data: [10, 340, "Lorem ipsum dolor sit amet, consectetur adipiscing\nelit, sed do eiusmod tempor incididunt ut labore\net dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation\nullamco laboris nisi ut aliquip ex ea\ncommodo consequat.", {"fill":"0xffffff", "align":"center", fontSize: 16, fontFamily: "kn50"}]},
        {type:"button", data:{
            image:[160,510,"./img/fb/button.png",1.25,1],
            text:[115, 465, "\nCOLLECT", {"fill":"0xFFFFFF", "align":"center", fontSize: 28, fontFamily: "kn50"}],
            action:function action (view){console.log("button click"); view.closePopUp();}
        }},
        {type:"button", data:{
            image:[320,50,"./img/close-button.png",1.25,1],
                text:[135, 695, "", {"fill":"0xfffe8d", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
                action:function action (view){view.closePopUp();}
        }}
    ]
};