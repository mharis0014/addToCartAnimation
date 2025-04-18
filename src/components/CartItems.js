import React from 'react'
import {Image, Text, View} from 'react-native'

import Animated, {FadeIn} from 'react-native-reanimated'
import styles from '../styles/CartItemStyles'

const CartItems = ({hideFakeItems, data}) => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{uri: item?.image}} resizeMode="cover" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item?.title}</Text>
      </View>
      <Text style={styles.itemPrice}>{item?.price}</Text>
    </View>
  )

  return (
    <Animated.FlatList
      entering={FadeIn.withCallback(hideFakeItems)}
      style={styles.list}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CartItems
