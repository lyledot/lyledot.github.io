gdjs.FirstLevelCode = {};
gdjs.FirstLevelCode.GDRockObjects3_1final = [];

gdjs.FirstLevelCode.GDSnowballObjects3_1final = [];

gdjs.FirstLevelCode.GDWhiteTreeObjects3_1final = [];

gdjs.FirstLevelCode.GDSnowballObjects1= [];
gdjs.FirstLevelCode.GDSnowballObjects2= [];
gdjs.FirstLevelCode.GDSnowballObjects3= [];
gdjs.FirstLevelCode.GDSnowballObjects4= [];
gdjs.FirstLevelCode.GDSnowBackgroundObjects1= [];
gdjs.FirstLevelCode.GDSnowBackgroundObjects2= [];
gdjs.FirstLevelCode.GDSnowBackgroundObjects3= [];
gdjs.FirstLevelCode.GDSnowBackgroundObjects4= [];
gdjs.FirstLevelCode.GDGameBarrierObjects1= [];
gdjs.FirstLevelCode.GDGameBarrierObjects2= [];
gdjs.FirstLevelCode.GDGameBarrierObjects3= [];
gdjs.FirstLevelCode.GDGameBarrierObjects4= [];
gdjs.FirstLevelCode.GDScoreTextObjects1= [];
gdjs.FirstLevelCode.GDScoreTextObjects2= [];
gdjs.FirstLevelCode.GDScoreTextObjects3= [];
gdjs.FirstLevelCode.GDScoreTextObjects4= [];
gdjs.FirstLevelCode.GDScoreNumObjects1= [];
gdjs.FirstLevelCode.GDScoreNumObjects2= [];
gdjs.FirstLevelCode.GDScoreNumObjects3= [];
gdjs.FirstLevelCode.GDScoreNumObjects4= [];
gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects1= [];
gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects2= [];
gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects3= [];
gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects4= [];
gdjs.FirstLevelCode.GDGameOverTextObjects1= [];
gdjs.FirstLevelCode.GDGameOverTextObjects2= [];
gdjs.FirstLevelCode.GDGameOverTextObjects3= [];
gdjs.FirstLevelCode.GDGameOverTextObjects4= [];
gdjs.FirstLevelCode.GDRestartTextObjects1= [];
gdjs.FirstLevelCode.GDRestartTextObjects2= [];
gdjs.FirstLevelCode.GDRestartTextObjects3= [];
gdjs.FirstLevelCode.GDRestartTextObjects4= [];
gdjs.FirstLevelCode.GDFinalScoreTextObjects1= [];
gdjs.FirstLevelCode.GDFinalScoreTextObjects2= [];
gdjs.FirstLevelCode.GDFinalScoreTextObjects3= [];
gdjs.FirstLevelCode.GDFinalScoreTextObjects4= [];
gdjs.FirstLevelCode.GDDevControlsObjects1= [];
gdjs.FirstLevelCode.GDDevControlsObjects2= [];
gdjs.FirstLevelCode.GDDevControlsObjects3= [];
gdjs.FirstLevelCode.GDDevControlsObjects4= [];
gdjs.FirstLevelCode.GDEnabledTextObjects1= [];
gdjs.FirstLevelCode.GDEnabledTextObjects2= [];
gdjs.FirstLevelCode.GDEnabledTextObjects3= [];
gdjs.FirstLevelCode.GDEnabledTextObjects4= [];
gdjs.FirstLevelCode.GDFinishLineObjects1= [];
gdjs.FirstLevelCode.GDFinishLineObjects2= [];
gdjs.FirstLevelCode.GDFinishLineObjects3= [];
gdjs.FirstLevelCode.GDFinishLineObjects4= [];
gdjs.FirstLevelCode.GDWhiteTreeObjects1= [];
gdjs.FirstLevelCode.GDWhiteTreeObjects2= [];
gdjs.FirstLevelCode.GDWhiteTreeObjects3= [];
gdjs.FirstLevelCode.GDWhiteTreeObjects4= [];
gdjs.FirstLevelCode.GDRockObjects1= [];
gdjs.FirstLevelCode.GDRockObjects2= [];
gdjs.FirstLevelCode.GDRockObjects3= [];
gdjs.FirstLevelCode.GDRockObjects4= [];

