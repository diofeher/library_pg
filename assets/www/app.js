function createBookQuery(tx){
	 

}

//create table and insert some record
function populateDB(tx) {
	// criar editora
    tx.executeSql('CREATE TABLE IF NOT EXISTS Editora (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL)');
    tx.executeSql('INSERT INTO Editora(Name) VALUES ("Saraiva")');
	// criar autor
    tx.executeSql('CREATE TABLE IF NOT EXISTS Autor (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL)');
    tx.executeSql('INSERT INTO Autor(Name) VALUES ("Saramago")');
    tx.executeSql('INSERT INTO Autor(Name) VALUES ("Mc Sheldon")');
    // criar livro
    tx.executeSql('CREATE TABLE IF NOT EXISTS Livro (id INTEGER PRIMARY KEY AUTOINCREMENT, '+
    'barcode TEXT NOT NULL, editora_id INTEGER NOT NULL, photo TEXT NOT NULL '+
    'FOREIGN KEY(editora_id) REFERENCES Editora(id) )');
    // criar preco
}

function onDeviceReady() {
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.transaction(populateDB);
}

document.addEventListener("deviceready", onDeviceReady, false);