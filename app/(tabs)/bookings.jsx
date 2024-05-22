import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import {
  AlignLeft,
  Bell,
  CalendarSearch,
  Filter,
  Plane,
  PlaneTakeoff,
  TicketX,
} from "lucide-react-native";
import { logos } from "../../constants";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const renderTabs = (data) => {


    switch (activeTab) {
      case "pending":
        return <Pending data={data} />;
      case "completed":
        return <Completed data={data} />;
    }
  };

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const data = [
    {
      id:1,
      bookingType: "rental",
      vehicleName: "Mercedes-Benz",
      pickupLocation: "Aeroport international Blaise Diagne",
      dropLocation: "Dakar",
      pickupDate: "June 9",
      dropDate: "June 13 12:00 PM",
      bookingPrice: "$400",
      status: "En attente",
    },
    {
      id:2,
      bookingType: "fly",
      fromAeroportCode: "LHR",
      toAeroportCode: "JFK",
      fromCityName: "London",
      toCityName: "New York",
      flyDate: "June 8",
      flyTime: "12:24 PM",
      ArriveDate: "June 9",
      ArriveTime: "6:47 AM",
      bookingPrice: "$400",
      status: "En attente",
    },
    {
      id:3,
      bookingType: "rental",
      vehicleName: "BMW",
      pickupLocation: "Heathrow Airport",
      dropLocation: "Manchester",
      pickupDate: "July 1",
      dropDate: "July 5 10:00 AM",
      bookingPrice: "$350",
      status: "validated",
    },
    {
      id:4,
      bookingType: "fly",
      fromAeroportCode: "CDG",
      toAeroportCode: "DXB",
      fromCityName: "Paris",
      toCityName: "Dubai",
      flyDate: "August 12",
      flyTime: "2:00 PM",
      ArriveDate: "August 13",
      ArriveTime: "4:00 AM",
      bookingPrice: "$500",
      status: "completed",
    },
    {
      id:5,
      bookingType: "rental",
      vehicleName: "Audi",
      pickupLocation: "Berlin Airport",
      dropLocation: "Munich",
      pickupDate: "Sept 20",
      dropDate: "Sept 25 9:00 AM",
      bookingPrice: "$300",
      status: "En attente",
    },
    {
      id:6,
      bookingType: "fly",
      fromAeroportCode: "SFO",
      toAeroportCode: "LAX",
      fromCityName: "San Francisco",
      toCityName: "Los Angeles",
      flyDate: "July 15",
      flyTime: "1:30 PM",
      ArriveDate: "July 15",
      ArriveTime: "3:00 PM",
      bookingPrice: "$200",
      status: "validated",
    },
    {
      id:7,
      bookingType: "rental",
      vehicleName: "Tesla",
      pickupLocation: "San Jose Airport",
      dropLocation: "San Francisco",
      pickupDate: "October 1",
      dropDate: "October 3 5:00 PM",
      bookingPrice: "$250",
      status: "completed",
    },
    {
      id:10,
      bookingType: "fly",
      fromAeroportCode: "ORD",
      toAeroportCode: "MIA",
      fromCityName: "Chicago",
      toCityName: "Miami",
      flyDate: "Nov 5",
      flyTime: "10:00 AM",
      ArriveDate: "Nov 5",
      ArriveTime: "2:00 PM",
      bookingPrice: "$300",
      status: "En attente",
    },
    {
      id:8,
      bookingType: "rental",
      vehicleName: "Porsche",
      pickupLocation: "Frankfurt Airport",
      dropLocation: "Hamburg",
      pickupDate: "Dec 1",
      dropDate: "Dec 5 8:00 AM",
      bookingPrice: "$450",
      status: "validated",
    },
    {
      id:9,
      bookingType: "fly",
      fromAeroportCode: "NRT",
      toAeroportCode: "LAX",
      fromCityName: "Tokyo",
      toCityName: "Los Angeles",
      flyDate: "January 10",
      flyTime: "4:00 PM",
      ArriveDate: "January 10",
      ArriveTime: "10:00 AM",
      bookingPrice: "$600",
      status: "completed",
    } ]
  

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
            <TouchableOpacity
              className="bg-primary/5  border border-slate-200/60 flex p-2 shadow-sm  justify-center items-center rounded-md"
              activeOpacity={0.9}
            >
              <CalendarSearch size={28} className="text-slate-700" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            progressBackgroundColor="white"
            colors={["#EF497A"]}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      >
        {data.length > 0 ? renderTabs(data) : <EmptyState />}
        <View className="mb-20"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookings;

const Pending = ({data}) => {
  const pending_data = data.filter((item) => item.status != 'completed');

  return pending_data.map((item) =>
    item.bookingType === "rental" ? (
      <RentalCarCard key={item.id} item={item} />
    ) : (
      <FlyTicketCard key={item.id} item={item} />
    )
  );
};

const Completed = ({data}) => {
  const compled_data = data.filter((item) => item.status === 'completed');
  return compled_data.map((item) =>
    item.bookingType === "rental" ? (
      <RentalCarCard key={item.id} item={item} />
    ) : (
      <FlyTicketCard key={item.id} item={item} />
    )
  );
};

const EmptyState = ({ message = "Vous n'avez aucune réservation" }) => {
  return (
    <View className="w-full flex justify-center items-center">
      <TicketX size={50} className="text-slate-500  mt-6 " />
      <Text className="text-slate-500 text-xl font-semibold mt-2 text-center max-w-[300px]">
        {message}
      </Text>
    </View>
  );
};

