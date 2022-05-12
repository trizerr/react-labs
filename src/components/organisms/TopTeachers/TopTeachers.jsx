import {
  Center,
  View,
  Text,
  HStack,
  Divider,
  Checkbox,
  Flex,
} from 'native-base';
import { Dropdown } from '../../molecules';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import TeacherCard from '../../molecules/TeacherCard/TeacherCard';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

const TopTeachers = ({
  ageDropdown,
  genderDropdown,
  regionDropdown,
  teachersInfo,
  onTeacherCardPress,
  dropdownValues,
  onAgeChange,
  onGenderChange,
  onRegionChange,
  setIsFavorite,
}) => {
  return (
    <View>
      <SectionTitle title="Top Teachers" />
      <HStack flexWrap="wrap">
        <BorderRightView>
          <Dropdown
            accessibilityLabel="age Dropdown"
            labelsAndValues={ageDropdown}
            label="Age"
            placeholder="Age"
            value={dropdownValues.age}
            onValueChange={onAgeChange}
          />
        </BorderRightView>
        <BorderRightView>
          <Dropdown
            accessibilityLabel="region Dropdown"
            labelsAndValues={regionDropdown}
            label="Region"
            placeholder="Region"
            value={dropdownValues.region}
            onValueChange={onRegionChange}
          />
        </BorderRightView>
        <BorderRightView>
          <Dropdown
            accessibilityLabel="Gender Dropdown"
            labelsAndValues={genderDropdown}
            label="Gender"
            placeholder="Gender"
            value={dropdownValues.gender}
            onValueChange={onGenderChange}
          />
        </BorderRightView>
        <BorderRightView>
          <Center pr="2">
            <Checkbox
              size="sm"
              accessibilityLabel="This is a dummy checkbox"
              value="test"
            >
              <Text color="gray.primary">Only with photo</Text>
            </Checkbox>
          </Center>
        </BorderRightView>
        <BorderRightView>
          <Center pr="2">
            <Checkbox
              size="sm"
              accessibilityLabel="This is a dummy checkbox"
              onChange={setIsFavorite}
              value={dropdownValues.isFavorite}
            >
              <Text color="gray.primary">Only favourites</Text>
            </Checkbox>
          </Center>
        </BorderRightView>
        <Divider orientation="vertical" />
      </HStack>

      <Flex flexWrap="wrap" flexDirection="row" pt="9">
        {teachersInfo.map((teacher) => (
          <Flex pr="8" key={teacher.id} pb="8">
            <TeacherCard
              teacher={teacher}
              onTeacherCardPress={onTeacherCardPress}
            />
          </Flex>
        ))}
      </Flex>
    </View>
  );
};

const BorderRightView = styled.div`
  display: flex;
  border-right-width: 1px;
  border-right-style: dotted;
  margin-right: 8px;
  border-right-color: ${theme.colors.gray.primary};
`;

TopTeachers.propTypes = {
  ageDropdown: PropTypes.array,
  genderDropdown: PropTypes.array,
  regionDropdown: PropTypes.array,
  teachersInfo: PropTypes.array,
  dropdownValues: PropTypes.array,
  onTeacherCardPress: PropTypes.func,
  onAgeChange: PropTypes.func,
  onGenderChange: PropTypes.func,
  onRegionChange: PropTypes.func,
  setIsFavorite: PropTypes.func,
};

export default TopTeachers;
