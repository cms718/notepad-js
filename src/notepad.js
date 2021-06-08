class Notepad {
  constructor() {
    this.notes = [];
  }
  shortenedNotes() {
    return this.notes.map((note) => {
      if (note.length > 20) return `${note.slice(0, 20)}...`;
      return note;
    });
  }

  addNote(note) {
    this.notes.push(note);
  }

  findNote(id) {
    return this.notes[id - 1]
  }
}
