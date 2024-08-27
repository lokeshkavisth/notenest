document.addEventListener("DOMContentLoaded", function () {
  const noteInput = document.getElementById("noteInput");
  const saveNoteButton = document.getElementById("saveNote");
  const exportButton = document.getElementById("exportNotes");
  const notesList = document.getElementById("notesList");

  // Load existing notes
  chrome.storage.sync.get(["notes"], function (result) {
    const notes = result.notes || [];
    renderNotes(notes);
  });

  // Save note
  saveNoteButton.addEventListener("click", function () {
    const noteText = noteInput.value.trim();
    if (noteText) {
      chrome.storage.sync.get(["notes"], function (result) {
        const notes = result.notes || [];
        notes.push({ id: Date.now(), text: noteText });
        chrome.storage.sync.set({ notes: notes }, function () {
          noteInput.value = "";
          renderNotes(notes);
        });
      });
    }
  });

  // Export notes
  exportButton.addEventListener("click", function () {
    chrome.storage.sync.get(["notes"], function (result) {
      const notes = result.notes || [];
      const blob = new Blob([JSON.stringify(notes, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      chrome.downloads.download({
        url: url,
        filename: "notes_export.json",
      });
    });
  });

  // Render notes
  function renderNotes(notes) {
    notesList.innerHTML = "";
    notes.forEach(function (note) {
      const noteElement = document.createElement("div");
      noteElement.className = "note";
      noteElement.innerHTML = `
        <p>${note.text}</p>
        <div class="btn_wrapper">        
        <button class="edit" data-id="${note.id}">Edit</button>
        <button class="delete" data-id="${note.id}">Delete</button>
        </div>
      `;
      notesList.appendChild(noteElement);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll(".edit").forEach((button) => {
      button.addEventListener("click", editNote);
    });
    document.querySelectorAll(".delete").forEach((button) => {
      button.addEventListener("click", deleteNote);
    });
  }

  // Edit note
  function editNote(e) {
    const noteId = parseInt(e.target.getAttribute("data-id"));
    chrome.storage.sync.get(["notes"], function (result) {
      const notes = result.notes || [];
      const note = notes.find((n) => n.id === noteId);
      if (note) {
        noteInput.value = note.text;
        deleteNote(e);
      }
    });
  }

  // Delete note
  function deleteNote(e) {
    const noteId = parseInt(e.target.getAttribute("data-id"));
    chrome.storage.sync.get(["notes"], function (result) {
      const notes = result.notes || [];
      const updatedNotes = notes.filter((n) => n.id !== noteId);
      chrome.storage.sync.set({ notes: updatedNotes }, function () {
        renderNotes(updatedNotes);
      });
    });
  }
});
