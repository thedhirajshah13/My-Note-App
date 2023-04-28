import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import PushPinIcon from '@mui/icons-material/PushPin';
import AttachFileIcon from '@mui/icons-material/AttachFile';
function Note(props) {
    return <>
        <div className="note">

            <h4>{props.note}</h4>
            
            <p>{props.content}</p>
            <DeleteIcon className="deletebtn" onClick={(() => {
                props.handeldelete(props.id)
            })} />

        </div>
    </>



}
export default Note;