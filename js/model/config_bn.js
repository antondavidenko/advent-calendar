var ConfigBN = function()
{
    this.bgColor = 0x8fd3de;
    this.imgPath = 'img/bn/';

    this.appWdsc = 3840; //1920//1640
    this.appHdsc = 642; //640
    this.appWcentred = 1920;
    this.appWcentredMob = 375;
    this.appWmob = 1125;
    this.appHmob = 796;
    this.minW = 400;

    this.drawPath = true;
    this.drawSnow = true;
    this.drawAnimation = true;

    this.fonts = [["AG_Book","fnt/vag-rounded-bold.ttf"]];

    this.path = [
        [412,303,"obj_1",1],
        [508,205,"obj_2",1],
        [589, 304,"obj_3",1],
        [441, 442,"obj_4",1],
        [637, 388,"obj_5",1],
        [769, 425,"obj_6",1],
        [935, 428,"obj_7",1],
        [1064,374,"obj_8",1],
        [1227,446,"obj_9",1],
        [1204,282,"obj_10",1],
        [1062,147,"obj_11",1],
        [810, 221,"obj_12",1]];

    this.pathStates = {};
    this.pathStates.before =  ["","","","",0.5];
    this.pathStates.current = ["","","","",1];
    this.pathStates.after =   ["","","","",1];

    this.pathMob = [
        [ 60,216,"obj_1",0.8],
        [ 31,333,"obj_2",0.8],
        [133,429,"obj_3",0.8],
        [ 66,524,"obj_4",0.8],
        [156,596,"obj_5",0.8],
        [ 40,725,"obj_6",0.8],
        [242,713,"obj_7",0.8],
        [327,633,"obj_8",0.8],
        [279,488,"obj_9",0.8],
        [337,330,"obj_10",0.8],
        [299,183,"obj_11",0.8],
        [130,275,"obj_12",0.8]];

    this.scene = [
        [2455,321,"./img/bn/bg_dsc.png",1,1],
        [-820,321,"./img/bn/bg_dsc.png",1,1],
        [820,321,"./img/bn/bg_dsc.png",1,1],
        [730,276,"pine",1,1,-20],

        [70,295,"pine",0.8,1,-20],
        [150,305,"pine",1,1,0],
        [250,305,"pine",0.6,1,0],

        [1570,295,"pine",0.8,1,0],
        [1450,305,"pine",1,1,-20],
        [1350,305,"pine",0.6,1,-20],

        [900,250,"./img/bn/ginger-bread-house.png",1,1],
        [1010,261,"pine",1,1],
        [1400,150,"repeated-cloud",0.6,0.5],
        [200,150,"repeated-cloud",0.6,0.5]
    ];

    this.sceneMob = [
        [187,398,"./img/bn/bg_mob_ex.png",1.01,1],
        [77,296,"pine",0.6,1,-20],
        [277,296,"pine",0.6,1],

        [205,280,"./img/bn/ginger-bread-house.png",0.8,1]
    ];

    this.buttons = [
        {
            onCurrentItem:true,
            image:[637, 388,"obj_5",1,0],
            text:[760, 595, "", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
            action:function action (view){console.log("button click" + view);}
        }
    ];

    this.buttonsMob = [
        {
            onCurrentItem:true,
            image:[156,596,"obj_5",0.8,0],
            text:[760, 595, "", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
            action:function action (view){view.showPopUp();}
        }
    ];

    this.texts = [
        [572, 23, "12 DAYS OF CRISTMAS", {"fill":"0x60868c", "align":"center", fontSize: 54, fontFamily: "AG_Book"}],
        [570, 21, "12 DAYS OF CRISTMAS", {"fill":"0xFFFFFF", "align":"center", fontSize: 54, fontFamily: "AG_Book"}],

        [412,203, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [422,223, "1", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [528,155, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [538,175, "2", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [610,214, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [620,234, "3", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],

        [365, 450, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [375, 470, "4", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [610, 430, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [620, 450, "5", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [709, 455, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [719, 475, "6", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [860, 428, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [870, 448, "7", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [1035,435, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [1045,455, "8", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [1147,426, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [1157,446, "9", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],

        [1230,252, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [1220,272, "10", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [1052,187, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [1042,207, "11", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [800, 201, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [790, 221, "12", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}]
    ];

    this.textsMob = [
        [92, 23, "12 DAYS OF\nCRISTMAS", {"fill":"0x60868c", "align":"center", fontSize: 36, fontFamily: "AG_Book"}],
        [90, 21, "12 DAYS OF\nCRISTMAS", {"fill":"0xFFFFFF", "align":"center", fontSize: 36, fontFamily: "AG_Book"}],

        [ 82,168, "Day", {"fill":"0x60868c", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [ 87,188, "1", {"fill":"0x60868c", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [ 80,166, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [ 85,186, "1", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],

        [ 10,373, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [ 15,393, "2", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [173,389, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [173,409, "3", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],

        [ 10,540, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [ 15,560, "4", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [102,596, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [106,616, "5", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [ 70,705, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [ 75,725, "6", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [170,705, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [175,725, "7", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [300,685, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [305,705, "8", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [203,459, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [208,479, "9", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [258,329, "Day", {"fill":"0x513228", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [253,349, "10", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],

        [282,208, "Day", {"fill":"0x60868c", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [275,230, "11", {"fill":"0x60868c", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [280,206, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [273,228, "11", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],

        [112,258, "Day", {"fill":"0x60868c", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [105,280, "12", {"fill":"0x60868c", "align":"center", fontSize: 48, fontFamily: "AG_Book"}],
        [110,256, "Day", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
        [103,278, "12", {"fill":"0xFFFFFF", "align":"center", fontSize: 48, fontFamily: "AG_Book"}]
    ];

    this.animation = {};
    this.animation.setup = [637,388,"animation",0.4,0.3];
    this.animation.scaleList = [0.8,0.6,0.8,0.6,0.6,0.8,0.6,0.8,0.6,0.4,0.6,0.8];
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

    this.animationMob = {setup:[156,596,"animation",0.4,0.3], speed:0.5, sequence:this.animation.sequence};
    this.animationMob.scaleList = [0.8,0.6,0.8,0.6,0.6,0.8,0.6,0.8,0.6,0.4,0.6,0.8];

    this.popupImagesList = ["obj_1","obj_2","obj_3","obj_4","obj_5","obj_6","obj_7","obj_8","obj_9","obj_10","obj_11","obj_12"];

    this.popupDatesList = [];

    this.popupTextsList = [
        "You’ve got 6 free cards\nto my £5K jackpot game\non Monday 1st January!",
        "You’ve got\n100 loyalty points\nin your account!",
        "Grab a sweet 10% bonus\nback on your wagers in\nthe Sugar Works room\ntoday!",
        "You’ve got 5 free spins\non Magical Forest\nin your account!",
        "Fancy a share of £500?\nAll you need to do is opt\nin below and wager £30+\nacross any of our slots,\nand you’ll get a share\nof the cash prize!",
        "Get a 25% loss back\nbonus on\nSanta’s Super Slot\ntoday!",
        "Get a 5% bonus back on\nyour wagers in my\n‘Sugar Works’ room today!",
        "Deposit £10+ with code\nTINSEL today for a 75%\nbingo bonus up to £75!",
        "You’ve got 10 free spins\non Kingdom of Cash!",
        "Get a 100% bonus bundle\n(50% bingo, 50% casino)\nwhen you deposit £10+\nwith code ANGEL!",
        "Opt in and wager £20+\nacross any slots or bingo\ntoday and you could be\none of our ten lucky\nwinners who get\ncredited £100 cash!",
        "Get a 10% bonus back on\nyour losses in my\n‘Sugar Works’ room today!"
    ];

    this.popup = [
        {type:"image", data:[187,398,"./img/bn/bg_popup.png",1.01,1]},
        {type:"animation", data:{setup:[170,180,"animation",0.75,0.3], speed:0.5, sequence:this.animation.sequence}},
        {type:"image", data:[170,180,"%%POPUP_IMAGE%%",1.5,1]},
        {type:"text", data:[-220, 450, "%%DAYLY_TEXT%%", {"fill":"0xe14426", "align":"center", fontSize: 28, fontFamily: "AG_Book"}]},
        {type:"text", data:[140, 280, "Day", {"fill":"0x513228", "align":"center", fontSize: 48, fontFamily: "AG_Book"}]},
        {type:"text", data:[150, 320, "%%CURRENT_DAY%%", {"fill":"0x513228", "align":"center", fontSize: 96, fontFamily: "AG_Book"}]},
        //{type:"text", data: [40, 565, "", {"fill":"0x000000", "align":"center", fontSize: 12, fontFamily: "Arial"}]},
        {type:"button", data:{
            image:[180,710,"./img/bn/button.png",1.25,1],
            text:[135, 695, "COLLECT", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
            action: function action (view) {console.log("button click"); view.closePopUp();}
        }},
        {type:"button", data:{
            image:[320,50,"./img/close-button.png",1.25,1],
                text:[135, 695, "", {"fill":"0xfffe8d", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
                action: function action (view){view.closePopUp();}
        }}
    ]
};