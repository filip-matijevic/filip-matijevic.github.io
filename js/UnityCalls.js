var databaseURL = 'https://clwg.herokuapp.com';
var unityInstance;
var currentLanguage = "ENG";

function assignUnityInstance(instance){
  unityInstance = instance;
}

function setLanguage(lan){
	console.log("Language changed");
	currentLanguage = lan;
}





function openWebsite(url) {
	Swal.fire({
  	title: currentLanguage == 'ENG' ? "You are about to open a new tab" : "Vous êtes sur le point d\'ouvrir un nouvel onglet",
  	showCloseButton: true,
  	showCancelButton: false,
  	focusConfirm: true,
  	confirmButtonText: currentLanguage == 'ENG' ? "CONTINUE" : "CONTINUER"
	}).then((result) =>{
	if (result.isConfirmed){	
    	var win = window.open(url, '_blank');
    	win.focus();
	}
	})
}

function TrySend(){
  console.log('sent');
  unityInstance.SendMessage('CONTENT MANAGER', 'ReceivePlayerData', 'foo');
}

function respondDatabaseURL(){

  unityInstance.SendMessage('RESOURCE MANAGER', 'ReceiveDatabasePath', databaseURL);
}