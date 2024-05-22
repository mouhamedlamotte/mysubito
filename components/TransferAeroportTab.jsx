import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import {
  ArrowDownUp,
  Calendar,
  Hash,
  MapPinned,
  Plane,
  Plus,
  Settings2,
} from "lucide-react-native";
import CustomSelectDropdown from "./CustomSelectDropdown";
import CustomTextInput from "./InpuField";
import CustomDatePicker from "./CustomDatePicker";


const TransferAeroportTab = () => {
  const today = new Date();
  const [date , setDate] = useState(today);
  const [bookOrder, setBookOrder] = useState("departure");

  const handleBookOrderChange = (value) => {
    setBookOrder(value);
  };

  const [selectedairport, setSelectedairport] = useState(null);
  const [selectedCyty, setSelectedCyty] = useState(null);

  const selectOptions = [
    {
      name: "Aéroport Blaise Diagne (AIBD)",
      code: "aeroport_international_blaise_diagne_aibd",
      is_airport: true,
    },
    {
      name: "Dakar",
      code: "dakar",
      is_airport: false,
    },
    {
      name: "Guereo",
      code: "guereo",
      is_airport: false,
    },
    {
      name: "Manguiers de Guereo",
      code: "manguiers_de_guereo",
      is_airport: false,
    },
    {
      name: "MBOUR",
      code: "mbour",
      is_airport: false,
    },
    {
      name: "NGAPAROU",
      code: "ngaparou",
      is_airport: false,
    },
    {
      name: "Nguerigne",
      code: "nguerigne",
      is_airport: false,
    },
    {
      name: "Pointe Sarène",
      code: "pointe_sarene",
      is_airport: false,
    },
    {
      name: "POPENGUINE",
      code: "popenguine",
      is_airport: false,
    },
    {
      name: "Saint-louis",
      code: "saintlouis",
      is_airport: false,
    },
    {
      name: "SALY",
      code: "saly",
      is_airport: false,
    },
    {
      name: "SOMONE",
      code: "somone",
      is_airport: false,
    },
    {
      name: "Thies",
      code: "thies",
      is_airport: false,
    },
    {
      name: "Toubab dialao",
      code: "toubab_dialao",
      is_airport: false,
    },
    {
      name: "Warang",
      code: "warang",
      is_airport: false,
    },
  ];

  const AirportOptions = selectOptions.filter((option) => option.is_airport);
  const CityOptions = selectOptions.filter((option) => !option.is_airport);

  const onDateChange = (date) => {
    setDate(date);
  };

  return (
    <View className="w-full flex justify-center items-center ">
      <View
        className="bg-white shadow-md border border-slate-300 w-[90%] rounded-3xl p-4 relative"
        style={{ shadowOpacity: 0.5, shadowColor: "black" }}
      >
        <TouchableOpacity
          className="bg-white z-10 flex p-1 absolute shadow-md  justify-center items-center rounded-full right-4 top-24"
          style={{ shadowOpacity: 0.5, shadowColor: "black" }}
          activeOpacity={0.7}
          onPress={() => handleBookOrderChange(bookOrder === "departure" ? "arrival" : "departure")}
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
          <View className={`flex transition-all ${bookOrder === "departure" ? "flex-col" : "flex-col-reverse"}`} style={{ gap: 8 }}>
          <CustomSelectDropdown

            title="Selectionner votre Aeroport"
            options={AirportOptions.map((option) => option.name)}
            selectedOption={selectedairport}
            onSelect={(option) => setSelectedairport(option)}
            icon={<Plane size={20} className="text-slate-900" />}
          />
          <CustomSelectDropdown
            title="Selectionner votre Adresse"
            options={CityOptions.map((option) => option.name)}
            selectedOption={selectedCyty}
            onSelect={(option) => setSelectedCyty(option)}
            icon={<MapPinned size={20} className="text-slate-900" />}
          />
          </View>
          <CustomTextInput
            keywordType="numeric"
            placeholder="Saisir le numero de vol"
            // containerClass="bg-transparent border border-slate-300 py-4 justify-start  items-center"
            icon={<Hash size={20} className="text-slate-900" />}
            textClass={"text-slate-900 text-sm mx-2"}
          />
          <View
            style={{ gap: 5 }}
            className={`rounded-md py-4 flex flex-row px-4 justify-start items-center bg-transparent border border-slate-300 divide-x-2 divide-slate-300`}
          >
            <CustomDatePicker
              onPickDate={onDateChange}
              initialDate={date}
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
  );
};

export default TransferAeroportTab;
