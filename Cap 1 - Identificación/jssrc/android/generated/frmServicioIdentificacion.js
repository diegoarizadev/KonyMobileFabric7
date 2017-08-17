function addWidgetsfrmServicioIdentificacion() {
    frmServicioIdentificacion.setDefaultUnit(kony.flex.DP);
    var btnAppLevel = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnAppLevel",
        "isVisible": true,
        "left": "51dp",
        "skin": "slButtonGlossBlue",
        "text": "App Level",
        "top": "70dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnUserStorage = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnUserStorage",
        "isVisible": true,
        "left": "51dp",
        "skin": "slButtonGlossBlue",
        "text": "User Storage",
        "top": "145dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnLogout = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnLogout",
        "isVisible": true,
        "left": "9dp",
        "onClick": AS_Button_e872bcebace046b98bee2358046b5e9c,
        "skin": "slButtonGlossBlue",
        "text": "Salir",
        "top": "7dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnPerfil = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnPerfil",
        "isVisible": true,
        "left": "270dp",
        "onClick": AS_Button_ea5c93239c4a4189856b0a9426866a50,
        "skin": "slButtonGlossBlue",
        "text": "Perfil",
        "top": "7dp",
        "width": "95dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblResultado = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblResultado",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0fa094bfd091c4c",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "94%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmServicioIdentificacion.add(btnAppLevel, btnUserStorage, btnLogout, btnPerfil, lblResultado);
};

function frmServicioIdentificacionGlobals() {
    frmServicioIdentificacion = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmServicioIdentificacion,
        "enabledForIdleTimeout": false,
        "id": "frmServicioIdentificacion",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_c387d982c7874181b17e792a453f90a5,
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