const RentalCarCard = ({ item } ) => {
  return (
    <View className="my-3 mx-2 relative">
      <View className="bg-white p-3  rounded-lg ">
        <View className="flex flex-row items-start justify-between">
          <View
            className="flex flex-row items-center justify-center"
            style={{ gap: 5 }}
          >
            <Image className="h-8 w-8" source={logos.mercedes} />
            <Text className="font-bold text-xl to-slate-800">
              {item?.vehicleName}
            </Text>
          </View>
          <View className="flex items-end justify-center">
            <Text className="font-bold text-xl to-slate-800">CL63 AMG</Text>
            <Text className="text-slate-700 text-lg">Long loup</Text>
          </View>
        </View>
        <View className="">
          <Text className="text-slate-500 ">Pick-up</Text>
          <Text className="font-psemibold ">
            {item?.pickupLocation}
          </Text>
        </View>
        <View className="mt-3 flex flex-row items-center" style={{ gap: 30 }}>
          <View>
            <Text className="text-slate-500 ">Drop aera</Text>
            <Text className="font-psemibold ">{item?.dropLocation}</Text>
          </View>
          <View>
            <Text className="text-slate-500 ">Rent periode</Text>
            <Text className="font-psemibold ">{item?.pickupDate} - {item?.dropDate}</Text>
          </View>
        </View>
      </View>
      <View className="flex -z-10 flex-row items-center justify-between bg-white">
        <View className="h-3 w-3 bg-slate-100 rounded-r-full"></View>
        <View className="grow h-0.5 border border-dashed border-slate-300"></View>
        <View className="h-3 w-3 bg-slate-100 rounded-l-full"></View>
      </View>
      <View className="bg-white w-full flex flex-row p-3 justify-between items-center pb-5 rounded-lg">
        <Text className="text-slate-500 font-psemibold">{item?.status}</Text>
        {
          item?.status != 'completed' ? (
            <CustomButton disabled={item?.status === 'validated'} title="Annuler" />
          ):
          <CustomButton
          title="Details"
          containerStyles="p-2 py-1 bg-transparent"
          textStyles="text-slate-500 font-psemibold"
          />
        }
      </View>
      <View
        className="absolute -bottom-3 right-3  flex items-center flex-row z-20"
        style={{ gap: 5 }}
      >
        <Text className="bg-blue-400 rounded-full py-1 px-2 text-white font-psemibold text-xs">
          {item?.bookingType === "rental" ? "Rental" : "Fly"}
        </Text>
        <Text className="bg-slate-900 rounded-full py-1 px-2 text-white font-psemibold text-xs">
          {item?.bookingPrice}
        </Text>
      </View>
    </View>
  );
};

const FlyTicketCard = ({item}) => {
  return (
    <View className="my-3 mx-2 relative">
      <View className="bg-white p-3  rounded-lg ">
        <View className="flex flex-row items-center justify-between">
          <View
            className="flex flex-row items-center justify-center"
            style={{ gap: 5 }}
          >
            <Text className="font-bold text-xl to-slate-800">
              {item?.fromAeroportCode}
            </Text>
          </View>
          <View className="grow px-2 flex flex-row  justify-between items-center">
            <View className="h-3 w-[10px]  border-slate-800 rounded-full"></View>
            <View className="w-[200px] flex items-center justify-center relative ">
              <View className="w-full  border border-slate-800 border-dashed">
                <PlaneTakeoff
                  size={25}
                  className="text-black-200 absolute top-0 bottom-0 left-[44%] right-1/2  -mt-6 "
                  fill="white"
                />
              </View>
            </View>
            <View className="h-3 w-[10px]  border-slate-800 rounded-full"></View>
          </View>
          <View className="flex items-end justify-center">
            <Text className="font-bold text-xl to-slate-800">
              {item?.toAeroportCode}
            </Text>
          </View>
        </View>

        <View
          className=" flex flex-row items-center justify-between mt-2"
          style={{ gap: 30 }}
        >
          <View>
            <Text className="text-slate-900 text-lg font-psemibold ">
              {item?.fromCityName}
            </Text>
            <Text className="text-slate-500">{item?.flyDate} - {item?.flyTime}</Text>
          </View>
          <View className="flex flex-col items-end">
            <Text className="text-slate-900 text-lg font-psemibold text-end ">
              {item?.toCityName}
            </Text>
            <Text className="text-slate-500">{item?.ArriveDate} - {item?.ArriveTime}</Text>
          </View>
        </View>
      </View>

      <View className="flex -z-10 flex-row items-center justify-between bg-white">
        <View className="h-3 w-3 bg-slate-100 rounded-r-full"></View>
        <View className="grow h-0.5 border border-dashed border-slate-300"></View>
        <View className="h-3 w-3 bg-slate-100 rounded-l-full"></View>
      </View>
      <View className="bg-white w-full flex flex-row p-3 justify-between items-center pb-5 rounded-lg">
        <Text className="text-slate-500 font-psemibold">{ item?.status }</Text>
        {
          item?.status != 'completed' ? (
            <CustomButton disabled={item?.status === 'validated'} title="Annuler" />
          ) :
          <CustomButton
          title="Details"
          containerStyles="p-2 py-1 bg-transparent"
          textStyles="text-slate-500 font-psemibold"
          />
        }
      </View>
      <View
        className="absolute -bottom-3 right-3  flex items-center flex-row z-20"
        style={{ gap: 5 }}
      >
        <Text className="bg-red-400 rounded-full py-1 px-2 text-white font-psemibold text-xs">
          FlyTicket
        </Text>
        <Text className="bg-slate-900 rounded-full py-1 px-2 text-white font-psemibold text-xs">
          400$
        </Text>
      </View>
    </View>
  );
};




