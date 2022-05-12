import styled from 'styled-components';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { Pressable, Text } from 'native-base';

// eslint-disable-next-line react/prop-types
const Statistics = ({ users, onTitlePress }) => {
  return (
    <Table className="statistics">
      <SectionTitle title="Statistics" />
      <table>
        <thead>
          <tr>
            <th>
              <Pressable onPress={() => onTitlePress('full_name')}>
                <Text>Name</Text>
              </Pressable>
            </th>

            <th>
              <Pressable onPress={() => onTitlePress('course')}>
                <Text>Speciality</Text>
              </Pressable>
            </th>
            <th>
              <Pressable onPress={() => onTitlePress('age')}>
                <Text>Age</Text>
              </Pressable>
            </th>
            <th>
              <Pressable onPress={() => onTitlePress('gender')}>
                <Text>Gender</Text>
              </Pressable>
            </th>
            <th>
              <Pressable onPress={() => onTitlePress('country')}>
                <Text>Nationality</Text>
              </Pressable>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line react/prop-types */}
          {users.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.full_name}</td>
              <td>{teacher.course}</td>
              <td>{teacher.age}</td>
              <td>{teacher.gender}</td>
              <td>{teacher.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="statistics-nav">
        <span>1</span>
        <span>2</span>
        <span>...</span>
        <span>100</span>
      </div>
    </Table>
  );
};

const Table = styled.section`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    text-align: center;
    padding: 8px;
  }

  th {
    border-bottom: 1px solid black;
  }

  tr:nth-child(even) {
    background-color: #faf5fb;
  }

  &-nav {
    padding-top: 15px;
    flex-direction: row;
    color: blue;
    text-underline: blue;
  }
`;

export default Statistics;
