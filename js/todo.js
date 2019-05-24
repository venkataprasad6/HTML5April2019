var inputValueRef = document.getElementById("taskid")
var currentCounter = 0

var addTask = function() {
    console.log(inputValueRef.value)
    currentCounter = localStorage.counter
    localStorage.setItem("task_" + currentCounter, inputValueRef.value)
    localStorage.counter++
        inputValueRef.value = ""
    loadAllValues()
}

var deleteTask = function() {
    console.log(inputValueRef.value)
    currentCounter = localStorage.counter
    localStorage.removeItem("task_" + currentCounter, inputValueRef.value)
    localStorage.counter--
        inputValueRef.value = ""
    loadAllValues()
}

var loadAllValues = function() {
    var containerRef = document.getElementById("taskcontainer")
    containerRef.innerHTML = ""
        //creating new ol element in memory (not the part of DOM)
    var newol = document.createElement("ol")
        //appending new element to DOM inside respective DIV
    containerRef.appendChild(newol)

    var maxCounter = localStorage.getItem("counter")
    for (var i = 0; i < maxCounter; i++) {
        //create new li element in memory
        var newli = document.createElement("li")
            //append new li element  to DOM as a child of ol
        newli.innerHTML = localStorage.getItem("task_" + i)
        newol.appendChild(newli)
    }
}



var initializeValue = function() {
    if (localStorage.counter === undefined) {
        localStorage.counter = 0
    } else {
        currentCounter = localStorage.counter
    }

    loadAllValues()
}