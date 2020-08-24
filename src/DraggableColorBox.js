import React from 'react';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import { SortableElement } from 'react-sortable-hoc';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: (props) =>
        chroma(props.color).luminance() >= 0.3 ? '#000' : '#fff',
      transform: 'scale(1.5)'
    }
  },

  boxContent: {
    position: 'absolute',
    padding: '10px',
    width: '100%',
    left: '0px',
    bottom: '0px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    color: (props) => (chroma(props.color).luminance() >= 0.3 ? '#222' : '#ccc')
  },
  delete: {
    transition: 'all 0.3s ease-in-out'
  }
};

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
