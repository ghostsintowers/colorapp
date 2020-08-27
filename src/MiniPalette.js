import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }

  deletePalette(evt) {
    evt.stopPropagation();
    this.props.handleDelete(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props; // no this because it is a functional companent, not a class component (no longer the case)
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));

    return (
      <div className={classes.root} onClick={handleClick}>
        <div className={classes.delete}>
          <DeleteForeverSharpIcon
            className={classes.deleteIcon}
            onClick={this.deletePalette}
          />
        </div>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
