import React, { useState } from "react";

function SelectBox({ children }) {
  const [channel, setChannel] = useState("");
  return (
    <div>
      <label htmlFor="select-where">Where did you hear from us?</label>
      <select
        id="select-where"
        name="select-where"
        required
        value={channel}
        onChange={function(e) {
          setChannel(e.target.value);
        }}
      >
        {children}
      </select>
    </div>
  );
}

export default SelectBox;
