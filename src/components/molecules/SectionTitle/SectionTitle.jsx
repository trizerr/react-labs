import { Center, Divider, Flex, Text } from 'native-base';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
  return (
    <>
      <Flex alignItems="center">
        <Divider maxWidth="600px" mt="7" />
      </Flex>
      <Center flexGrow={1} height="110px">
        <Text fontSize="h1" fontWeight="medium">
          {title}
        </Text>
      </Center>
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
