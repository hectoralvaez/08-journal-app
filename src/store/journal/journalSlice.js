import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        savedMessage: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'acb123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageURLS: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg...
        // }

    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload;
            state.savedMessage = '';
        },
        setNotes: (state, action ) => {
            state.notes = action.payload;
        },
        setSavingNote: (state ) => {
            state.isSaving = true;
            state.savedMessage = '';
        },
        updateNote: (state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload;
                }

                return note;
            });
            state.savedMessage = `${ action.payload.title }, actualizada correctamente`;
        },
        deleteNoteById: (state, action ) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSavingNote, updateNote, deleteNoteById, savingNewNote } = journalSlice.actions;