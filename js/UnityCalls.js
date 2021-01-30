var databaseURL = 'https://clwg.herokuapp.com';
var unityInstance;

function assignUnityInstance(instance){
  unityInstance = instance;
}





function openWebsite(url) {
	Swal.fire({
  	title: 'You are about to open a new web window',
  	showCloseButton: true,
  	showCancelButton: false,
  	focusConfirm: true,
  	confirmButtonText: 'CONTINUE'
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