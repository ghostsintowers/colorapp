import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props; // no this because it is a functional companent, not a class component
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.hex}
    ></div>
  ));

  console.log(classes);
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteForeverSharpIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
