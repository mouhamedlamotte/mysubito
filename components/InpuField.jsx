import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const InpuField = ({
  title,
  name,
  placeholder,
  icon,
  containerClass,
  textClass,
  value,
  handleTextChange
}) => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={containerClass}>
      <Text className="text-lg font-semibold mb-2">{title}</Text>
      <View style={isFocused ? style.focusedStyle : null} className={`flex flex-row items-center   justify-between border border-gray-300 *:focus:border-primary rounded-md px-4 py-4`}>
      <TextInput
        className={`max-w-[90%] w-full ${textClass} bg-transparent placeholder:text-lg  caret-black`}
        placeholder={placeholder}
        value={value}
        keyboardType={name === "phone" ? "phone-pad" : "default"}
        testID="input"
        onChange={handleTextChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {icon}
      </View>
    </View>
  );
};


const style = StyleSheet.create({
    focusedStyle: {
        borderColor: "#EF497A",
    }
})

export default InpuField;
