import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import NoteCard from '../NoteCard/noteCard.js';
const Notes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8090/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, []);
    const handleDelete = async (id) => {
        await fetch(`http://localhost:8090/notes/${id}`, {
            method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes); 
    }
    return (
        <Container>
            {/* <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>3</Paper>
                </Grid>
                <Grid item xs={12 } sm={6} md={3}>
                    <Paper>4</Paper>
                </Grid>
            </Grid> */}
            <Grid container spacing={2}>

                {
                    notes.map((item) => (
                        <Grid item key={item.id} lg={4} md={6} xs={12}>
                            <NoteCard note={item} handleDelete={handleDelete}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
export default Notes;
