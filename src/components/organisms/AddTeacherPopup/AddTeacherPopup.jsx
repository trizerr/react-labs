import { useState } from 'react';
import { HStack, Text, View, VStack, Radio, Button, Flex } from 'native-base';
import { ReactComponent as Close } from '../../../assets/close.svg';
import FormInput from '../../molecules/FormInput/FormInput';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { validate } from '../../../utils/validation';
import { users } from '../../../screens/MainPage';
import styled from 'styled-components';

const AddTeacherPopup = ({ isVisible, onCloseModal }) => {
  const [isTeacherValid, setIsTeacherValid] = useState(true);
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [gender, setGender] = useState('');

  const onColorChange = (event) => {
    setColor(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const validateTeacher = (teacher) => {
    return validate(teacher);
  };

  const yearsDiff = (date1, date2) => {
    console.log(date1, date2);
    return date1.getFullYear() - date2.getFullYear();
  };

  const createTeacher = () => {
    return {
      id: v4(),
      favorite: false,
      bg_color: color,
      gender,
      full_name: name,
      city,
      state: city,
      phone,
      email,
      age: yearsDiff(new Date(), new Date(date)),
      course: speciality,
      country,
    };
  };

  const addTeacherHandler = () => {
    const teacher = createTeacher();
    const isValid = validateTeacher(teacher);
    console.log(teacher);
    console.log(isValid);
    setIsTeacherValid(isValid);
    if (isValid) {
      users.push(teacher);
      onCloseModal();
    }
  };
  return (
    <View
      zIndex={4}
      width="100%"
      height="100%"
      position="absolute"
      bg={'rgba(0,0,0,0.5)'}
      display={isVisible ? 'flex' : 'none'}
      alignItems="center"
    >
      <View maxWidth="560px" width="100%" bg="white">
        <HStack justifyContent="space-between" bg="gray.dark" p="4">
          <Text color="white" fontSize="h2" fontWeight="medium">
            Add Teacher
          </Text>
          <Button variant="ghost" onPress={onCloseModal}>
            <Close width="20" height="20" fill="white" />
          </Button>
        </HStack>
        <VStack p="4">
          <FormInput
            label="Name"
            onInputChange={setName}
            value={name}
            placeholder="Enter name"
          />
          <FormInput
            label="Speciality"
            onInputChange={setSpeciality}
            value={speciality}
            isDropdown={true}
            dropdownItems={[
              { id: 1, label: 'Math', value: 'math' },
              { id: 2, label: 'Physics', value: 'physics' },
            ]}
          />
          <GridExample>
            <View mr="2">
              <FormInput
                label="Country"
                onInputChange={setCountry}
                value={country}
                isDropdown={true}
                dropdownItems={[
                  { id: 1, label: 'Ukraine', value: 'Ukraine' },
                  { id: 2, label: 'Poland', value: 'Poland' },
                ]}
              />
            </View>
            <View ml="2">
              <FormInput
                label="City"
                onInputChange={setCity}
                value={city}
                placeholder={'Enter city'}
              />
            </View>
          </GridExample>
          <HStack justifyContent="space-between">
            <Flex flexGrow={1} pr="2">
              <FormInput
                label="Email"
                onInputChange={setEmail}
                value={email}
                placeholder={'Enter email'}
              />
            </Flex>
            <Flex flexGrow={1} pl="2">
              <FormInput
                label="Phone"
                onInputChange={setPhone}
                value={phone}
                placeholder={'Enter phone'}
              />
            </Flex>
          </HStack>
          <VStack width="48.5%">
            <Text>Date of birth</Text>
            <input type="date" value={date} onChange={onDateChange} />
          </VStack>

          <HStack pt="4">
            <Text pr="3">Sex</Text>
            <Radio.Group
              name="Sex"
              accessibilityLabel="your gender"
              direction="row"
              value={gender}
              onChange={setGender}
            >
              <Radio value="Male" my={1} size="sm">
                male
              </Radio>
              <Radio value="Female" my={1}>
                female
              </Radio>
            </Radio.Group>
          </HStack>

          <HStack pt="4">
            <Text pr="3">Background Color</Text>
            <input type="color" value={color} onChange={onColorChange} />
          </HStack>

          <VStack pt="4">
            <Text pr="3">Notes (optional)</Text>
            <input height="100px" type="textarea" />
          </VStack>
          <FloatExample>
            <Button
              variant="withBorder"
              width="100%"
              onPress={addTeacherHandler}
            >
              Add
            </Button>
          </FloatExample>

          {!isTeacherValid && (
            <Text color="red.600" fontSize="sm">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Validation hasn't passed! Good luck figuring out what's wrong!
            </Text>
          )}
        </VStack>
      </View>
    </View>
  );
};

const GridExample = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const FloatExample = styled.div`
  float: none;
`;

AddTeacherPopup.propTypes = {
  isVisible: PropTypes.bool,
  onCloseModal: PropTypes.bool,
};

export default AddTeacherPopup;
