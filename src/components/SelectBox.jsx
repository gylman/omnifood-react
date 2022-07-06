import React from "react";

function SelectBox() {
  return (
    <div>
      <label htmlFor="select-where">Where did you hear from us?</label>
      <select id="select-where" name="select-where" required>
        <option value="">Please choose one option:</option>
        <option value="friends">Friends and family</option>
        <option value="youtube">YouTube video</option>
        <option value="podcast">Podcast</option>
        <option value="ad">Facebook ad</option>
        <option value="others">Others</option>
      </select>
    </div>
  );
}

export default SelectBox;
