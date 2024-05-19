import { router } from "expo-router";
import { Compass, HomeIcon, Ticket, User2 } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const CustomTabBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handlePress = (title) => {
    if (title === activeTab) return;
    setActiveTab(title);
    router.replace(`/${title}`);
  };


  return (
    <View className="absolute flex justify-center items-center bottom-4 w-full ">
      <View className="bg-primary w-[90%] h-full rounded-3xl p-1 flex flex-row items-center justify-center">
        <TabBarButton
          title="Home"
          icon={<HomeIcon size={30} className={activeTab === "home" ? "text-primary" : "text-white"} />}
          active={activeTab === "home"}
          handlePress={() => handlePress("home")}
        />
        <TabBarButton
          title="Discover"
          icon={<Compass size={30} className={activeTab === "discover" ? "text-primary" : "text-white"} />}
          active={activeTab === "discover"}
          handlePress={() => handlePress("discover")}
        />
        <TabBarButton
          title="Reservation"
          icon={<Ticket size={30} className={activeTab === "bookings" ? "text-primary" : "text-white"} />}
          active={activeTab === "bookings"}
          handlePress={() => handlePress("bookings")}
        />
        <TabBarButton
          title="Profile"
          icon={<User2 size={30} className={activeTab === "profile" ? "text-primary" : "text-white"} />}
          active={activeTab === "profile"}
          handlePress={() => handlePress("profile")}
        />
      </View>
    </View>
  );
};

const TabBarButton = ({ title, icon, active, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`flex transition-all justify-center flex-row items-center px-4 py-2 rounded-3xl ${
        active ? "bg-white grow" : "flex-1"
      }`}
      style={{ gap: 8 }}
      activeOpacity={0.7}
    >
      {icon}
      {active && (
        <Text className="text-primary font-semibold ">{title}</Text>
      )}
    </TouchableOpacity>
  );
};
