import {  Text, TouchableOpacity } from "react-native";
import React from "react";
import { Loader } from "lucide-react-native";

const CustomButton = ({ title, containerStyles, textStyles, handlePress, isLoading, icon, elevation }) => {
  return (
    <TouchableOpacity style={{ gap: 5 , elevation: elevation, shadowColor: "black", shadowOpacity: 0.2}} className={`bg-primary
    rounded-md py-2 flex flex-row px-4 justify-center items-center ${containerStyles} ${
      isLoading ? "opacity-80" : ""
    }
    `}
    onPress={handlePress}
    activeOpacity={0.9}
    >
    {icon}
    <Text className={`text-white font-psemibold text-lg   ${textStyles}`}>
      {
        isLoading ? <Loader className="text-white animate-spin transition-all " size={20} /> : title
      }

    </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
