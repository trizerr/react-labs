import { Header } from '../components/molecules';
import { View } from 'native-base';
import Menu from '../components/molecules/Menu/Menu';
import TopTeachers from '../components/organisms/TopTeachers/TopTeachers';
import {
  ageDropdown,
  genderDropdown,
  regionDropdown,
} from './mockDropdownsData';
import Statistics from '../components/organisms/Statistics/Statistics';
import Footer from '../components/organisms/Footer/Footer';
import AddTeacherPopup from '../components/organisms/AddTeacherPopup/AddTeacherPopup';
import { useEffect, useMemo, useState } from 'react';
import TeacherInfoPopup from '../components/organisms/TeacherInfoPopup/TeacherInfoPopup';
import { transformUsers } from '../utils/transformUsers';
import { additionalUsers, randomUserMock } from '../utils/usersMock';
import { filterUsers, findUsers, sortUsers } from '../utils/filters';

export const users = transformUsers(randomUserMock, additionalUsers);

const MainPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [teachers, setTeachers] = useState(users);
  const [sortedTeachers, setSortedTeachers] = useState(users);
  const [sortedColumn, setSortedColumn] = useState({ name: '', order: true });
  const [isAddTeacherVisible, setIsAddTeacherVisible] = useState(false);
  const [isTeacherInfoPopupVisible, setIsTeacherInfoPopupVisible] =
    useState(false);
  const [selectedTeacherInfo, setSelectedTeacherInfo] = useState(null);

  const [regionDropdownValue, setRegionDropdownValue] = useState(null);
  const [ageDropdownValue, setAgeDropdownValue] = useState(null);
  const [genderDropdownValue, setGenderDropdownValue] = useState(null);
  const [isFavorite, setIsFavorite] = useState(null);
  const [searchString, setSearchString] = useState('');

  const addTeacherHandler = () => {
    setIsAddTeacherVisible(true);
  };

  const searchHandler = () => {
    updateTeachers();
  };

  const updateTeachers = () => {
    const filteredUsers = filterTeachers();
    const searchedUsers = searchTeachers(filteredUsers);
    setTeachers([...searchedUsers]);
  };

  useEffect(() => {
    console.log(isFavorite);
    updateTeachers();
  }, [regionDropdownValue, ageDropdownValue, genderDropdownValue, isFavorite]);

  useEffect(() => {
    sortTeachers();
  }, [sortedColumn]);

  const filterTeachers = () => {
    return filterUsers({
      users,
      gender: genderDropdownValue,
      age: ageDropdownValue,
      country: regionDropdownValue,
      favorite: isFavorite,
    });
  };

  const searchTeachers = (filteredTeachers) => {
    if (searchString) {
      return findUsers({ searchString, users: filteredTeachers });
    }
    return filteredTeachers;
  };

  const onTableTitlePress = (sortBy) => {
    setSortedColumn({
      name: sortBy,
      order: sortedColumn.name === sortBy ? !sortedColumn.order : true,
    });
  };

  const sortTeachers = () => {
    const sortedUsers = sortUsers({
      sortBy: sortedColumn.name,
      users,
      isAscending: sortedColumn.order,
    });
    console.log(sortedUsers);
    setSortedTeachers([...sortedUsers]);
  };

  useEffect(() => {
    // const users = transformUsers(randomUserMock, additionalUsers);
    // const filteredUsers = filterUsers({ users, gender: 'male', age: 55 });
    // console.log(filteredUsers);
    // const sortedUsers = sortUsers({ sortBy: 'full_name', users });
    // console.log(sortedUsers);
    // const foundUsers = findUsers({ searchString: 'jordan', users });
    // console.log(foundUsers);
    // validateUsers(users);
  }, []);

  const onTeacherCardPress = (teacherInfo) => {
    setSelectedTeacherInfo(teacherInfo);
    setIsTeacherInfoPopupVisible(true);
  };

  const TeachersComponent = useMemo(() => {
    return (
      <TopTeachers
        ageDropdown={ageDropdown}
        genderDropdown={genderDropdown}
        regionDropdown={regionDropdown}
        teachersInfo={teachers}
        onTeacherCardPress={onTeacherCardPress}
        dropdownValues={{
          region: regionDropdownValue,
          age: ageDropdownValue,
          gender: genderDropdownValue,
          isFavorite: isFavorite,
        }}
        onAgeChange={setAgeDropdownValue}
        onGenderChange={setGenderDropdownValue}
        onRegionChange={setRegionDropdownValue}
        setIsFavorite={setIsFavorite}
      />
    );
  }, [teachers]);

  return (
    <>
      <View alignItems="center">
        <View maxWidth={1200} width="100%" px="100px" shadow="1" py="7">
          <Header
            onInputChange={(value) => setSearchString(value)}
            searchHandler={searchHandler}
          />

          <View pt="9">
            <Menu addTeacherHandler={addTeacherHandler} />
          </View>
          {TeachersComponent}
          <Statistics users={sortedTeachers} onTitlePress={onTableTitlePress} />
          {/*<Favorites teachersInfo={teachersInfo} />*/}
          <Footer />
        </View>
        <AddTeacherPopup
          onCloseModal={() => setIsAddTeacherVisible(false)}
          isVisible={isAddTeacherVisible}
        />
      </View>
      <TeacherInfoPopup
        teacherInfo={selectedTeacherInfo}
        onCloseModal={() => setIsTeacherInfoPopupVisible(false)}
        isVisible={isTeacherInfoPopupVisible}
      />
    </>
  );
};

export default MainPage;
