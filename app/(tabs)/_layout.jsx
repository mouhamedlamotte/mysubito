import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomTabBar } from '../../components/CustomTabBar'

const TabsLayout = () => {
  return (
    <>
    <Stack className="">
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="discover" options={{ headerShown: false }} />
      <Stack.Screen name="bookings" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />

    </Stack>
    <CustomTabBar />
    <StatusBar
     backgroundColor="#EF497A" 
    translucent
    animated
     animation="slide" style='light' />
    </>
  )
}

export default TabsLayout


