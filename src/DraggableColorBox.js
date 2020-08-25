import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
  const { classes, handleClick, name, color } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteForeverSharpIcon
          className={classes.delete}
          onClick={handleClick}
        />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
