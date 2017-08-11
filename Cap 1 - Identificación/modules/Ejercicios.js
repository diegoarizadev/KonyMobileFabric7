//Type your code here
function initializeKonyMobileFabricClient(){
	var Cmf = new kony.sdk();
	var appkey = "5f9699b3c41f878a29bb48bba4644263";
    var appsecret = "25a888306ac8ba4ba5814c3a3c9aeb8";
    var serviceurl = "https://100005376.auth.konycloud.com/appconfig";
    kony.print("******* Initializing MobileFabric Client *******");    
	Cmf.init(appkey, appsecret, serviceurl, successCallback, errorCallback);
}

function successCallback(res){
  //code for success call back
}

function errorCallback(res){
  //code for failure call back
}


function OnbtnIdentificacion(){
  
  frmServicioIdentificacion.show();
  
  
}

