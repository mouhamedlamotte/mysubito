import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomSelectDropdown from '../../components/CustomSelectDropdown';

const Test = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['Option 1', 'Option 2', 'Option 3'];
  
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <CustomSelectDropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={(option) => setSelectedOption(option)}
        />
      </SafeAreaView>
    )
}

export default Test