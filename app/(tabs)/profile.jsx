import { View, Text, ScrollView, Image, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import {
  Camera,
  ChevronRight,
  CreditCard,
  Edit,
  LogOut,
  Moon,
  Settings,
} from "lucide-react-native";
import ToggleSwitch from "toggle-switch-react-native";

import * as ImagePicker from "expo-image-picker"; 

const Profile = () => {
  const [toggle, setToggle] = useState(false);
  const [file, setFile] = useState(null); 
  const [error, setError] = useState(null); 

  const pickImage = async () => { 
    const { status } = await ImagePicker. 
        requestMediaLibraryPermissionsAsync(); 

    if (status !== "granted") { 
        Alert.alert( 
            "Permission Denied", 
            `Sorry, we need camera roll permission to upload images.` ,
        ); 
    } else { 
        const result = await ImagePicker.launchImageLibraryAsync(); 
        if (!result.canceled) { 
            setFile(result.assets[0].uri); 
            setError(null); 
        } 
    } 
}; 

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="h-full bg-primary flex flex-col">
        <View className="bg-primary w-full p-4 flex flex-row items-start justify-between">
          <Settings className="text-white" size={30} />
          <LogOut className="text-white" size={30} />
        </View>
        <View className=" bg-white grow mt-10 min-h-[88vh] relative rounded-t-3xl">
          <View className="h-[100px] w-full  absolute -top-[50px] flex items-center justify-center">
            <View
              className=" bg-white border-4 shadow-xl border-white rounded-full w-[100px] h-full relative"
              style={{
                shadowOpacity: 1,
                shadowRadius: 10,
                shadowColor: "#000",
              }}
            >
              <Image

                source={file ? { uri: file } : images.defaultAvatar}
                className="w-full h-full rounded-full"
                resizeMode="cover"
              />
              <TouchableOpacity
              onPress={pickImage}
              className=" absolute bottom-0 -right-2 p-1 rounded-full z-20 bg-primary flex justify-center items-center border border-secondary"
              activeOpacity={0.7}
              >
                <Camera className="text-white" size={20}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className=" mt-16 w-full flex justify-center items-center px-3">
            <Text className="text-3xl font-psemibold text-center">
              Mouhamed Baba Lamotte
            </Text>
            <Text className="text-lg">Compte personnel</Text>
          </View>
          <View className="mt-10 px-5 flex flex-col" style={{ gap: 20 }}>
            <View
              className="flex flex-row justify-between items-center"
              style={{ gap: 5 }}
            >
              <Text className="text-sm font-pregular">Telephone</Text>
              <Text className="text-sm font-pmedium">+221 77 093 42 13</Text>
            </View>
            <View
              className="flex flex-row justify-between items-center"
              style={{ gap: 5 }}
            >
              <Text className="text-sm font-pregular">Email</Text>
              <Text className="text-sm font-pmedium">
                lamottelymouhamed@gmail.com
              </Text>
            </View>
            <View
              className="flex flex-row justify-between items-center"
              style={{ gap: 5 }}
            >
              <Text className="text-sm font-pregular">Address</Text>
              <Text className="text-sm font-pmedium">Dakar, Mariste</Text>
            </View>
          </View>
          <View className="mt-5 h-0.5 w-full bg-gray-300"></View>
          <View className="flex flex-col divide-y divide-gray-300 px-4 ">
            <View className="flex items-center justify-between flex-row py-4">
              <View className="flex items-center flex-row" style={{ gap: 10 }}>
                <Moon className="text-slate-900" size={25} />
                <Text className="text-xl font-pregular">Mode sombre</Text>
              </View>
              <ToggleSwitch
                isOn={toggle}
                onColor="#EF497A"
                offColor="gray"
                size="small"
                onToggle={() => setToggle(!toggle)}
              />
            </View>
            <View className="flex items-center justify-between flex-row py-4">
              <View className="flex items-center flex-row" style={{ gap: 10 }}>
                <CreditCard className="text-slate-900" size={25} />
                <Text className="text-xl font-pregular">Subito Pay</Text>
              </View>
              <ChevronRight size={25} className="text-slate-900" />
            </View>
            <View className="flex items-center justify-between flex-row py-4">
              <View className="flex items-center flex-row" style={{ gap: 10 }}>
                <Edit className="text-slate-900" size={25} />
                <Text className="text-xl font-pregular">Editer mon profil</Text>
              </View>
              <ChevronRight size={25} className="text-slate-900" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
