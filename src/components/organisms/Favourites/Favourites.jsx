import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import PropTypes from 'prop-types';
import { Center, Divider, Flex } from 'native-base';
import TeacherCard from '../../molecules/TeacherCard/TeacherCard';

const Favorites = ({ teachersInfo }) => {
  return (
    <>
      <SectionTitle title="Favourites" />
      <Flex flexDirection="row" overflow="hidden" pl="5">
        {teachersInfo.map((teacher) => (
          <Flex pr="8" key={teacher.id} pb="8">
            <TeacherCard teacher={teacher} showSubject={false} />
          </Flex>
        ))}
      </Flex>
      <Center>
        <Divider maxWidth="600px" />
      </Center>
    </>
  );
};

Favorites.propTypes = {
  teachersInfo: PropTypes.array,
};

export default Favorites;
