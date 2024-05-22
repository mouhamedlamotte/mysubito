import {
  View,
  Text,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Eye, EyeOff, Mail, Phone, User } from "lucide-react-native";
import CustomButton from "../../components/CustomButton";
import InpuField from "../../components/InpuField";
import { router } from "expo-router";
import AuthHead from "../../components/AuthHead";
import { useAuth } from "../../context/authContext";
import { useModal } from "../../provider/ModalProvider";

const Login = () => {
  const { showModal } = useModal()

  const { onLogin } = useAuth()

  const [logInMethod, setLogInMethod] = useState("username");
  const [user, setUser] = useState({
    username: "",
    // phone: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false)


  const handleLogin = async () => {
    if (logInMethod === "username") {
      if (!user.username || !user.password) {
        showModal("warning", "Veuillez renseigner tous les champs")
        return;
      }
    } else if (logInMethod === "phone") {
      if (!user.phone || !user.password) {
        showModal("warning", "Veuillez renseigner tous les champs")
        return;
      }
    }
    try {
      setIsSubmitting(true);
      const result = await onLogin(user.username, user.password);
      console.log(result);
      if (!result.error) {
        setIsSubmitting(false);
        router.navigate("/home");
      }else{
        showModal("warning", result.message)
        setIsSubmitting(false);
      }
      
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="h-full">
        <AuthHead subititle="Connectez vous pour continuer" />
        <View className="mt-6 px-4 w-full">
          <Toggle logInMethod={logInMethod} setLogInMethod={setLogInMethod} />
          <View className="mt-6 flex flex-col">
            {logInMethod === "username" ? (
              <InpuField
                title="username"
                placeholder="Entrez votre username"
                icon={<User size={20} className="text-gray-600" />}
                containerClass=""
                value={user.username}
                handleTextChange={(e) =>
                  setUser({ ...user, username: e.nativeEvent.text })
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
            handlePress={handleLogin}
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
        handlePress={() => setLogInMethod("username")}
        containerStyles={`flex-1 ${
          logInMethod === "username" ? "bg-primary" : "bg-transparent"
        }`}
        title="username"
        textStyles={`${
          logInMethod === "username" ? "text-white" : "text-black"
        }`}
      />
      <CustomButton
        handlePress={() => setLogInMethod("phone")}
        containerStyles={`flex-1 ${
          logInMethod === "username" ? "bg-transparent" : "bg-primary"
        }`}
        title="Phone"
        textStyles={`${
          logInMethod === "username" ? "text-black" : "text-white"
        }`}
      />
    </View>
  )
}

