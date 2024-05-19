import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowLeft } from "lucide-react-native";
import { router, usePathname } from "expo-router";

const AuthHead = ({ title , subititle, }) => {
    const pathname = usePathname()
  return (
    <>
      <View className="flex justify-end items bg-primary flex-row py-5 rounded-bl-[30px] px-4">
        {/* <TouchableOpacity
          className={`bg-transparent border border-white
    rounded-lg py-2 flex px-5 justify-center items-center`}
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <ArrowLeft size={20} className="text-white font-bold" />
        </TouchableOpacity> */}
        <CustomButton
          containerStyles="bg-transparent border border-white"
          title={pathname === "/login" ? "Inscription" : "Connexion"}
          textStyles="text-white"
          handlePress={() => router.push(pathname === "/login" ? "/logup" : "/login")}
        />
      </View>
      <View className="w-full bg-primary  self-end">
        <View className=" w-full bg-white p-3  rounded-tr-[30px]">
          <View className="mt-6 px-4">
            <Text className="font-bold text-3xl">
              Bienvenue a{" "}
              <Text className="text-primary font-bold">Mysubito</Text>
            </Text>
            <Text className="text-gray-800 mt-2 text-lg">
              {subititle}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default AuthHead;
