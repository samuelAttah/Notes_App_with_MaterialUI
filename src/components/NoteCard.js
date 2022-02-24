import React from "react";

const NoteCard = ({ note }) => {
  return <div key={note.id}> {note.title}</div>;
};

export default NoteCard;
