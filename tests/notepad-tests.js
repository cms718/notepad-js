"strict";

function testDisplayEmptyList() {
  var notepad = new Notepad();
  console.log("Starts empty?");
  if (notepad.list().length === 0) {
    console.log("PASS");
  } else console.log("FAIL");
}

function testDisplayListOfNotes() {
  var notepad = new Notepad();
  console.log("Displays list?");
  notepad.addNote("first note");
  if (notepad.notes[0] === "first note") {
    console.log("PASS");
  } else console.log("FAIL");
}

function testAddNote() {
  var notepad = new Notepad();
  console.log("Adds a new note?");
  notepad.addNote("first note");
  if (notepad.list()[0] === "first note") {
    console.log("PASS");
  } else console.log("FAIL");
}

testDisplayEmptyList();
testDisplayListOfNotes();
testAddNote();
