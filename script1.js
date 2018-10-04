  var script1 = document.getElementById('script1');
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
  var database = firebase.database().ref("moringaData");
$.ajax({
    url: 'AAPL.csv',
    dataType: 'text',
}).done(function(data){
    var dataAjax = data;
    script1.onclick = function(event) {
        loadSuccess(dataAjax);
    }
}
);

function loadSuccess(data){
    var rows = data.split(/\r?\n|\r/);
    var objectJson = {};
    rows.shift()
    for(var i = 0;i<rows.length; i++){
        var cells = rows[i].split(',');
        var objectJson = new Object();
        objectJson.Date=cells[0],
        objectJson.Open=cells[1],
        objectJson.High=cells[2],
        objectJson.Low=cells[3],
        objectJson.Close=cells[4],
        objectJson.AdjClose=cells[5],
        objectJson.Volume=cells[6]
        database.push(objectJson);
    }
    alert('Data Success!');
}