gdjs.FirstLevelCode.conditionTrue_0 = {val:false};
gdjs.FirstLevelCode.condition0IsTrue_0 = {val:false};
gdjs.FirstLevelCode.condition1IsTrue_0 = {val:false};
gdjs.FirstLevelCode.condition2IsTrue_0 = {val:false};
gdjs.FirstLevelCode.conditionTrue_1 = {val:false};
gdjs.FirstLevelCode.condition0IsTrue_1 = {val:false};
gdjs.FirstLevelCode.condition1IsTrue_1 = {val:false};
gdjs.FirstLevelCode.condition2IsTrue_1 = {val:false};


gdjs.FirstLevelCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FirstLevelCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(270);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(250);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0.01);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0.0005);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(200);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(25);
}{runtimeScene.getVariables().getFromIndex(8).setNumber(25);
}{runtimeScene.getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(0);
}}

}


{



}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FirstLevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnabledText"), gdjs.FirstLevelCode.GDEnabledTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.FirstLevelCode.GDFinalScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverText"), gdjs.FirstLevelCode.GDGameOverTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.FirstLevelCode.GDRestartTextObjects1);
{for(var i = 0, len = gdjs.FirstLevelCode.GDGameOverTextObjects1.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDGameOverTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDRestartTextObjects1.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDRestartTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDFinalScoreTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDEnabledTextObjects1.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDEnabledTextObjects1[i].hide();
}
}}

}


};gdjs.FirstLevelCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
gdjs.FirstLevelCode.condition1IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if ( gdjs.FirstLevelCode.condition0IsTrue_0.val ) {
{
gdjs.FirstLevelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.FirstLevelCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PressSpaceToBeginText"), gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects2);
{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}{for(var i = 0, len = gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects2[i].hide();
}
}}

}


{



}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 2;
}if (gdjs.FirstLevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.FirstLevelCode.GDFinalScoreTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("GameOverText"), gdjs.FirstLevelCode.GDGameOverTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("PressSpaceToBeginText"), gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.FirstLevelCode.GDRestartTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreNum"), gdjs.FirstLevelCode.GDScoreNumObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.FirstLevelCode.GDScoreTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Snowball"), gdjs.FirstLevelCode.GDSnowballObjects2);
{for(var i = 0, len = gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDGameOverTextObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDGameOverTextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDRestartTextObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDRestartTextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDFinalScoreTextObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDFinalScoreTextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDScoreTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDScoreNumObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDScoreNumObjects2[i].setPosition(430,288);
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDSnowballObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDSnowballObjects2[i].activateBehavior("TopDownMovement", false);
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDSnowballObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDSnowballObjects2[i].setAnimationName("snowballStatic");
}
}}

}


{



}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
gdjs.FirstLevelCode.condition1IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 2;
}if ( gdjs.FirstLevelCode.condition0IsTrue_0.val ) {
{
gdjs.FirstLevelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}}
if (gdjs.FirstLevelCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FirstLevel", false);
}}

}


};gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDSnowballObjects4Objects = Hashtable.newFrom({"Snowball": gdjs.FirstLevelCode.GDSnowballObjects4});gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDRockObjects4Objects = Hashtable.newFrom({"Rock": gdjs.FirstLevelCode.GDRockObjects4});gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDSnowballObjects4Objects = Hashtable.newFrom({"Snowball": gdjs.FirstLevelCode.GDSnowballObjects4});gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDWhiteTreeObjects4Objects = Hashtable.newFrom({"WhiteTree": gdjs.FirstLevelCode.GDWhiteTreeObjects4});gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDGameBarrierObjects2Objects = Hashtable.newFrom({"GameBarrier": gdjs.FirstLevelCode.GDGameBarrierObjects2});gdjs.FirstLevelCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.FirstLevelCode.GDRockObjects1, gdjs.FirstLevelCode.GDRockObjects3);

gdjs.FirstLevelCode.GDSnowballObjects3.length = 0;

