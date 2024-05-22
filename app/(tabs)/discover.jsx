import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomSelectDropdown from '../../components/CustomSelectDropdown'

const Discover = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <SafeAreaView>
      <View className="bg-primary w-full h-[150px]  rounded-b-xl py-2 px-2">
        
      </View>
      <View className="mt-10 bg-red-800 p-4">
      <CustomSelectDropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={(option) => setSelectedOption(option)}
        />
      </View>
    </SafeAreaView>
  )
}

export default Discover