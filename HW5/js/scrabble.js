
// File: Scrabble.js
// GUI Assignment: Scrabble
// Ibrahim Swati, UMass Lowell Computer Science, iswati@cs.uml.edu
// Copyright (c) 2021 by Ibrahim. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
// updated by IS on August 13, 2021 at 5:46PM


var x;
var counter = 0; //Counter
var letterlength = 7; //Word Max length
var elementArrayForWord = ["A", "A", "A", "A", "A", "A", "A"]; //Temporary data in array
var placeholderarray = ["A", "A", "A", "A", "A", "A", "A"]; //Place holder 
var score = 0;

$(document).ready(getRandomWord()); //Generate random word and allow drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) { //Drag function 
    ev.dataTransfer.setData("text", ev.target.id);
    x = ev.target.id;

}

function drop(ev) { //Drop function 
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    switch (ev.target.id) {
        case "placeholder1":
            positionChanged($('#' + x).attr('src').toString());
            placeholderarray[0] = $('#' + x).attr('src').toString();
            checkWord();
            counter++;
            break;
        case "placeholder2":
            positionChanged($('#' + x).attr('src').toString());
            placeholderarray[1] = $('#' + x).attr('src').toString();
            checkWord();
            counter++;
            break;
        case "placeholder3":
            positionChanged($('#' + x).attr('src').toString());
            placeholderarray[2] = $('#' + x).attr('src').toString();
            checkWord();
            counter++;
            break;
        case "placeholder4":
            positionChanged($('#' + x).attr('src').toString());
            placeholderarray[3] = $('#' + x).attr('src').toString();
            checkWord();
            counter++;
            break;
        case "placeholder5":
            positionChanged($('#' + x).attr('src').toString());
            placeholderarray[4] = $('#' + x).attr('src').toString();
            checkWord();
            counter++;
            break;
        case "placeholder6":
            positionChanged($('#' + x).attr('src').toString());
            placeholderarray[5] = $('#' + x).attr('src').toString();
            checkWord();
            counter++;
            break;
        case "placeholder7":
            positionChanged($('#' + x).attr('src').toString());
            placeholderarray[6] = $('#' + x).attr('src').toString();
            checkWord();
            counter++;
            break;
        case "allElementsPlaceholder":
            removeElementFromPlaceholder(x);
            counter--;
            break;
    }
 
    console.log("--Function Check Word--");
}

function checkWord() {  //Check word function against the known words
    var flag = true;
    var tmparray = ["A", "A", "A", "A", "A", "A", "A"];
    var counter = 0;
    for (var k = 0; k < 7; k++) {
        if (placeholderarray[k] != "A") {
            tmparray[counter] = placeholderarray[k];
            counter++;
        }
    }

    for (var i = 0; i < 7; i++) {
        console.log(tmparray[i], elementArrayForWord[i])

        if (elementArrayForWord[i] != tmparray[i]) {
            flag = false;
        }

    }
    if (flag) { //Increment score when word is matched
        console.log("Congrats you got a word")
        score += 1;
        document.getElementById("score").innerHTML = "<spam> Score : " + score + " </spam>"

    }

}

function getRandomWord() {  //Generate random word
    var words = ["IBRAHIM", "Hangers", "Five", "Eleven", "Fi"]  //List of known words, dictionary goes here but haven't been able to attach it
    var totallength = words.length;
    console.log("total length", totallength)
    console.log("random number", Math.floor(Math.random() * totallength));
    var selectedword = Math.floor(Math.random() * totallength);
    var tmp = words[selectedword];
    console.log("word selected", tmp)
    letterlength = words[selectedword].length;
    document.getElementById("placeholderDiv").innerHTML = "";
    document.getElementById("allElementsPlaceholder").innerHTML = "";
    for (var i = 0; i < words[selectedword].length; i++) {
        var letter = tmp.toString().charAt(i).toUpperCase();
        document.getElementById("placeholderDiv").innerHTML = document.getElementById("placeholderDiv").innerHTML + '<div id="placeholder' + (i + 1) + '"' + ' class="droppedelementdiv" ondrop="drop(event)" ondragover="allowDrop(event)"></div>'
        elementArrayForWord[i] = "./images/Scrabble_Tile_" + letter + ".jpg";
        document.getElementById("allElementsPlaceholder").innerHTML = document.getElementById("allElementsPlaceholder").innerHTML + '<img id="element' + (i + 1) + '"' + ' class="mg-pic" src="./images/Scrabble_Tile_' + letter + '.jpg"' + '.jpg" draggable="true" ondragstart="drag(event)" width="30" height="30">';


    }


}
function positionChanged(x) { //Detect position change and alert console for debugging.
    console.log(x)

}
function removeElementFromPlaceholder(x) {  //Removing elements from placeholder
    for (var i = 0; i < 7; i++) {
        if (placeholderarray[i] == x) {
            console.log("matched", x, placeholderarray[i])
        }
    }
}

function refreshpage() {
    location.reload();
}
