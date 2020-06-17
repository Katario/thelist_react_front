import React from 'react';
import './ToolBar.css';

let ToolBar = () => {
  return (
    <div className="ToolBar">
      <div id="toolbar">
        <button class="ql-bold">Bold</button>
        <button class="ql-italic">Italic</button>
      </div>
    </div>
  );
}

export default ToolBar;
