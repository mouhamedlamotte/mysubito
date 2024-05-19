import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Heart, MoveRight, Star } from 'lucide-react-native'
import images from '../constants/images'

const CityCard = () => {
  return (
    <View>
    <View className="w-[230px] h-[180px] rounded-lg overflow-hidden relative">
      <ImageBackground
        source={images.saly}
        resizeMode="cover"
        className="h-full w-full "
      />
      <View className="absolute top-0 left-0 right-0 bottom-0 flex flex-row justify-between items-start p-2">
        <Text
          className="bg-white rounded-lg px-2 font-psemibold shadow-sm text-slate-800"
          style={{ shadowOpacity: 0.5, shadowColor: "black" }}
        >
          Coup de coeur
        </Text>
        <TouchableOpacity>
          <Heart
            size={28}
            className="text-slate-200"
            fill="rgba(0, 0, 0, 0.3)"
          />
        </TouchableOpacity>
      </View>
    </View>
    <View className="mt-2 flex flex-row justify-between items-center">
      <Text className="font-psemibold">Saly portudal</Text>
      <View
        className="flex items-center justify-between flex-row "
        style={{ gap: 5 }}
      >
        <Star size={15} className="" fill="black" />
        <Text className="text-lg">4,5(7)</Text>
      </View>
    </View>
    <View className=" flex flex-row items-end">
      <Text className="text-xs
       font-pregular underline text-primary">
        Decouvir
      </Text>
      <View className="flex ml-2  flex-row ">
        <MoveRight size={15} className="text-primary " />
      </View>
    </View>
  </View>
  )
}

export default CityCard