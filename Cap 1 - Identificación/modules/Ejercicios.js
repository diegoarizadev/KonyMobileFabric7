//Type your code here
function inicializarMfCliente(){
  /*
  funcion encargada de inicializar la instanacia de MF7.x
  Nota: Kony MBaaS se inicializa automáticamente, sólo si la aplicación 
        MobileFabric está enlazada en el Kony Visualizer. En todos los demás 
        casos el código de inicialización MBaaS debe ser escrito por el cliente.
  
  */
	konyMobileFabric = new kony.sdk();
    kony.print("******* Inicializando MobileFabric*******"); 
  
  
	konyMobileFabric.init(appkey, 
                          appsecret, 
                          serviceurl, 
                          fnInicializacionOK,/*getlogin,*/
                          fnInicializacionError);
  
  //Hasta este momento se realizado una conexion ANONIMA con la instancia.
}

function fnInicializacionOK(response){
  /*
  funcion de reaccionar a la conexion exitosa con la instancia.
  */
  frmServicioIdentificacion.lblResultado.text = "Conexion Exitosa con MF..";
  statusMF = true; //Variable para identificar el estado de la conexion con la instancia.
  getlogin();
}

function fnInicializacionError(error){
  /*
  funcion encargada de reaccionar si no es posible conectarse a la instancia.
  */
  frmServicioIdentificacion.lblResultado.text = "No se puede conectar a la instanacia..!"+JSON.stringify(error);
  statusMF = false;//Variable para identificar el estado de la conexion con la instancia.
}


function OnbtnIdentificacion(){
  /*
  funcion encargada de enviar del formulario frmHome al frmServicioIdentificacion.
  */  
  frmServicioIdentificacion.show();
}



function getlogin(){//Esta funcion debe retornar el token de la conexion
  /*
  funcion encargada de realizar login con la instancia.
  */
  
  frmServicioIdentificacion.lblResultado.text = "Login en proceso... "+statusMF;
  
  //frmServicioIdentificacion.lblResultado.text = "Conexion Exitosa con MF. Go Login.!"+JSON.stringify(response);
  
  if(statusMF === true){
    
  	frmServicioIdentificacion.lblResultado.text = "Login...";
  
    //userstore = Nombre del servicio configurado en la instancia.
    authClient = konyMobileFabric.getIdentityService("userstore");
    
    authClient.login({"userid":"diego.ariza@accenture.com", //Usuario
                      "password":"*********"},               //Contraseña
                     fnLoginExitoso,
                     fnLoginError
                    );


  }else{

    frmServicioIdentificacion.lblResultado.text = "No se realizar login.!"+JSON.stringify(respose);
  }

}

function fnLoginExitoso(response){
  /*
  funcion encargada de reaccionar si es posible realiza login.
  */
  //kony.alert("Login Exitoso, bienvenido!, "+JSON.stringify(response));
  frmServicioIdentificacion.lblResultado.text = "Login Exitoso, bienvenido!, "+JSON.stringify(response)+", Token : "+JSON.stringify(authClient);
  
  getProfile(); //Obtener el perfil
}
function fnLoginError(error){
  /*
  funcion encargada de reaccionar si no fue posible realizar login.
  */
  //kony.alert("Login Fallido!, "+JSON.stringify(error));
  frmServicioIdentificacion.lblResultado.text = "Login Fallido!, "+JSON.stringify(error);
}



function getProfile(){
  /*
  funcion encargada de obtener el perfil de usuario..
  Nota : La funcion nativa no retorna el numero de celular.
  */ 
     frmServicioIdentificacion.lblResultado.text = "";
     profile = authClient.getProfile(true, fnPerfilExitoso, fnPerfilError);

  
}
function fnPerfilExitoso(response){
  /*
  funcion encargada de reaccionar si es posible obtener el perfil.
  */
  
  frmServicioIdentificacion.lblResultado.text ="Tu Perfil, "+JSON.stringify(response);
}
function fnPerfilError(error){
  /*
  funcion encargada de reaccionar si no fue posible obtener el perfil.
  */
  frmServicioIdentificacion.lblResultado.text = "Obteniendo perfil Fallido!, "+JSON.stringify(error);
}



function getLogout(){
  /*
  funcion encargada de cerrar la sesion.
  */
  
  authClient.logout(fnlogoutExitoso,
                         fnlogoutError);

}

function fnlogoutExitoso(response){
  /*
  funcion encargada de reaccionar si es posible cerrar la sesion.
  */
  //kony.alert("Chao, "+JSON.stringify(response));
  frmServicioIdentificacion.lblResultado.text = "Chao. "+JSON.stringify(response);
}

function fnlogoutError(error){
  /*
  funcion encargada de reaccionar si no fue posible obtener cerrar la sesion.
  */
  kony.alert("Chao con error!, "+JSON.stringify(error));
  frmServicioIdentificacion.lblResultado.text = "Chao con error!, "+JSON.stringify(error);
}


