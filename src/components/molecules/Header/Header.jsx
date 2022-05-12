import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { Button, HStack, Input, useMediaQuery } from 'native-base';
import PropTypes from 'prop-types';

const Header = ({ onInputChange, searchHandler }) => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 760,
  });
  return (
    <header>
      {isSmallScreen && <Logo />}
      <HStack flexGrow={1} justifyContent="justify-between">
        {!isSmallScreen && <Logo />}
        <HStack flexGrow={1} justifyContent="flex-end">
          <Input
            borderColor="gray.primary"
            fontColor="gray.primary"
            placeholder="Name, note or age to search"
            width="200px"
            onChangeText={onInputChange}
          />
          <Button variant="withBorder" ml="3" onPress={searchHandler}>
            Search
          </Button>
        </HStack>
      </HStack>
    </header>
  );
};

Header.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default Header;
