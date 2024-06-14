import express from 'express';
import { addNote } from '../persistence.js';

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const { noteText } = req.body; 
    if (!noteText) {
        res.status(400).send({ error: 'Note text is required' });
        return;
    }
    const note = { text: noteText };
    addNote(note);
    res.status(201).send(note);
});

export default router;