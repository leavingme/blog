// Created by iWeb 3.0.4 local-build-20130224

setTransparentGifURL('../../../../Media/transparent.gif');
function applyEffects(){
    var registry = IWCreateEffectRegistry();
    registry.registerEffects({});
    registry.applyEffects();
}

function hostedOnDM(){
    return false;
}

function onPageLoad(){
    dynamicallyPopulate();
    loadMozillaCSS('24_Reflections_on_the_lake_files/24_Reflections_on_the_lakeMoz.css')
    adjustLineHeightIfTooBig('id1');
    adjustFontSizeIfTooBig('id1');
    adjustLineHeightIfTooBig('id2');
    adjustFontSizeIfTooBig('id2');
    adjustLineHeightIfTooBig('id3');
    adjustFontSizeIfTooBig('id3');
    adjustLineHeightIfTooBig('id4');
    adjustFontSizeIfTooBig('id4');
    adjustLineHeightIfTooBig('id6');
    adjustFontSizeIfTooBig('id6');
    adjustLineHeightIfTooBig('id7');
    adjustFontSizeIfTooBig('id7');
    Widget.onload();
    fixupAllIEPNGBGs();
    fixAllIEPNGs('../../../../Media/transparent.gif');
    fixupIECSS3Opacity('id5');
    BlogFixupPreviousNext();
    applyEffects()
}

function onPageUnload(){
    Widget.onunload();
}
