var databaseURL = 'https://clwg.herokuapp.com';
var unityInstance;

function assignUnityInstance(instance){
  unityInstance = instance;
}





function openWebsite(url) {
    console.log(url);
    var win = window.open(url, '_blank');
    win.focus();
}

function TrySend(){
  console.log('sent');
  unityInstance.SendMessage('CONTENT MANAGER', 'ReceivePlayerData', 'foo');
}

function respondDatabaseURL(){

  unityInstance.SendMessage('RESOURCE MANAGER', 'ReceiveDatabasePath', databaseURL);
}