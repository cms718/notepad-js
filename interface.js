document.addEventListener("DOMContentLoaded", () => {
  const notepad = new Notepad();

  document.getElementById("add-note").addEventListener("click", () => {
    let noteInputValue = document.getElementById("note-input").value;
    notepad.addNote(noteInputValue);
    getNotes();
  });

  getNotes = () => {
    let notes = notepad.shortenedNotes();
    let ul = document.getElementById("list");
    ul.innerHTML = "";
    notes.forEach((note) => {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(note));
      ul.appendChild(li);
    });
  };
  getNotes();
});
