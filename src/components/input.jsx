import React, { useState } from "react";
import AddOutlineIcon from '@mui/icons-material/AddCircleOutline';


function Input(props) {
  const [input, setinput] = useState(false);

  function isexpanded() {
    setinput(true);
  }
  return (
    <>
      <div className="input">
        <div className="input-area">
          {input ?
            <input
              onChange={props.handelinput}
              name="title"
              type="text"
              placeholder="Title"
              value={props.Value.title}
            /> :
            null}
          <textarea
            onClick={isexpanded}
            rows={input ? 5 : 1}
            onChange={props.handelinput}
            name="content"
            type="text"
            placeholder=" Note...."
            value={props.Value.content}
          />
          {input ? <button className="buttonadd" onClick={props.handelbutton}><AddOutlineIcon /></button> : null}
        </div>
      </div>
    </>
  );
}
export default Input;
