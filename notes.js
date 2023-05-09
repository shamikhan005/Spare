const noteForm = document.querySelector('#noteForm');
const noteInput = document.querySelector('#noteInput');
const noteList = document.querySelector('#noteList');


noteForm.addEventListener('submit', addNote);


function addNote(event) {
    event.preventDefault(); 

    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('note-container');

        const noteTextElement = document.createElement('span');
        noteTextElement.classList.add('note-text');
        noteTextElement.textContent = noteText;

        const timestampElement = document.createElement('span');
        timestampElement.classList.add('timestamp');
        timestampElement.textContent = getCurrentTimestamp();

        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fas', 'fa-trash', 'delete');
        deleteBtn.addEventListener('click', deleteNote);

        listItem.appendChild(noteTextElement);
        listItem.appendChild(timestampElement);
        listItem.appendChild(deleteBtn);

        noteList.appendChild(listItem);
        noteInput.value = '';
    }
}



function deleteNote() {
    const listItem = this.closest('li');
    noteList.removeChild(listItem);
}


function getCurrentTimestamp() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}
