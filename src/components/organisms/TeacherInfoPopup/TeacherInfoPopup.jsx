import { Button, HStack, Text, View, VStack } from 'native-base';
import { ReactComponent as Close } from '../../../assets/close.svg';
import PropTypes from 'prop-types';
import { teachersInfo } from '../../../screens/mockTeachersInfo';

const TeacherInfoPopup = ({
  isVisible,
  onCloseModal,
  teacherInfo = teachersInfo[0],
}) => {
  return (
    <View
      zIndex={4}
      width="100%"
      height="100%"
      position="absolute"
      bg={'rgba(0,0,0,0.5)'}
      display={isVisible ? 'flex' : 'none'}
      alignItems="center"
      justifyContent="center"
    >
      {teacherInfo && (
        <View width="700px" bg="white">
          <HStack justifyContent="space-between" bg="gray.dark" p="4">
            <Text color="white" fontSize="h2" fontWeight="medium">
              Teacher Info
            </Text>
            <Button variant="ghost" onPress={onCloseModal}>
              <Close width="20" height="20" fill="white" />
            </Button>
          </HStack>
          <View bg="white">
            <HStack>
              <img
                width="300px"
                height="350px"
                src={teacherInfo.picture_large}
                alt={`${teacherInfo.fullName} photo`}
              />
              <VStack px="4" pt="4">
                <Text fontSize="h3" fontWeight="medium">
                  {teacherInfo.name} {teacherInfo.lastName}
                </Text>
                <Text>{teacherInfo.subject}</Text>
                <Text>{teacherInfo.city}</Text>
                <Text>{teacherInfo.country}</Text>
                <Text>{teacherInfo.age}</Text>
                <Text>{teacherInfo.gender}</Text>
                <Text>{teacherInfo.email}</Text>
                <Text>{teacherInfo.phone}</Text>
              </VStack>
            </HStack>
            <Text pt="5">{teacherInfo.notes}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

TeacherInfoPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  teacherInfo: PropTypes.object.isRequired,
};

export default TeacherInfoPopup;
