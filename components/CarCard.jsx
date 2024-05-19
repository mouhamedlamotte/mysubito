import { View, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Cog, Fuel, MapPin, RockingChair, Star, Waypoints } from 'lucide-react-native'
import CustomButton from './CustomButton'
import images from '../constants/images'

const CarCard = () => {
  return (
    <View
    className="p-2 border min-w-[340px] border-slate-300 rounded-md bg-white"
  >
    <View className="flex flex-row justify-between items-center">
      <Text className="font-psemibold">BMW 3 series Sedan</Text>
      <View
        className="flex items-center flex-row "
        style={{ gap: 5 }}
      >
        <Star size={20} className="" fill="yellowgreen" />
        <Text className="text-sm text-slate-500">4,5(100)</Text>
      </View>
    </View>
    <View>
      <Text className="text-slate-500 font-psemibold text-xs">
        The 3 Sedan
      </Text>
    </View>
    <TouchableOpacity className="flex justify-center items-center h-[150px] w-full"
    activeOpacity={0.7}
    onPress={() => Alert.alert("Voiture", "Marque : BMW, Modele : 3 series Sedan")}
    >
      <ImageBackground
        source={images.mishibushi}
        resizeMode="contain"
        className="h-full w-full"
      />
    </TouchableOpacity>
    <View className="flex flex-row justify-between items-center mt-1">
      <View className="flex flex-row items-center">
        <MapPin size={20} className="text-slate-500" />
        <Text className="text-slate-500">
          Senegal, Dakar, Mariste
        </Text>
      </View>
      <View className="flex flex-row items-center">
        <Text className="text-black font-pbold text-lg">
          $40k
        </Text>
        <Text className="text-slate-500">/Jour</Text>
      </View>
    </View>
    <View className="w-full h-0.5 bg-gray-300 my-2"></View>
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center" style={{ gap:2 }} >
          <Cog size={20} className="text-primary" />
          <Text className="text-xs">Auto</Text>
      </View>
      <View className="flex flex-row items-center" style={{ gap:2 }} >
          <RockingChair size={20} className="text-primary" />
          <Text className="text-xs">7 places</Text>
      </View>
      <View className="flex flex-row items-center" style={{ gap:2 }} >
          <Waypoints size={20} className="text-primary" />
          <Text className="text-xs">Peage</Text>
      </View>
      <View className="flex flex-row items-center" style={{ gap:2 }} >
          <Fuel size={20} className="text-primary" />
          <Text className="text-xs">Essence</Text>
      </View>
    </View>
    <View className="mt-3">
    <CustomButton
    title="Reserver"
    textStyles="font-medium"
    />
    </View>
  </View>
  )
}

export default CarCard