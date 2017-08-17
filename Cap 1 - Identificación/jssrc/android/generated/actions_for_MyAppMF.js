//actions.js file 
function AS_Button_e9e64b3696b3442793c7a1913aead3bd(eventobject) {}

function Action_InitMF(eventobject) {
    return AS_Form_c387d982c7874181b17e792a453f90a5(eventobject);
}

function AS_Form_c387d982c7874181b17e792a453f90a5(eventobject) {
    return inicializarMfCliente.call(this);
}

function Action_Logout(eventobject) {
    return AS_Button_e872bcebace046b98bee2358046b5e9c(eventobject);
}

function AS_Button_e872bcebace046b98bee2358046b5e9c(eventobject) {
    return getLogout.call(this);
}

function Action_Profile(eventobject) {
    return AS_Button_ea5c93239c4a4189856b0a9426866a50(eventobject);
}

function AS_Button_ea5c93239c4a4189856b0a9426866a50(eventobject) {
    return getProfile.call(this);
}

function Action_frmHome(eventobject) {
    return AS_Button_a9795580fb71473b81d7f1215163e00f(eventobject);
}

function AS_Button_a9795580fb71473b81d7f1215163e00f(eventobject) {
    return OnbtnIdentificacion.call(this);
}