/**
 * Ruft die Daten für eine Menge von ToDos ab.
 * @param {ToDo[]} arrToDos ToDos, dessen Daten abgerufen werden sollen.
 * @returns {Promise}
 */
function getAllTodos(arrToDos) {
    var deferred = $q.defer();
    var intTodoCount = arrToDos.length; // Schneller als ständig über das Array die Länge zu fragen.
    var arrToDoReady = []; //Hier merken wir uns alle Todos, die fertig geladen sind.

    for(var index in arrToDos){
        getTodo(arrTodos[index])  //Aufrufen der Funktion, die genau ein ToDo abruft.
            .then(function(objTodo){   //Diese liefert im Erfolgsfall genau das ToDo
                arrToDoReady.push(objTodo); //Das ToDo in unsere 'Callback-Warteschlange' einreihen
                // Sollte die Warteschlange nun genau so lang sein, wie unser übergebenes Array
                if(arrToDoReady.length == intTodoCount){
                    deferred.resolve(arrToDos); // Dann liefere ein 'resolve' und damit den Erfolg.
                }
            }, deferred.reject);
    }
}