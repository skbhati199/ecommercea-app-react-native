import { Platform, StyleSheet, Switch, Text, View } from 'react-native';

import ProductList from './ProductList';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';

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
