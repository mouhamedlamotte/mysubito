import { Redirect, router, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../context/authContext";
import { icons, Loader } from "lucide-react-native";

export default function App() {

  const {authState, loading}  = useAuth()

  if (loading) return <Loading />;

  if (!loading && authState?.authenticated) return <Redirect href="/home" />

  

  return (
    <>
      <StatusBar style="light" />
    <SafeAreaView
     className="h-full bg-white">
      <View className="flex items-center justify-center mt-24">
        <Image
          source={images.taxiUlistration}
          resizeMode="contain"
          className="h-[200px] w-[220px]"
        />
      </View>
      <View className="w-full flex items-end h-full mt-20">
        <View className=" right-0 h-[100px] w-[100px] bg-primary">
          <View className="h-full w-full bg-white p-3  rounded-br-full">
            <View className="h-[60px] w-[60px] bg-white border border-primary rounded-full flex justify-center items-center">
              <View className="h-[29px] w-[29px] bg-primary rounded-full"></View>
            </View>
          </View>
        </View>
        <View className="w-full grow flex items-center   p-4 rounded-tl-[80px] bg-primary ">
          <Text className="text-3xl mt-4 font-bold text-white">
            Bienvenue a MySubito
          </Text>
          <Text className="text-center text-white mt-6 font-regular text-xl">
            Explorer un monde de possibiltes en mouvement
          </Text>
          <CustomButton
            title="Commencer"
            containerStyles="bg-white mt-10 w-full"
            textStyles="font-psemibold text-primary"
            handlePress={() => router.push("/login")}
          />
        </View>
      </View>
    </SafeAreaView>
      <StatusBar style="light" backgroundColor="#EF497A" />
    </>
  );
}

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Loader size={40} color="#EF497A" />
    </View>
  );
}