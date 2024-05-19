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
          <View>
            <CircleCheckBig size={60} className="text-green-400" />
            <Text className="text-lg text-green-400  font-semibold text-center">Success</Text>
          </View>
        );
      case "error":
        return (
          <View>
            <ShieldX size={60} className="text-red-400" />
            <Text className="text-lg text-red-400  font-semibold text-center">Error</Text>
          </View>
        );
      case "warning":
        return (
          <View>
            <ShieldAlert size={60} className="text-yellow-400" />
            <Text className="text-lg text-yellow-400  font-semibold text-center">Warning</Text>
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
      animationType="slide"
    >
      <View className="h-full w-full flex items-center justify-center bg-slate-800/30">
        <View className="bg-white w-[90%] p-4 rounded-lg flex flex-col items-center">
          {renderText()}
          <Text className="text-sm font-semibold text-center">{message}</Text>
          <CustomButton
            handlePress={onClose}
            title="OK"
            containerStyles="mt-6 w-full"
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
