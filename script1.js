  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbm1pchGfFWXGLnBH3m_ukU4DXOSVEB0I",
    authDomain: "moringa-a4b64.firebaseapp.com",
    databaseURL: "https://moringa-a4b64.firebaseio.com",
    projectId: "moringa-a4b64",
    storageBucket: "",
    messagingSenderId: "873399083038"
  };
  firebase.initializeApp(config);
$.ajax({
    url: 'AAPL.csv',
    dataType: 'text',
}).done(loadSuccess);

function loadSuccess(data){
    var rows = data.split(/\r?\n|\r/);
    var varJson = {};
    // var names = rows[0].split(',');
    for(var i =0;i<=rows.length; i++){
        if(i===0){

        }else{

        }
        var cells = rows[i].split(',');
        console.log(cells)
    }

}

