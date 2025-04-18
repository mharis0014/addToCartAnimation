import React from 'react'
import {View, Text} from 'react-native'

import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Categories from '../components/Categories'
import ProductList from '../components/ProductList'
import styles from '../styles/ProductPageStyles'

const TopBar = () => (
  <View style={styles.topBar}>
    <Ionicons
      name="search"
      size={25}
      color="black"
      style={styles.icon}
      accessibilityLabel="Search"
    />
    <Ionicons
      name="notifications-outline"
      size={25}
      color="black"
      accessibilityLabel="Notifications"
    />
  </View>
)

const ProductPage = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TopBar />

        <Text style={styles.subTitle}>Whats New</Text>
        <Text style={styles.title}>From The Kitchen</Text>

        <View style={styles.categoriesContainer}>
          <Categories />
        </View>

        <ProductList />
      </SafeAreaView>
    </>
  )
}

export default ProductPage
