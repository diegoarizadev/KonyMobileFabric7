function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var btnIdentificacion = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "10%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnIdentificacion",
        "isVisible": true,
        "onClick": AS_Button_a9795580fb71473b81d7f1215163e00f,
        "skin": "slButtonGlossBlue",
        "text": "Identificacion",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHome.add(btnIdentificacion);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};