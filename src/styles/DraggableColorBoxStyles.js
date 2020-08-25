import chroma from 'chroma-js';

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

export default styles;
