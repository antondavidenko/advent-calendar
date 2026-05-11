var DrawPath = function(externalContainer, pathArray, imgPath)
{
    for (var i = 0; i < pathArray.length-1; i++ )
    {
        new DrawCurve(externalContainer, pathArray[i][0],pathArray[i][1], pathArray[i+1][0],pathArray[i+1][1], imgPath);
    }

    var g = new PIXI.Graphics();
    externalContainer.addChild(g);
};