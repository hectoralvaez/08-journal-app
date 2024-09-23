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
        addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload;
        },
        setNotes: (state, action ) => {

        },
        setSavingNote: (state ) => {

        },
        updateNote: (state, action ) => {

        },
        deleteNoteById: (state, action ) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSavingNote, updateNote, deleteNoteById } = journalSlice.actions;