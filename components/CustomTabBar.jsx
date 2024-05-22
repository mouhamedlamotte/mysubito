import { router, usePathname } from "expo-router";
import { Compass, HomeIcon, Ticket, User2 } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const CustomTabBar = () => {
  const [activeTab, setActiveTab] = useState("Accueil");
  const pathname = usePathname();
  const handlePress = (title) => {
    if (`/${title}` === pathname) return;
    setActiveTab(title);
    router.navigate(`/${title}`);
  };


  return (
    <View className="absolute flex justify-center items-center bottom-4 w-full ">
      <View className="bg-primary w-[90%] h-full rounded-3xl p-1 flex flex-row items-center justify-center shadow-2xl shadow-primary"
      style={{ shadowColor: "black" , shadowOpacity: 1, shadowRadius: 5}}  
      >
        <TabBarButton
          title="Accueil"
          icon={<HomeIcon size={28} className={pathname === "/home" ? "text-primary" : "text-white"} />}
          active={pathname === "/home"}
          handlePress={() => handlePress("home")}
        />
        <TabBarButton
          title="Discover"
          icon={<Compass size={28} className={pathname === "/discover" ? "text-primary" : "text-white"} />}
          active={pathname === "/discover"}
          handlePress={() => handlePress("discover")}
        />
        <TabBarButton
          title="Reservation"
          icon={<Ticket size={28} className={pathname === "/bookings" ? "text-primary" : "text-white"} />}
          active={pathname === "/bookings"}
          handlePress={() => handlePress("bookings")}
        />
        <TabBarButton
          title="Profile"
          icon={<User2 size={28} className={pathname === "/profile" ? "text-primary" : "text-white"} />}
          active={pathname === "/profile"}
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
      <Text>
      {icon}
      </Text>
      {active && (
        <Text className="text-primary font-semibold text-lg ">{title}</Text>
      )}
    </TouchableOpacity>
  );
};
