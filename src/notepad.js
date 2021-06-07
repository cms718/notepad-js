class Notepad {
  constructor() {
    this.notes = [];
  }
  list() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }
}
