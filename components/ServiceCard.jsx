import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ServiceCard = ({item}) => {
  return (
    <TouchableOpacity
    className="bg-white mr-2 focus:scale-105 border border-slate-300  rounded-lg p-4 justify-center items-center flex w-[150px] h-[150px]"
    style={{ shadowOpacity: 0.5, shadowColor: "black" }}
    activeOpacity={0.9}
  >
    <Image
      className="w-[80px] h-[80px] rounded-lg"
      source={item.item.src}
      resizeMode="contain"
    />
    <Text className="font-psemibold  text-slate-800">
      {item.item.name.split(" ")[0]}
    </Text>
    <Text className="text-slate-500">
      {item.item.name.split(" ")[1]} {item.item.name.split(" ")[2]}
    </Text>
  </TouchableOpacity>
  )
}

export default ServiceCard