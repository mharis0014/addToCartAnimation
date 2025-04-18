import React from 'react'
import {View, Text, Image, FlatList} from 'react-native'

import styles from '../styles/CategoriesStyles'

const items = [
  {title: 'salads', image: require('../images/salad.png')},
  {title: 'soups', image: require('../images/hot-soup.png')},
  {title: 'burgers', image: require('../images/cheeseburger.png')},
]
const Categories = () => {
  const renderItem = ({item, index}) => {
    const isFirst = index === 0

    return (
      <View style={[styles.categoryItem, isFirst && styles.firstCategoryHighlight]}>
        <Image source={item.image} style={styles.categoryIcon} />
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      renderItem={renderItem}
    />
  )
}

export default Categories
