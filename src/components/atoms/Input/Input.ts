const Input = {
  baseStyle: {
    borderWidth: '1px',
    py: '13px',
    px: '12px',
    _light: {
      fontSize: 'body',
      placeholderTextColor: 'gray.40',
      bg: 'blue.10',
      borderColor: 'blue.10',
      _hover: {
        borderColor: 'blue.10',
      },
      _focus: {
        bg: 'white',
        borderColor: 'gray.20',
        _hover: {
          borderColor: 'gray.20',
        },
        _stack: {
          style: {
            outlineWidth: '0px',
          },
        },
      },
      _invalid: {
        bg: 'red.10',
        borderColor: 'red.10',
        _hover: {
          borderColor: 'red.10',
        },
        _stack: {
          style: {
            outlineWidth: '0px',
          },
        },
      },
      _disabled: {
        opacity: '100',
        bg: 'gray.10',
        borderColor: 'gray.10',
        placeholderTextColor: 'gray.30',
        _hover: {
          borderColor: 'gray.10',
        },
      },
    },
  },
  defaultProps: {
    sizes: 'primary',
  },
  sizes: {
    primary: {
      rounded: '8 px',
    },
  },
};

export default Input;
