import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = {
  picker: {
    width: '135% !important',
    marginTop: '2rem',
    marginLeft: '-2rem'
  },
  addColor: {
    width: '135%',
    padding: '1rem',
    fontSize: '2rem',
    marginTop: '1rem',
    marginLeft: '-2rem',
    height: '70px'
  },
  colorNameInput: {
    width: '135%',
    marginLeft: '-2rem'
  }
};

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'teal',
      newColorName: ''
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }

  render() {
    const { paletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm instantValidate={false} onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            placeholder='Color Name'
            className={classes.colorNameInput}
            variant='filled'
            margin='normal'
            name='newColorName'
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'this field is required',
              'color name is taken',
              'color already used'
            ]}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={classes.addColor}
            style={{
              backgroundColor: paletteFull ? 'grey' : this.state.currentColor
            }}
            disabled={paletteFull}
          >
            {paletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPicker);
