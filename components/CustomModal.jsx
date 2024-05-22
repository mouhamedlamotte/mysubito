import { View, Text, Modal, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import images from "../constants/images";
import { CircleCheckBig, ShieldAlert, ShieldX } from "lucide-react-native";

const CustomModal = ({ visible, onClose, type, message }) => {
  const renderText = () => {
    switch (type) {
      case "success":
        return (
          <View className="flex items-center">
            <CircleCheckBig size={60} className="text-green-400" />
            <Text className="text-lg text-green-400  font-semibold text-center">Félicitation</Text>
          </View>
        );
      case "error":
        return (
          <View className="flex items-center">
            <ShieldX size={60} className="text-red-400" />
            <Text className="text-lg text-red-400  font-semibold text-center">Une erreur est survenue</Text>
          </View>
        );
      case "warning":
        return (
          <View className="flex items-center">
            <ShieldAlert size={60} className="text-orange-400" />
            <Text className="text-lg text-orange-400  font-semibold text-center">Attention</Text>
          </View>
        );
      case "info":
      default:
        return "Info";
    }
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
      statusBarTranslucent
    >
      <View className="h-full w-full flex items-center justify-center bg-slate-800/30">
        <View className="bg-white w-[90%] p-4 rounded-lg flex flex-col items-center">
          {renderText()}
          <Text className="text-lg font-semibold text-center mt-3">{message}</Text>
          <CustomButton
            handlePress={onClose}
            title="OK"
            containerStyles="mt-6"
            textStyles=" font-semibold text-lg"
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
