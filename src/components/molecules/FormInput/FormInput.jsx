import { Input, Select, Text, View } from 'native-base';
import PropTypes from 'prop-types';

const FormInput = ({
  onInputChange,
  value,
  label,
  placeholder,
  isDropdown,
  dropdownItems,
}) => {
  return (
    <View pb="4">
      <Text>{label}</Text>
      {!isDropdown ? (
        <Input
          onChangeText={onInputChange}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <Select onValueChange={onInputChange} selectedValue={value}>
          {dropdownItems.map((item) => (
            <Select.Item key={item.id} value={item.value} label={item.label}>
              {item}
            </Select.Item>
          ))}
        </Select>
      )}
    </View>
  );
};

FormInput.propTypes = {
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  dropdownItems: PropTypes.array,
  isDropdown: PropTypes.bool,
};

export default FormInput;
