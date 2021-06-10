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
      let a = document.createElement("a")
      a.href = "http://www.google.com"
      li.appendChild(a).innerHTML = note;
      ul.appendChild(li);
    });
  };




  getNotes();
});

/*

Create an anchor tag

create hyperlink
create event listener
call findnote with ID 
*/
