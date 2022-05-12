import { Center, Flex, Pressable, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import { theme } from '../../../styles';
import { useEffect, useState } from 'react';

const TeacherCard = ({ teacher, showSubject = true, onTeacherCardPress }) => {
  const [isFavorite, setIsFavorite] = useState(teacher.favorite);
  const onPress = () => {
    onTeacherCardPress(teacher);
  };

  const addTeacherToFavorite = () => {
    teacher.favorite = !teacher.favorite;
    setIsFavorite(teacher.favorite);
  };

  useEffect(() => {
    console.log(isFavorite);
  }, [isFavorite]);
  return (
    <View position="relative">
      <Pressable onPress={onPress}>
        <View maxWidth={150}>
          <Flex
            borderRadius="100px"
            overflow="hidden"
            borderColor={theme.colors.primary}
            width="150px"
            height="150px"
          >
            <img
              width="150px"
              height="150px"
              src={teacher.picture_large}
              alt={`${teacher.full_name} photo`}
            />
          </Flex>
          <Center>
            <Text fontSize="h2" textAlign="center">
              {teacher.full_name}
            </Text>
            {/*<Text fontSize="h2">{teacher.lastName}</Text>*/}
            {showSubject && (
              <Text fontSize="h4" color="gray.primary">
                {teacher.course}
              </Text>
            )}

            <Text fontSize="h4">{teacher.country}</Text>
          </Center>
        </View>
      </Pressable>
      <Pressable onPress={addTeacherToFavorite}>
        <View position="absolute" top={0} right={0} zIndex={5}>
          {isFavorite ? (
            <img
              width={50}
              height={50}
              alt={'star'}
              src={require('../../../assets/starFilled.png')}
            />
          ) : (
            <img
              width={50}
              height={50}
              alt={'star'}
              src={require('../../../assets/starUnFilled.png')}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

TeacherCard.propTypes = {
  teacher: PropTypes.any,
  showSubject: PropTypes.boolean,
  onTeacherCardPress: PropTypes.func,
};

export default TeacherCard;