gdjs.copyArray(gdjs.FirstLevelCode.GDWhiteTreeObjects1, gdjs.FirstLevelCode.GDWhiteTreeObjects3);


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
gdjs.FirstLevelCode.condition1IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 0;
}if ( gdjs.FirstLevelCode.condition0IsTrue_0.val ) {
{
{gdjs.FirstLevelCode.conditionTrue_1 = gdjs.FirstLevelCode.condition1IsTrue_0;
gdjs.FirstLevelCode.GDRockObjects3_1final.length = 0;gdjs.FirstLevelCode.GDSnowballObjects3_1final.length = 0;gdjs.FirstLevelCode.GDWhiteTreeObjects3_1final.length = 0;gdjs.FirstLevelCode.condition0IsTrue_1.val = false;
gdjs.FirstLevelCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.FirstLevelCode.GDRockObjects1, gdjs.FirstLevelCode.GDRockObjects4);

gdjs.copyArray(runtimeScene.getObjects("Snowball"), gdjs.FirstLevelCode.GDSnowballObjects4);
gdjs.FirstLevelCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDSnowballObjects4Objects, gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDRockObjects4Objects, false, runtimeScene, false);
if( gdjs.FirstLevelCode.condition0IsTrue_1.val ) {
    gdjs.FirstLevelCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FirstLevelCode.GDRockObjects4.length;j<jLen;++j) {
        if ( gdjs.FirstLevelCode.GDRockObjects3_1final.indexOf(gdjs.FirstLevelCode.GDRockObjects4[j]) === -1 )
            gdjs.FirstLevelCode.GDRockObjects3_1final.push(gdjs.FirstLevelCode.GDRockObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.FirstLevelCode.GDSnowballObjects4.length;j<jLen;++j) {
        if ( gdjs.FirstLevelCode.GDSnowballObjects3_1final.indexOf(gdjs.FirstLevelCode.GDSnowballObjects4[j]) === -1 )
            gdjs.FirstLevelCode.GDSnowballObjects3_1final.push(gdjs.FirstLevelCode.GDSnowballObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Snowball"), gdjs.FirstLevelCode.GDSnowballObjects4);
gdjs.copyArray(gdjs.FirstLevelCode.GDWhiteTreeObjects1, gdjs.FirstLevelCode.GDWhiteTreeObjects4);

gdjs.FirstLevelCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDSnowballObjects4Objects, gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDWhiteTreeObjects4Objects, false, runtimeScene, false);
if( gdjs.FirstLevelCode.condition1IsTrue_1.val ) {
    gdjs.FirstLevelCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.FirstLevelCode.GDSnowballObjects4.length;j<jLen;++j) {
        if ( gdjs.FirstLevelCode.GDSnowballObjects3_1final.indexOf(gdjs.FirstLevelCode.GDSnowballObjects4[j]) === -1 )
            gdjs.FirstLevelCode.GDSnowballObjects3_1final.push(gdjs.FirstLevelCode.GDSnowballObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.FirstLevelCode.GDWhiteTreeObjects4.length;j<jLen;++j) {
        if ( gdjs.FirstLevelCode.GDWhiteTreeObjects3_1final.indexOf(gdjs.FirstLevelCode.GDWhiteTreeObjects4[j]) === -1 )
            gdjs.FirstLevelCode.GDWhiteTreeObjects3_1final.push(gdjs.FirstLevelCode.GDWhiteTreeObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.FirstLevelCode.GDRockObjects3_1final, gdjs.FirstLevelCode.GDRockObjects3);
gdjs.copyArray(gdjs.FirstLevelCode.GDSnowballObjects3_1final, gdjs.FirstLevelCode.GDSnowballObjects3);
gdjs.copyArray(gdjs.FirstLevelCode.GDWhiteTreeObjects3_1final, gdjs.FirstLevelCode.GDWhiteTreeObjects3);
}
}
}}
if (gdjs.FirstLevelCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FirstLevelCode.GDSnowballObjects3 */
{for(var i = 0, len = gdjs.FirstLevelCode.GDSnowballObjects3.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDSnowballObjects3[i].setScale(gdjs.FirstLevelCode.GDSnowballObjects3[i].getScale() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{runtimeScene.getVariables().getFromIndex(4).sub(2);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("GameBarrier"), gdjs.FirstLevelCode.GDGameBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("Snowball"), gdjs.FirstLevelCode.GDSnowballObjects2);
{for(var i = 0, len = gdjs.FirstLevelCode.GDSnowballObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDSnowballObjects2[i].separateFromObjectsList(gdjs.FirstLevelCode.mapOfGDgdjs_46FirstLevelCode_46GDGameBarrierObjects2Objects, false);
}
}}

}


};gdjs.FirstLevelCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.FirstLevelCode.GDRockObjects1, gdjs.FirstLevelCode.GDRockObjects3);


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstLevelCode.GDRockObjects3.length;i<l;++i) {
    if ( gdjs.FirstLevelCode.GDRockObjects3[i].getY() <= -(100) ) {
        gdjs.FirstLevelCode.condition0IsTrue_0.val = true;
        gdjs.FirstLevelCode.GDRockObjects3[k] = gdjs.FirstLevelCode.GDRockObjects3[i];
        ++k;
    }
}
gdjs.FirstLevelCode.GDRockObjects3.length = k;}if (gdjs.FirstLevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FirstLevelCode.GDRockObjects3 */
{for(var i = 0, len = gdjs.FirstLevelCode.GDRockObjects3.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDRockObjects3[i].setY(gdjs.randomInRange(700, 1500));
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDRockObjects3.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDRockObjects3[i].setX(gdjs.randomInRange(10, 640));
}
}}

}


