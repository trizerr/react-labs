import { HStack, Select, Text } from 'native-base';
import PropTypes from 'prop-types';

const Dropdown = ({
  labelsAndValues,
  accessibilityLabel,
  placeholder,
  label,
  onValueChange,
  value,
}) => {
  return (
    <HStack alignItems="center">
      <Text pr="2" color="gray.primary">
        {label}
      </Text>
      <Select
        selectedValue={value}
        maxWidth="130px"
        accessibilityLabel={accessibilityLabel}
        placeholder={placeholder}
        mr="2"
        onValueChange={onValueChange}
      >
        {labelsAndValues.map((item) => (
          <Select.Item key={item.id} label={item.label} value={item.value} />
        ))}
      </Select>
    </HStack>
  );
};

Dropdown.propTypes = {
  labelsAndValues: PropTypes.array,
  accessibilityLabel: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
};

export default Dropdown;
