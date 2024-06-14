import { v4 as uuidv4 } from "uuid";

let _notes = [
  { id: "2", text: "CPSC 2650" },
  { id: "1", text: "An awesome web dev Note" },
];

// TODO: implement addNote and removeNote
// For fun: why do we export a function instead of notes directly?
const notes = () => _notes;

// Add a note
const addNote = (note) => {
    const newNote = {
        id: uuidv4(),
        text: note.text
    };
  _notes.push(newNote);
  console.log(_notes)
};

// Remove a note
const removeNote = (id) => {
    _notes = _notes.filter(note => note.id !== id);
    console.log(_notes);
};


export { notes, addNote, removeNote};
