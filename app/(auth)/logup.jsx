import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Eye, EyeOff, Mail, Phone, User } from "lucide-react-native";
import CustomButton from "../../components/CustomButton";
import InpuField from "../../components/InpuField";
import { icons } from "../../constants";
import { router } from "expo-router";
import { Toggle } from "./login";
import AuthHead from "../../components/AuthHead";

const Logup = () => {
  const [logInMethod, setLogInMethod] = useState("email");
  const [user, setUser] = useState({
    email: "",
    phone: "",
    fullName: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log(user);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="h-full pb-4">
      <AuthHead subititle="Ici commence l'itineraire de vos reves" />
        <View className="mt-6 px-4 w-full">
          <Toggle logInMethod={logInMethod} setLogInMethod={setLogInMethod} />
          <View className="mt-6 flex flex-col">
            <InpuField
              title="Prenom et nom"
              placeholder="Entrez votre nom et prenom"
              icon={<User size={20} className="text-gray-600" />}
              containerClass="mt-3"
              value={user.fullName}
              handleTextChange={(e) =>
                setUser({ ...user, fullName: e.nativeEvent.text })
              }
            />
            {logInMethod === "email" ? (
              <InpuField
                title="Email"
                placeholder="Entrez votre email"
                icon={<Mail size={20} className="text-gray-600" />}
                containerClass="mt-3"
                value={user.email}
                handleTextChange={(e) =>
                  setUser({ ...user, email: e.nativeEvent.text })
                }
              />
            ) : (
              <InpuField
                title="Telephone"
                placeholder="Entrez votre numero"
                icon={<Phone size={20} className="text-gray-600" />}
                containerClass="mt-3"
                value={user.phone}
                handleTextChange={(e) =>
                  setUser({ ...user, phone: e.nativeEvent.text })
                }
              />
            )}
            <InpuField
              title="Mot de passe"
              placeholder="Entrez votre mot de passe"
              icon={
                showPassword ? (
                  <Eye size={20} className="text-gray-600" />
                ) : (
                  <EyeOff size={20} className="text-gray-600" />
                )
              }
              containerClass="mt-3"
              value={user.password}
              handleTextChange={(e) =>
                setUser({ ...user, password: e.nativeEvent.text })
              }
            />
          </View>
          <CustomButton
            title="S'inscrire"
            containerStyles="mt-10"
            isLoading={isSubmitting}
            handlePress={handleSubmit}
          />
          {/* <Text className="self-center mb-3 mt-3 font-psemibold text-lg text-gray-500">
          Ou se connecter avec
          </Text> */}
          {/* <View className="pb-4">
            <View
              className="flex flex-row justify-between items-center"
              style={{ gap: 10 }}
            >
              <CustomButton
                containerStyles="bg-transparent border border-gray-300 flex-1"
                title="Google"
                textStyles="text-black"
                icon={<Image source={icons.google} />}
              />
              <CustomButton
                containerStyles="bg-transparent border border-gray-300 flex-1"
                title="Facebook"
                textStyles="text-black"
                icon={<Image source={icons.facebook} />}
              />
            </View>
            <CustomButton
              containerStyles="bg-black mt-4"
              title="Github"
              icon={<Image source={icons.github} />}
            />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Logup;
