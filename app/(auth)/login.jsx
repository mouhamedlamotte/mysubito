import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Eye, EyeOff, Mail, Phone } from "lucide-react-native";
import CustomButton from "../../components/CustomButton";
import InpuField from "../../components/InpuField";
import { icons } from "../../constants";
import { router } from "expo-router";
import AuthHead from "../../components/AuthHead";

const Login = () => {
  const [logInMethod, setLogInMethod] = useState("email");
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false)


  const handleLogin = () => {
    setIsSubmitting(true);
    console.log(user);
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="h-full">
        <AuthHead subititle="Connectez vous pour continuer" />
        <View className="mt-6 px-4 w-full">
          <Toggle logInMethod={logInMethod} setLogInMethod={setLogInMethod} />
          <View className="mt-6 flex flex-col">
            {logInMethod === "email" ? (
              <InpuField
                title="Email"
                placeholder="Entrez votre email"
                icon={<Mail size={20} className="text-gray-600" />}
                containerClass=""
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
                containerClass=""
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
                showPassword ? 
                <Eye size={20} className="text-gray-600" />
                  : <EyeOff  size={20} className="text-gray-600" />
              }
              containerClass="mt-6"
              value={user.password}
              handleTextChange={(e) =>
                setUser({ ...user, password: e.nativeEvent.text }) 
              }
            />

            <Text className="mt-3 font-semibold text-lg text-primary self-end">
              Mot de passe oublie ?
            </Text>
          </View>
          <CustomButton
            title="Se connecter"
            containerStyles="mt-10 shadow-xl"
            isLoading={isSubmitting}
            handlePress={()=>router.push('/home')}
          />
          {/* <Text className="self-center mb-3 mt-3 font-psemibold text-lg text-gray-500">
            Ou se connecter avec
          </Text>
          <View className="mb-6">
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

export default Login;



export const Toggle = ({logInMethod, setLogInMethod}) => {
  return(
      <View className="w-full p-1 bg-primary/10 rounded-md flex flex-row  ">
      <CustomButton
        handlePress={() => setLogInMethod("email")}
        containerStyles={`flex-1 ${
          logInMethod === "email" ? "bg-primary" : "bg-transparent"
        }`}
        title="Email"
        textStyles={`${
          logInMethod === "email" ? "text-white" : "text-black"
        }`}
      />
      <CustomButton
        handlePress={() => setLogInMethod("phone")}
        containerStyles={`flex-1 ${
          logInMethod === "email" ? "bg-transparent" : "bg-primary"
        }`}
        title="Phone"
        textStyles={`${
          logInMethod === "email" ? "text-black" : "text-white"
        }`}
      />
    </View>
  )
}

