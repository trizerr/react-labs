const Button = {
  defaultProps: {
    variant: 'primary',
    fontSize: 'md',
  },
  sizes: {
    md: {
      _text: {
        fontSize: 'h2',
        fontWeight: 'medium',
      },
    },
  },
  variants: {
    withBorder: {
      borderWidth: '1px',
      _light: {
        borderColor: 'primary.normal',
        px: '3',
        py: '2',
        bg: 'white',
        _text: {
          fontSize: 'h2',
          color: 'primary.normal',
        },
        _hover: {
          bg: 'primary.normal',
          borderColor: 'primary.normal',
          _text: {
            color: 'white',
          },
        },
        _pressed: {
          bg: 'primary.dark',
          borderColor: 'primary.dark',
          _text: {
            color: 'white',
          },
        },
      },
    },
    primary: {
      _light: {
        fontSize: 'h2',
        bg: 'white',
        _text: {
          fontSize: 'h2',
          color: 'primary.normal',
        },
        _hover: {
          _text: {
            fontSize: 'xl',
            color: 'primary.normal',
          },
          color: 'white',
        },
      },
    },
  },
};

export default Button;
