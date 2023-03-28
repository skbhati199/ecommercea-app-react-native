import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { SafeAreaView, Switch, Text, View, StyleSheet, Platform } from 'react-native';
import ProductList from './ProductList';


const styles =  StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();


  return (
    <View  className="flex-1 items-center justify-center pt-10 bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-5">
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        <Text className="dark:text-white text-2xl">New Collection</Text>
      </View>
      <ProductList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}
