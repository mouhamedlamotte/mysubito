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
import { Link } from "expo-router";
import CarCard from "../../components/CarCard";
import CityCard from "../../components/CityCard";
import ServiceCard from "../../components/ServiceCard";
import { useModal } from "../../provider/ModalProvider";

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
  const { showModal } = useModal();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
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
        <View className="w-full flex justify-center items-center ">
          <View
            className="bg-white shadow-md border border-slate-300 w-[90%] rounded-3xl p-4 relative"
            style={{ shadowOpacity: 0.5, shadowColor: "black" }}
          >
            <TouchableOpacity
              className="bg-white z-10 flex p-1 absolute shadow-md  justify-center items-center rounded-full right-4 top-24"
              style={{ shadowOpacity: 0.5, shadowColor: "black" }}
              activeOpacity={0.7}
            >
              <ArrowDownUp size={30} className="text-primary" />
            </TouchableOpacity>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-lg font-bold text-center">
                Transfert Aeroport
              </Text>
              <View className="flex flex-row items-center" style={{ gap: 5 }}>
                {/* <Text className="text-center text-lg text-primary">1</Text> */}
                <Settings2 size={25} className="text-primary" />
              </View>
            </View>
            <View className="mt-4 flex flex-col" style={{ gap: 8 }}>
              <CustomButton
                title="Selectionner un aeroport"
                containerStyles="bg-transparent border border-slate-300 py-4 justify-start  items-center"
                icon={<Plane size={20} className="text-slate-900" />}
                textStyles={"text-slate-900 text-sm mx-2"}
              />
              <CustomButton
                title="Selectionner votre Addresse"
                containerStyles="bg-transparent border border-slate-300 py-4 justify-start  items-center"
                icon={<MapPinned size={20} className="text-slate-900" />}
                textStyles={"text-slate-900 text-sm mx-2"}
              />
              <CustomButton
                title="Selectionner numero de vol"
                containerStyles="bg-transparent border border-slate-300 py-4 justify-start  items-center"
                icon={<Hash size={20} className="text-slate-900" />}
                textStyles={"text-slate-900 text-sm mx-2"}
              />
              <View
                style={{ gap: 5 }}
                className={`rounded-md py-4 flex flex-row px-4 justify-start items-center bg-transparent border border-slate-300 divide-x-2 divide-slate-300`}
              >
                <CustomButton
                  title="Fry, May 17"
                  containerStyles="py-0 px-0 pr-8 bg-transparent border-r-2 rounded-none border-slate-300 "
                  textStyles="text-slate-900 text-sm mx-1"
                  icon={<Calendar size={20} className="text-slate-900" />}
                />
                <CustomButton
                  title="Retour"
                  containerStyles="py-0 px-8 bg-transparent justify-center  items-center"
                  textStyles="text-slate-500 text-sm "
                  icon={<Plus size={20} className="text-slate-500" />}
                />
              </View>
              <CustomButton title="Rechercher" />
            </View>
          </View>
        </View>
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
            <Link href="/discover">
              <Text className="text-primary font-psemibold">Voir plus</Text>
            </Link>
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
