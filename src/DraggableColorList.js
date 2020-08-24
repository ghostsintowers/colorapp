import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{ height: '100%' }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          name={color.name}
          key={`${color.color}+${color.name}`}
          handleClick={() => deleteColor(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
// could also export as export default SortableContainer(DraggableColorList)
