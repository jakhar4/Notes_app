import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton  aria-label="delete" size="large">
        <DeleteIcon onClick={handleClick}fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default Note;
