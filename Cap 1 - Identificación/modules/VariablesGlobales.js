var konyMobileFabric; //Variable para global del ambiente MF
//Begin Variables Ambiente
var appkey     = "5f9699b3c41f878a29bb48bba4644263";
var appsecret  = "25a888306ac8ba4ba5814c3a3c9aeb8";
var serviceurl = "https://100005376.auth.konycloud.com/appconfig";
//End Variables Ambiente.
var statusMF; //Variable para identificar el estado de la conexion con la instancia.
var tokenSesion; //Variable para identificar el token que retorna la instancia.
var profile;//Variable encargada de almacenar la informacion del perfil configurado en la instancia.
var authClient = null; //Variable encargada de almacenar la sesion del usuario.