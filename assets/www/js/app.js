function createBookQuery(tx){
	 

}

//create table and insert some record
function populateDB(tx) {
	// criar editora
    tx.executeSql('DROP TABLE IF EXISTS Editora');
    tx.executeSql('DROP TABLE IF EXISTS Autor');
    tx.executeSql('DROP TABLE IF EXISTS Livro');
    tx.executeSql('DROP TABLE IF EXISTS Preco');
    tx.executeSql('CREATE TABLE Editora (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    tx.executeSql('INSERT INTO Editora(name) VALUES ("Manke")');
    tx.executeSql('INSERT INTO Editora(name) VALUES ("LTC")');
	// criar autor
    tx.executeSql('CREATE TABLE Autor (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    tx.executeSql('INSERT INTO Autor(name) VALUES ("Saramago")');
    tx.executeSql('INSERT INTO Autor(name) VALUES ("Mc Sheldon")');
    // criar livro
    tx.executeSql('CREATE TABLE Livro (id INTEGER PRIMARY KEY AUTOINCREMENT, barcode TEXT NOT NULL, editora_id INTEGER NOT NULL, photo TEXT NOT NULL, FOREIGN KEY(editora_id) REFERENCES Editora(id) )');
    tx.executeSql("INSERT INTO Livro(photo, barcode, editora_id) VALUES ('12312312', 'diogenes123123lindo', 1)");
    // criar preco
    tx.executeSql('CREATE TABLE Preco (id INTEGER PRIMARY KEY AUTOINCREMENT, price TEXT NOT NULL, livro_id INTEGER NOT NULL, latitude TEXT NOT NULL, longitude TEXT NOT NULL, FOREIGN KEY(livro_id) REFERENCES Livro(id) )');
    tx.executeSql("INSERT INTO Preco (price, latitude, longitude, livro_id) VALUES ('123', '-7.1308256', '-34.87224414', 1)");
    tx.executeSql("INSERT INTO Preco (price, latitude, longitude, livro_id) VALUES ('111', '-7.1308254', '-34.87224412', 1)");
}

function errorCB(err) {
    alert(err.message);
}

function successCB() {
    // alert('success');
}

function onDeviceReady() {
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.transaction(populateDB, errorCB, successCB);
}

function getParams() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

document.addEventListener("deviceready", onDeviceReady, false);