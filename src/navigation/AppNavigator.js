import * as React from 'react'
import {StatusBar} from 'react-native'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SafeAreaView} from 'react-native-safe-area-context'

import CartProvider from '../context/CartProvider'
import ProductPage from '../screens/ProductsPage'
import ProductDetails from '../screens/ProductDetails'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function SharedElementExample() {
  return (
    <>
      <CartProvider>
        <SafeAreaView style={{backgroundColor: 'black'}}>
          <StatusBar barStyle="light-content" backgroundColor="black" />
        </SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Screen1" component={ProductPage} />
            <Stack.Screen name="Screen2" component={ProductDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </>
  )
}
