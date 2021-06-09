"strict";

it("Starts as an empty array", (notepad) => {
  expect(notepad.shortenedNotes().length).toEqual(0);
});

it("Adds a note to list", (notepad) => {
  notepad.addNote("first note");
  expect(notepad.shortenedNotes()[0]).toEqual("first note");
});

it("Abbreviates long notes to 20 chars", (notepad) => {
  notepad.addNote("This is a programme written by Beca, Charlie and Felix ");
  expect(notepad.shortenedNotes()[0]).toEqual("This is a programme ...");
});

it("Returns a complete note from id", (notepad) => {
  notepad.addNote("This is a programme written by Beca, Charlie and Felix ");
  notepad.addNote("Buy eggs");
  notepad.addNote("Buy milk");
  expect(notepad.findNote(1)).toEqual(
    "This is a programme written by Beca, Charlie and Felix "
  );
  expect(notepad.findNote(2)).toEqual("Buy eggs");
  expect(notepad.findNote(3)).toEqual("Buy milk");
});
