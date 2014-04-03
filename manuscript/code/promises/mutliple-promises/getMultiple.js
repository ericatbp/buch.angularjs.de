/**
 * Ruft die Daten für eine Menge von ToDos ab.
 * @param {ToDo[]} arrToDos ToDos, dessen Daten abgerufen werden sollen.
 * @returns {Promise}
 */
function getAllTodos(arrToDos) {
    var deferred = $q.defer();
    var intTodoCount = arrToDos.length; // Schneller als ständig über das Array die Länge zu fragen.
    var arrPromises = []; //Hier merken wir uns alle Todos, die fertig geladen sind.

    for(var index in arrToDos){
        var promise = getTodo(arrTodos[index]);  //Aufrufen der Funktion, die genau ein ToDo abruft.
        arrPromises.push(promise); // Auf das Promise Array pushen
    }
    $q.all(arrPromises).then(function(){ // Auf alle Promises warten
        deferred.resolve(arrToDos);  // Wenn alle Promises erfolgreich fertig geladen, dann Erfolg weitergeben.
    }, deferred.reject);  // Sollte ein Promise ein 'reject' werfen, dann abbrechen und 'reject' werfen.

    return deferred.promise;
}