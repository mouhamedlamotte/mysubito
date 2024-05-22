import React, { useState } from 'react';
import { View, Text, FlatList, Modal } from 'react-native';
import {  ChevronDown } from 'lucide-react-native';
import CustomButton from './CustomButton';



const CustomSelectDropdown = ({ title, options, selectedOption, onSelect, icon }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSelect = (option) => {
    onSelect(option);
    toggleModal();
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <CustomButton
          title={selectedOption || title}
          containerStyles="bg-transparent border w-full border-slate-300 py-4 justify-start  items-center"
          icon={icon || <ChevronDown size={20} className="text-slate-900" />}
          textStyles={"text-slate-900 text-sm mx-2"}
          handlePress={toggleModal}
        />    

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}
        statusBarTranslucent
      >
        <View className="flex-1 justify-center items-center bg-black/30">
          <View className="bg-white p-3 rounded-lg border border-slate-300 w-[90%]">
            <Text className="pb-3 text-xl">{title}</Text>
            <FlatList
            className="max-h-[300px]"
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <CustomButton
                  title={item}
                  containerStyles="p-2 border-b border-gray-300 bg-transparent justify-start  items-center"
                  textStyles="text-slate-700 text-sm"
                  handlePress={() => handleSelect(item)}
                >
                </CustomButton>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomSelectDropdown;
