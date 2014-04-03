/**
 * Holt die Daten über ein Todo anhand einer ID
 * @param {Todo} objToDo Das ToDo, dessen Daten abgerufen werden soll.
 * @returns {Promise}
 */
function getTodo(objToDo) {
    var deferred = $q.defer();

    if(objToDo && objToDo.id){   // Defensive
        $http.get("/todo/"+objToDo.id)
            .then(function(arrResponse){
                var resultToDoData = arrResponse.data.result;
                //Abgerufene Daten in das Objekt füllen
                objToDo.constructor(resultToDoData);
                // Erfolgt via 'resolve' melden.
                deferred.resolve(objToDo);
            }, deferred.reject);// Im Fehlerfall (http-Fehler) 'reject'
    }else{
        deferred.reject(); // reject, wenn falsche Übergabe
    }

    return deferred.promise;
}

