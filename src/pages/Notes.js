import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => {
        alert("Your Notes did not load properly" + err);
      });
  }, []);

  return (
    <Container>
      {/* <Grid container spacing={4}>
        <Grid item xs={6} md={3}>
          <Paper>Sam</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper>Sam</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper>Sam</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper>Sam</Paper>
        </Grid>
      </Grid> */}
      <Grid container spacing={4}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={6} md={3} lg={3}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
      {/* {console.log(notes)}
      <Grid container spacing={2}>
        {Object.values(notes).map((note) => (
          <Grid item xs={12} md={6} lg={3} key={note.id}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}

        {Object.entries(notes).map(([k, v]) => (
          <Grid key={k} item xs={12} md={6} lg={3}>
            <NoteCard note={v} />
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
}
