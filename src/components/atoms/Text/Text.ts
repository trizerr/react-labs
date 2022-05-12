const Text = {
  baseStyle: {
    letterSpacing: '0.3px',
  },
  variants: {
    title: {
      _light: {
        color: 'black',
        fontSize: 'body',
        fontWeight: 'medium',
        lineHeight: '22px',
      },
    },
    subtitle: {
      _light: {
        color: 'gray.40',
        fontSize: 'h5',
        fontWeight: 'regular',
        lineHeight: '20px',
      },
    },
    regular: {
      _light: {
        color: 'black',
        fontSize: 'body',
        fontWeight: 'regular',
        lineHeight: '22px',
      },
    },
    caption: {
      _light: {
        color: 'gray.40',
        fontSize: 'caption',
        fontWeight: 'regular',
        lineHeight: '16px',
      },
    },
    error: {
      _light: {
        color: 'red.50',
        fontSize: 'caption',
        fontWeight: 'regular',
        lineHeight: '16px',
      },
    },
  },
};

export default Text;
