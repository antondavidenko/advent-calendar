var ConfigFB = function()
{
    this.bgColor = 0x1f0500;
    this.imgPath = 'img/fb/';

    this.appWdsc = 3840; //1920//1640
    this.appHdsc = 640;
    this.appWcentred = 1920;
    this.appWcentredMob = 375;
    this.appWmob = 1122;
    this.appHmob = 574;
    this.minW = 400;

    this.drawPath = false;
    this.drawSnow = false;
    this.drawAnimation = false;

    this.fonts = [["kn67","fnt/kn67.ttf"],["kn50","fnt/kn50.ttf"]];

    this.path = [
        [535, 265,"obj_1",1],
        [750, 475,"obj_2",1],
        [935, 190,"obj_3",1],
        [876, 325,"obj_4",1],
        [1010, 325,"obj_5",1],
        [870, 580,"obj_6",1],
        [1014, 555,"obj_7",1],
        [1067, 225,"obj_8",1],
        [808, 220,"obj_9",1],
        [692, 240,"obj_10",1],
        [635, 507,"obj_11",1],
        [430, 450,"obj_12",1]];

    this.pathStates = {};
    this.pathStates.before =  ["", "","","",1,0];
    this.pathStates.current = ["", "","","",1,0,[{name:"outlineFilter", color:0x9b7663, thickness:4}]];
    this.pathStates.after =   ["", "","","",1,0,[{name:"outlineFilter", color:0x6d513b, thickness:1}]];

    this.pathMob = [
        [333, 404,"obj_1",0.6],
        [105, 395,"obj_2",0.8],
        [253, 141,"obj_3",0.8],
        [200, 255,"obj_4",0.8],
        [305, 255,"obj_5",0.8],
        [180, 490,"obj_6",0.8],
        [85, 510,"obj_7",0.8],
        [325, 178,"obj_8",0.8],
        [155, 175,"obj_9",0.8],
        [55, 185,"obj_10",0.8],
        [15, 400,"obj_11",1],
        [275, 505,"obj_12",0.6]];

    this.scene = [
        [820,321,"./img/fb/bg_dsc.png",1,1],
        [720,490,"chair",1,1],
        [635,555,"table",1,1]
    ];

    this.sceneMob = [
        [187,287,"./img/fb/bg_mob.png",1,1],
        [300,473,"foxy",1,1],
        [75,405,"chair",1,1],
        [15,445,"table",1,1]
    ];

    this.buttons = [
        {
            onCurrentItem:true,
            image:[1010, 325,"obj_5",1,0],
            text:[760, 595, "", {}],
            action:function action (view){console.log("button click "+view);}
        }
    ];

    this.buttonsMob = [
        {
            onCurrentItem:true,
            image:[305,255,"obj_5",0.8,0],
            text:[760, 595, "", {"fill":"0xFFFFFF", "align":"center", fontSize: 24, fontFamily: "AG_Book"}],
            action:function action (view){view.showPopUp();}
        }
    ];

    this.texts = [
        [700, 13, "\nCRISTMAS WITH FOXY", {"fill":"0xFFFFFF", "align":"center", fontSize: 54, fontFamily: "kn67"}]
    ];

    this.textsMob = [
        [35, 0, "\nCRISTMAS WITH FOXY", {"fill":"0xFFFFFF", "align":"center", fontSize: 54, fontFamily: "kn67"}]
    ];

    this.popupImagesList = ["obj_1","obj_2","obj_3","obj_4","obj_5","obj_6","obj_7","obj_8","obj_9","obj_10","obj_11","obj_12p"];

    this.popupDatesList = [
            "15th December",
            "16th December",
            "17th December",
            "18th December",
            "19th December",
            "20th December",
            "21st December",
            "22nd December",
            "23rd December",
            "24th December",
            "25th December",
            "26th December"
        ];

    this.popupTextsList = [
        "You’ve got 6 free cards\nto me £5K Ball Drop game\nat 10pm on Monday 1st January!",
        "Slap a fish!\nYou’ve got 100 loyalty points\nin yer account!",
        "Grab a sweet 10% bonus back\non yer wagers in\nthe Sugar Works room today!",
        "Part me ‘air with a trowel!\nYou’ve got 5 free spins\non Magical Forest in yer account!",
        "Fancy a share of £500?\nAll yer need to do is opt in below\nand wager £30+ across any\nof our slots, and you’ll\nget a crackin’ cash prize!",
        "Roll me down a rockery!\nGrab a 25% loss back bonus\non Santa’s Super Slot today!",
        "Get a crackin’ 5% bonus back\non yer wagers in me\n‘Good Ship Foxy’ room today!",
        "Deposit £10+\nwith me code TINSEL today\nfor a 75% bingo bonus\nup to £75!",
        "Part me ‘air with a trowel!\nYou’ve got 10 free spins\non Kingdom of Cash!",
        "Freekin’ ferrets, get a 100%\nbonus bundle\n(50% bingo, 50% casino)\nwhen you deposit\n£10+ with code ANGEL!",
        "Opt in and wager £20+\nacross any of me slots or bingo\ntoday and you could be one\nof our ten lucky winners who\nget credited £100 cash!",
        "Get a crackin’ 10% bonus back\non yer losses in me\n‘Good Ship Foxy’ room today!",
    ];

    this.popup = [
        {type:"image", data:[187,398,"./img/fb/bg_popup.png",1,1]},
        {type:"image", data:[160,120,"./img/fb/white_circle.png",0.65,0.25]},
        {type:"image", data:[160,120,"%%POPUP_IMAGE%%",1.5,1]},
        {type:"text", data:[-55, 275, "\n%%DAYLY_TEXT%%", {"fill":"0xffffff", "align":"center", fontSize: 24, fontFamily: "kn50"}]},
        {type:"text", data:[15, 240, "%%DAY_DATE%%", {"fill":"0xf7be32", "align":"center", fontSize: 48, fontFamily: "kn50"}]},
        //{type:"text", data: [10, 340, "Lorem ipsum dolor sit amet, consectetur adipiscing\nelit, sed do eiusmod tempor incididunt ut labore\net dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation\nullamco laboris nisi ut aliquip ex ea\ncommodo consequat.", {"fill":"0xffffff", "align":"center", fontSize: 16, fontFamily: "kn50"}]},
        {type:"button", data:{
            image:[160,510,"./img/fb/button.png",1.25,1],
            text:[115, 465, "\nCOLLECT", {"fill":"0xFFFFFF", "align":"center", fontSize: 28, fontFamily: "kn50"}],
            action:function action (view){console.log("button click"); view.closePopUp();}
        }},
        {type:"button", data:{
            image:[320,50,"./img/close-button.png",1.25,1],
                text:[135, 695, "", {}],
                action:function action (view){view.closePopUp();}
        }}
    ]
};