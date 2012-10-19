function createBookQuery(tx){
	 

}

//create table and insert some record
function populateDB(tx) {
	// criar editora
    tx.executeSql('DROP TABLE IF EXISTS Editora');
    tx.executeSql('DROP TABLE IF EXISTS Autor');
    tx.executeSql('DROP TABLE IF EXISTS Livro');
    tx.executeSql('CREATE TABLE Editora (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)');
    tx.executeSql('INSERT INTO Editora(name) VALUES ("Manke")');
    tx.executeSql('INSERT INTO Editora(name) VALUES ("LTC")');
	// criar autor
    tx.executeSql('CREATE TABLE Autor (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL)');
    tx.executeSql('INSERT INTO Autor(Name) VALUES ("Saramago")');
    tx.executeSql('INSERT INTO Autor(Name) VALUES ("Mc Sheldon")');
    // criar livro
    tx.executeSql('CREATE TABLE Livro (id INTEGER PRIMARY KEY AUTOINCREMENT, barcode TEXT NOT NULL, editora_id INTEGER NOT NULL, photo TEXT NOT NULL, FOREIGN KEY(editora_id) REFERENCES Editora(id) )');
    tx.executeSql("INSERT INTO Livro(photo, barcode, editora_id) VALUES ('12312312', 'diogenes123123lindo', 1)");
    // criar preco
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

document.addEventListener("deviceready", onDeviceReady, false);