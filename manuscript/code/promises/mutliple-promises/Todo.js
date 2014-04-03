/**
 * ToDo Klasse in der wir die Daten für ein ToDo speichern.
 * @constructor
 */
function Todo(arrParam) {
    this.id = "";  //Eindeutige ID unseres ToDos
    this.title = ""; // Titel des Todos
    this.done = false; //Eine Flag, die zeigt, ob das ToDo schon erledigt ist.

    this.constructor = function(arrParam){
        this.id = arrParam.id || "";
        this.title = arrParam.title || "";
        this.done = arrParam.done || false;
    };

    this.constructor(arrParam);
}