document.addEventListener("DOMContentLoaded", () => {
  const notepad = new Notepad();

  document.getElementById("add-note").addEventListener("click", () => {
    let noteInputValue = document.getElementById("note-input").value;
    notepad.addNote(noteInputValue);
  });
});
