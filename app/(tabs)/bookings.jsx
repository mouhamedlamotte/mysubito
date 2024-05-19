import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { AlignLeft, Bell, CalendarDaysIcon, CalendarSearch, Filter, SearchX, TicketX } from "lucide-react-native";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const renderTabs = () => {
    switch (activeTab) {
      case "pending":
        return <Pending />;
      case "completed":
        return <Completed />;
    }
  };

  return (
    <SafeAreaView className="h-full bg-slate-100">
      {/* <View className="bg-primary w-full h-[150px]  rounded-b-xl py-2 px-2">
        <Text className="text-white text-center text-xl mt-4 font-bold">
          Mes réservations
        </Text>
        <View className="my-4 p-1  bg-white  rounded-full flex flex-row justify-between items-center">
            <CustomButton
              title="En cours"
              containerStyles={`flex-1 w-full rounded-full  ${
                activeTab === "pending" ? "shadow-sm" : "bg-transparent"
              }`}
              elevation={activeTab === "pending" ? 5 : 0}
              textStyles={`font-pregular ${
                activeTab === "pending" ? "text-white" : "text-black"
              }`}
              handlePress={() => setActiveTab("pending")}
            />
            <CustomButton
              title="Terminees"
              containerStyles={`flex-1 w-full rounded-full  ${
                activeTab === "completed" ? "shadow-sm" : "bg-transparent"
              }`}
              textStyles={`font-pregular ${
                activeTab === "completed" ? "text-white" : "text-black"
              }`}
              elevation={activeTab === "completed" ? 5 : 0}
              handlePress={() => setActiveTab("completed")}
            />
          </View>
      </View> */}
      <View className=" rounded-bl-[30px] bg-primary w-full p-3">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity
            activeOpacity={0.9}
            className="bg-slate-100 flex p-1 shadow-sm  justify-center items-center rounded-full"
            style={{ shadowOpacity: 0.5, shadowColor: "black" }}
          >
            <AlignLeft size={30} className="text-primary" />
          </TouchableOpacity>
          <Text className="text-white font-psemibold text-xl">
            Mes réservations
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            className="flex justify-start items-center"
          >
            <Bell size={30} className="text-white" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full bg-primary  self-end">
        <View className="w-full bg-slate-100 px-3  rounded-tr-[30px] border-b border-b-slate-300 ">
          <View className="my-2 p-1 bg-primary/10 rounded-full flex flex-row justify-between items-center">
            <CustomButton
              title="En cours"
              containerStyles={`flex-1 w-full rounded-full  ${
                activeTab === "pending" ? "shadow-sm" : "bg-transparent"
              }`}
              elevation={activeTab === "pending" ? 5 : 0}
              textStyles={`font-pregular ${
                activeTab === "pending" ? "text-white" : "text-black"
              }`}
              handlePress={() => setActiveTab("pending")}
            />
            <CustomButton
              title="Terminees"
              containerStyles={`flex-1 w-full rounded-full  ${
                activeTab === "completed" ? "shadow-sm" : "bg-transparent"
              }`}
              textStyles={`font-pregular ${
                activeTab === "completed" ? "text-white" : "text-black"
              }`}
              elevation={activeTab === "completed" ? 5 : 0}
              handlePress={() => setActiveTab("completed")}
            />
          </View>
          <View className="flex flex-row pb-2 items-center" style={{ gap: 5 }}>
            <CustomButton
              title="filtrer par service"
              containerStyles="bg-primary/5  grow border border-slate-200/60 py-3 justify-start  items-center"
              icon={<Filter size={20} className="text-slate-900" />}
              textStyles={"text-slate-900 text-sm mx-2"}
            />
            <TouchableOpacity className="bg-primary/5  border border-slate-200/60 flex p-2 shadow-sm  justify-center items-center rounded-md" activeOpacity={0.9}>
              <CalendarSearch size={28} className="text-slate-700"  />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>{renderTabs()}</View>
      <View className="mb-20"></View>
    </SafeAreaView>
  );
};

export default Bookings;

const Pending = () => {
  return (
    <View className="w-full flex justify-center items-center">
      <TicketX size={50} className="text-slate-500  mt-6 " />
      <Text className="text-slate-500 text-xl font-semibold mt-2 text-center max-w-[300px]">
        Vous n'avez aucune réservation en cours</Text>
    </View>
  );
};

const Completed = () => {
  return (
    <View className="w-full flex justify-center items-center">
      <TicketX size={50} className="text-slate-500  mt-6 " />
      <Text className="text-slate-500 text-xl font-semibold mt-2 text-center max-w-[300px]">
        Vous n'avez aucune réservation termine</Text>
    </View>
  );
};
