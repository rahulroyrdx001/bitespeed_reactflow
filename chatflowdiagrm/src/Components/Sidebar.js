import React from 'react';
import './index.css';
import { BiMessageRoundedDetail } from "react-icons/bi";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className='myaside'>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
      <BiMessageRoundedDetail className='msglogo' />
      Message
      </div>
      
      {/* <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div> */}
    </aside>
  );
};


