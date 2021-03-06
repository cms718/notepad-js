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
    notes.forEach((note, index) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = `#${index}`;
      a.addEventListener("click", () => {
        let completeNote = notepad.findNote(index);
        document.getElementById("full-note").innerText = completeNote;
      });
      li.appendChild(a).innerHTML = note;
      ul.appendChild(li);
    });
  };
});

/*

Create an anchor tag

create hyperlink
create event listener
call findnote with ID 
*/
