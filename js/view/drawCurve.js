var DrawCurve = function(externalContainer, setX1, setY1, setX2, setY2, imgPath)
{
    var points = [];

    for (var i = 0; i < 25; i++) {
        points.push(new PIXI.Point(i, 0));
    }

    var strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage(imgPath+'line.png'), points);

    externalContainer.addChild(strip);

    var g = new PIXI.Graphics();
    externalContainer.addChild(g);

    function setupLine(setX1, setY1, setX2, setY2)
    {
        var curveX;
        var curveY;
        var curveMod;

        for (var i = 0; i < points.length; i++)
        {
            curveMod = ((i < points.length/2)?i:points.length-i)/(points.length/2);
            curveX = (Math.cos(i * 0.25) * 10)*curveMod;
            curveY = (Math.sin(i * 0.25) * 10)*curveMod;
            points[i].y = setY1 + ((setY2 - setY1)/(points.length-1))*i + curveY;
            points[i].x = setX1 + ((setX2 - setX1)/(points.length-1))*i + curveX;
        }
        //renderPoints(); //FOR DEBUGIN CURVE LINE ALHORITM
    }

    /* FOR DEBUGIN CIRVE LINE ALHORITM
    function renderPoints () {
        var i;
        g.clear();
        g.lineStyle(2,0xffc2c2);
        g.moveTo(points[0].x,points[0].y);
        for (i = 1; i < points.length; i++) {
            g.lineTo(points[i].x,points[i].y);
        }
        for (i = 1; i < points.length; i++) {
            g.beginFill(0xff0022);
            g.drawCircle(points[i].x,points[i].y,5);
            g.endFill();
        }
    } */

    setupLine(setX1, setY1, setX2, setY2);
};