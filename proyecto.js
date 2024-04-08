const notes = [
    {body: "Nota 1"},
    {body: "Nota 2"},
    {body: "Nota 3"},
    {body: "Nota 4"},
];

function deleteNote(note) {
const indexNote =  notes.indexOf(note);
if (indexNote > -1) {
    notes.splice(indexNote, 1); 
}
renderNotes();
}

renderNotes();

function buildNote(note) {
    const div = document.createElement("div");
    div.className = "note";

    const p = document.createElement("p");
    p.textContent = note.body;

const button = document.createElement("button");
button.textContent = "Borrar";
button.addEventListener("click",()=> deleteNote(note));

div.append(p, button);

return div;
}

function renderNotes() {
    const notesContainer = document.querySelector(".notes-container");
    notesContainer.innerHTML = "";

    notes.forEach((note) => {
        const noteE1 = buildNote(note);
        notesContainer.append(noteE1);
    });
}

function createNote(body) {
    notes.push({ body });
}

function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const body = form.elements.note.value;
    createNote(body);
    renderNotes();
    form.reset();
}

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

renderNotes();