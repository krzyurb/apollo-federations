import noteResolver from "./noteResolver";
import notesListResolver from "./notesListResolver";
import userNotesListResolver from "./userNotesListResolver";

export default {
  Query: {
    notes: notesListResolver,
    note: noteResolver,
  },
  User: {
    notes: userNotesListResolver,
  },
};
