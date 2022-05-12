import { Button, HStack, View } from 'native-base';
import PropTypes from 'prop-types';

const Menu = ({
  teachersHandler,
  statisticsHandler,
  favoritesHandler,
  aboutHandler,
  addTeacherHandler,
}) => {
  return (
    <View>
      <HStack flexGrow={1} justifyContent="space-between" flexWrap="wrap">
        <HStack
          maxWidth="460px"
          flexGrow={1}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Button onPress={teachersHandler}>Teachers</Button>
          <Button onPress={statisticsHandler}>Statistics</Button>
          <Button onPress={favoritesHandler}>Favorites</Button>
          <Button onPress={aboutHandler}>About</Button>
        </HStack>
        <Button variant="withBorder" onPress={addTeacherHandler}>
          Add Teacher
        </Button>
      </HStack>
    </View>
  );
};

Menu.propTypes = {
  teachersHandler: PropTypes.func,
  statisticsHandler: PropTypes.func,
  favoritesHandler: PropTypes.func,
  aboutHandler: PropTypes.func,
  addTeacherHandler: PropTypes.func,
};

export default Menu;
