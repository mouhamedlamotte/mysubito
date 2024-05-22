import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AlignLeft,
  ArrowDownUp,
  Bell,
  Calendar,
  ChevronsRight,
  Hash,
  MapPinned,
  Plane,
  Plus,
  Settings2,
} from "lucide-react-native";
import CustomButton from "../../components/CustomButton";
import images from "../../constants/images";
import {  router } from "expo-router";
import CarCard from "../../components/CarCard";
import CityCard from "../../components/CityCard";
import ServiceCard from "../../components/ServiceCard";
import TransferAeroportTab from "../../components/TransferAeroportTab";

const Home = () => {
  const services = [
    {
      id: 2,
      name: "Location de Vehicles",
      src: images.rent,
      color: "primary",
    },
    {
      id: 3,
      name: "Billet d'avion",
      src: images.flyBooking,
    },
    {
      id: 4,
      name: "VTC Inter-ville",
      src: images.vtc1,
      color: "primary",
    },
    {
      id: 1,
      name: "Circuit Touristique",
      src: images.tourist,
      color: "primary",
    },
  ];

  const [refreshing, setRefreshing] = useState(false);


  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView className="h-full w-full bg-slate-100/5 relative">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full"
        refreshControl={
          <RefreshControl
            progressBackgroundColor="white"
            colors={["#EF497A"]}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      >
        <View className="w-full bg-primary h-[220px]  rounded-b-xl py-2 px-2">
          <View className="flex flex-row justify-between items-center">
            <TouchableOpacity
              className="bg-slate-100 flex p-1 shadow-sm  justify-center items-center rounded-full"
              style={{ shadowOpacity: 0.5, shadowColor: "black" }}
            >
              <AlignLeft size={30} className="text-primary" />
            </TouchableOpacity>
            <Text className="text-white font-bold text-2xl">Mysubito</Text>
            <TouchableOpacity className="flex justify-start items-center">
              <Bell size={30} className="text-white" />
            </TouchableOpacity>
          </View>
        </View>
        <View className=" -mt-36">
          <Text className="text-xl font-psemibold pl-2 text-white">
            Services
          </Text>
          <FlatList
            className="py-4 px-2  shadow-lg"
            data={services ?? []}
            renderItem={(item) => <ServiceCard item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-2" />}
            style={{ shadowOpacity: 0.5, shadowColor: "black" }}
          />
        </View>
          <TransferAeroportTab />
        <View className="mt-4 px-1.5">
          <View className="py-4 relative">
            <TouchableOpacity>
              <ChevronsRight
                size={28}
                className="text-primary absolute right-0  "
              />
            </TouchableOpacity>
            <View className="flex flex-row justify-between">
              <Text className="text-xl font-psemibold text-slate-800">
                Nos Vehicules
              </Text>
            </View>
            <FlatList
              className="py-4 relative"
              data={services ?? []}
              renderItem={(item) => <CarCard />}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-1" />}
            />
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-xl font-psemibold text-slate-800">
              Ville populaire
            </Text>
            <Text onPress={() => router.navigate(`/discover`)}>
              <Text className="text-primary font-psemibold">Voir plus</Text>
            </Text>
          </View>

          <FlatList
            className="py-4"
            data={services ?? []}
            renderItem={(item) => <CityCard />}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
          />
        </View>
        <View className="mb-20"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
