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
    var listJson = [];
    var objectJson = {};
    console.log(rows)
    for(var i = 1;i<=rows.length; i++){
        var cells = rows[i].split(',');
        listJson.push({
            'Date':cells[0],
            'Open':cells[1],
            'High':cells[2],
            'Low':cells[3],
            'Close':cells[4],
            'Adj Close':cells[5],
            'Volume':cells[6]
        }) 
    }
    objectJson.listJson = listJson;
    console.log(JSON.stringify(objectJson));
}

