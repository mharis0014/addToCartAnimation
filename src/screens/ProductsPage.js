import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Categories from '../components/Categories'
import ProductList from '../components/ProductList'

export default function ProductPage() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Ionicons name="search" size={25} color="black" style={{marginRight: 10}} />
          <Ionicons name="notifications-outline" size={25} color="black" />
        </View>

        {/* Title */}
        <Text style={styles.subTitle}>Whats New</Text>
        <Text style={styles.title}>From The Kitchen</Text>

        {/* Categories */}
        <View style={{marginTop: 20}}>
          <Categories />
        </View>

        {/* Products */}
        <ProductList />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#f9f9f9',
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 23,
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
})
