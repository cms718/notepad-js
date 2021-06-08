"strict";

function testDisplayEmptyList() {
  var notepad = new Notepad();
  console.log("Starts empty?");
  if (notepad.shortenedNotes().length === 0) {
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
  if (notepad.shortenedNotes()[0] === "first note") {
    console.log("PASS");
  } else console.log("FAIL");
}

function testAbbreviateNote() {
  var notepad = new Notepad();
  console.log("Abbreviates note to 20 chars?");
  notepad.addNote("This is a programme written by Beca, Charlie and Felix ");
  if (notepad.shortenedNotes()[0] === "This is a programme ...") {
    console.log("PASS");
  } else console.log("FAIL");
}
function testDoesNotAbbreviateNote() {
  var notepad = new Notepad();
  console.log("Doesn't abbreviate note less than 20 chars?");
  notepad.addNote("Hello");
  if (notepad.shortenedNotes()[0] === "Hello") {
    console.log("PASS");
  } else console.log("FAIL");
}

function testReturningCompleteNote() {
  var notepad = new Notepad();
  console.log("Returns the complete note from id 1");
  notepad.addNote("This is a programme written by Beca, Charlie and Felix ");
  if (
    notepad.findNote(1) ===
    "This is a programme written by Beca, Charlie and Felix "
  ) {
    console.log("PASS");
  } else console.log("FAIL");
}

function testReturningCompleteNote2() {
  var notepad = new Notepad();
  console.log("Returns the complete note from id 2");
  notepad.addNote("Buy eggs");
  notepad.addNote("Buy milk")
  if (
    notepad.findNote(2) ===
    "Buy milk"
  ) {
    console.log("PASS");
  } else console.log("FAIL");
}

testDisplayEmptyList();
testDisplayListOfNotes();
testAddNote();
testAbbreviateNote();
testDoesNotAbbreviateNote();
testReturningCompleteNote();
testReturningCompleteNote2();