{

gdjs.copyArray(gdjs.FirstLevelCode.GDWhiteTreeObjects1, gdjs.FirstLevelCode.GDWhiteTreeObjects2);


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstLevelCode.GDWhiteTreeObjects2.length;i<l;++i) {
    if ( gdjs.FirstLevelCode.GDWhiteTreeObjects2[i].getY() <= -(100) ) {
        gdjs.FirstLevelCode.condition0IsTrue_0.val = true;
        gdjs.FirstLevelCode.GDWhiteTreeObjects2[k] = gdjs.FirstLevelCode.GDWhiteTreeObjects2[i];
        ++k;
    }
}
gdjs.FirstLevelCode.GDWhiteTreeObjects2.length = k;}if (gdjs.FirstLevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FirstLevelCode.GDWhiteTreeObjects2 */
{for(var i = 0, len = gdjs.FirstLevelCode.GDWhiteTreeObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDWhiteTreeObjects2[i].setY(gdjs.randomInRange(600, 1600));
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDWhiteTreeObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDWhiteTreeObjects2[i].setX(gdjs.randomInRange(10, 640));
}
}}

}


};gdjs.FirstLevelCode.eventsList4 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("ScoreNum"), gdjs.FirstLevelCode.GDScoreNumObjects2);
gdjs.copyArray(runtimeScene.getObjects("Snowball"), gdjs.FirstLevelCode.GDSnowballObjects2);
{for(var i = 0, len = gdjs.FirstLevelCode.GDScoreNumObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDScoreNumObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDSnowballObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDSnowballObjects2[i].setScale(gdjs.FirstLevelCode.GDSnowballObjects2[i].getScale() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
}{runtimeScene.getVariables().get("snowballSize").add(0.5);
}{runtimeScene.getVariables().getFromIndex(4).add(1);
}{runtimeScene.getVariables().getFromIndex(1).add(0.1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Snowball"), gdjs.FirstLevelCode.GDSnowballObjects1);

gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstLevelCode.conditionTrue_1 = gdjs.FirstLevelCode.condition0IsTrue_0;
gdjs.FirstLevelCode.condition0IsTrue_1.val = false;
gdjs.FirstLevelCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstLevelCode.GDSnowballObjects1.length;i<l;++i) {
    if ( gdjs.FirstLevelCode.GDSnowballObjects1[i].getScaleX() <= 0.02 ) {
        gdjs.FirstLevelCode.condition0IsTrue_1.val = true;
        gdjs.FirstLevelCode.GDSnowballObjects1[k] = gdjs.FirstLevelCode.GDSnowballObjects1[i];
        ++k;
    }
}
gdjs.FirstLevelCode.GDSnowballObjects1.length = k;}if ( gdjs.FirstLevelCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.FirstLevelCode.GDSnowballObjects1.length;i<l;++i) {
    if ( gdjs.FirstLevelCode.GDSnowballObjects1[i].getScaleY() <= 0.01 ) {
        gdjs.FirstLevelCode.condition1IsTrue_1.val = true;
        gdjs.FirstLevelCode.GDSnowballObjects1[k] = gdjs.FirstLevelCode.GDSnowballObjects1[i];
        ++k;
    }
}
gdjs.FirstLevelCode.GDSnowballObjects1.length = k;}}
gdjs.FirstLevelCode.conditionTrue_1.val = true && gdjs.FirstLevelCode.condition0IsTrue_1.val && gdjs.FirstLevelCode.condition1IsTrue_1.val;
}
}if (gdjs.FirstLevelCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(2);
}}

}


};gdjs.FirstLevelCode.eventsList5 = function(runtimeScene) {

{


gdjs.FirstLevelCode.eventsList2(runtimeScene);
}


{


gdjs.FirstLevelCode.eventsList3(runtimeScene);
}


{


gdjs.FirstLevelCode.eventsList4(runtimeScene);
}


};gdjs.FirstLevelCode.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if (gdjs.FirstLevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.FirstLevelCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteTree"), gdjs.FirstLevelCode.GDWhiteTreeObjects1);
{runtimeScene.updateObjectsForces();}{for(var i = 0, len = gdjs.FirstLevelCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDRockObjects1[i].addPolarForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), 0);
}
}{for(var i = 0, len = gdjs.FirstLevelCode.GDWhiteTreeObjects1.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDWhiteTreeObjects1[i].addPolarForce(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), 0);
}
}
{ //Subevents
gdjs.FirstLevelCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.FirstLevelCode.eventsList7 = function(runtimeScene) {

{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
gdjs.FirstLevelCode.condition1IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)) == 0;
}if ( gdjs.FirstLevelCode.condition0IsTrue_0.val ) {
{
gdjs.FirstLevelCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 0;
}}
if (gdjs.FirstLevelCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnabledText"), gdjs.FirstLevelCode.GDEnabledTextObjects2);
{runtimeScene.getVariables().getFromIndex(9).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}{for(var i = 0, len = gdjs.FirstLevelCode.GDEnabledTextObjects2.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDEnabledTextObjects2[i].hide(false);
}
}}

}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
gdjs.FirstLevelCode.condition1IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)) == 0;
}if ( gdjs.FirstLevelCode.condition0IsTrue_0.val ) {
{
gdjs.FirstLevelCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 1;
}}
if (gdjs.FirstLevelCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnabledText"), gdjs.FirstLevelCode.GDEnabledTextObjects1);
{runtimeScene.getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}{for(var i = 0, len = gdjs.FirstLevelCode.GDEnabledTextObjects1.length ;i < len;++i) {
    gdjs.FirstLevelCode.GDEnabledTextObjects1[i].hide();
}
}}

}


};gdjs.FirstLevelCode.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if (gdjs.FirstLevelCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(2);
}}

}


{


gdjs.FirstLevelCode.condition0IsTrue_0.val = false;
gdjs.FirstLevelCode.condition1IsTrue_0.val = false;
{
gdjs.FirstLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if ( gdjs.FirstLevelCode.condition0IsTrue_0.val ) {
{
{gdjs.FirstLevelCode.conditionTrue_1 = gdjs.FirstLevelCode.condition1IsTrue_0;
gdjs.FirstLevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7117100);
}
}}
if (gdjs.FirstLevelCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(0);
}
{ //Subevents
gdjs.FirstLevelCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.FirstLevelCode.eventsList9 = function(runtimeScene) {

{


gdjs.FirstLevelCode.eventsList0(runtimeScene);
}


{


gdjs.FirstLevelCode.eventsList1(runtimeScene);
}


{


gdjs.FirstLevelCode.eventsList6(runtimeScene);
}


{


gdjs.FirstLevelCode.eventsList8(runtimeScene);
}


{


{
}

}


};

gdjs.FirstLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FirstLevelCode.GDSnowballObjects1.length = 0;
gdjs.FirstLevelCode.GDSnowballObjects2.length = 0;
gdjs.FirstLevelCode.GDSnowballObjects3.length = 0;
gdjs.FirstLevelCode.GDSnowballObjects4.length = 0;
gdjs.FirstLevelCode.GDSnowBackgroundObjects1.length = 0;
gdjs.FirstLevelCode.GDSnowBackgroundObjects2.length = 0;
gdjs.FirstLevelCode.GDSnowBackgroundObjects3.length = 0;
gdjs.FirstLevelCode.GDSnowBackgroundObjects4.length = 0;
gdjs.FirstLevelCode.GDGameBarrierObjects1.length = 0;
gdjs.FirstLevelCode.GDGameBarrierObjects2.length = 0;
gdjs.FirstLevelCode.GDGameBarrierObjects3.length = 0;
gdjs.FirstLevelCode.GDGameBarrierObjects4.length = 0;
gdjs.FirstLevelCode.GDScoreTextObjects1.length = 0;
gdjs.FirstLevelCode.GDScoreTextObjects2.length = 0;
gdjs.FirstLevelCode.GDScoreTextObjects3.length = 0;
gdjs.FirstLevelCode.GDScoreTextObjects4.length = 0;
gdjs.FirstLevelCode.GDScoreNumObjects1.length = 0;
gdjs.FirstLevelCode.GDScoreNumObjects2.length = 0;
gdjs.FirstLevelCode.GDScoreNumObjects3.length = 0;
gdjs.FirstLevelCode.GDScoreNumObjects4.length = 0;
gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects1.length = 0;
gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects2.length = 0;
gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects3.length = 0;
gdjs.FirstLevelCode.GDPressSpaceToBeginTextObjects4.length = 0;
gdjs.FirstLevelCode.GDGameOverTextObjects1.length = 0;
gdjs.FirstLevelCode.GDGameOverTextObjects2.length = 0;
gdjs.FirstLevelCode.GDGameOverTextObjects3.length = 0;
gdjs.FirstLevelCode.GDGameOverTextObjects4.length = 0;
gdjs.FirstLevelCode.GDRestartTextObjects1.length = 0;
gdjs.FirstLevelCode.GDRestartTextObjects2.length = 0;
gdjs.FirstLevelCode.GDRestartTextObjects3.length = 0;
gdjs.FirstLevelCode.GDRestartTextObjects4.length = 0;
gdjs.FirstLevelCode.GDFinalScoreTextObjects1.length = 0;
gdjs.FirstLevelCode.GDFinalScoreTextObjects2.length = 0;
gdjs.FirstLevelCode.GDFinalScoreTextObjects3.length = 0;
gdjs.FirstLevelCode.GDFinalScoreTextObjects4.length = 0;
gdjs.FirstLevelCode.GDDevControlsObjects1.length = 0;
gdjs.FirstLevelCode.GDDevControlsObjects2.length = 0;
gdjs.FirstLevelCode.GDDevControlsObjects3.length = 0;
gdjs.FirstLevelCode.GDDevControlsObjects4.length = 0;
gdjs.FirstLevelCode.GDEnabledTextObjects1.length = 0;
gdjs.FirstLevelCode.GDEnabledTextObjects2.length = 0;
gdjs.FirstLevelCode.GDEnabledTextObjects3.length = 0;
gdjs.FirstLevelCode.GDEnabledTextObjects4.length = 0;
gdjs.FirstLevelCode.GDFinishLineObjects1.length = 0;
gdjs.FirstLevelCode.GDFinishLineObjects2.length = 0;
gdjs.FirstLevelCode.GDFinishLineObjects3.length = 0;
gdjs.FirstLevelCode.GDFinishLineObjects4.length = 0;
gdjs.FirstLevelCode.GDWhiteTreeObjects1.length = 0;
gdjs.FirstLevelCode.GDWhiteTreeObjects2.length = 0;
gdjs.FirstLevelCode.GDWhiteTreeObjects3.length = 0;
gdjs.FirstLevelCode.GDWhiteTreeObjects4.length = 0;
gdjs.FirstLevelCode.GDRockObjects1.length = 0;
gdjs.FirstLevelCode.GDRockObjects2.length = 0;
gdjs.FirstLevelCode.GDRockObjects3.length = 0;
gdjs.FirstLevelCode.GDRockObjects4.length = 0;

gdjs.FirstLevelCode.eventsList9(runtimeScene);
return;

}

gdjs['FirstLevelCode'] = gdjs.FirstLevelCode;
