import React, {useRef} from 'react'
import {View, Text, FlatList, Pressable} from 'react-native'

import {useRoute} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Entypo'

import {useCartStore} from '../context/CartProvider'
import Cart, {OPEN_HEIGHT} from '../components/Cart'

import styles from '../styles/ProductDetailsStyles'
import globalStyles from '../styles/globalStyles'

const foodInfo = [
  {title: 'Energy', value: '210 cal', bgColor: '#fb6d37'},
  {title: 'Proteins', value: '14.6 cal', bgColor: '#ffbe3d'},
  {title: 'Fats', value: '14.6 cal', bgColor: '#7651dc'},
  {title: 'Carbs', value: '14.6 cal', bgColor: '#84b468'},
]

const FoodInfoCard = ({item}) => (
  <View style={[styles.foodInfo, {backgroundColor: item.bgColor}]}>
    <Text style={styles.foodInfoTitle}>{item.title}</Text>
    <Text style={styles.foodInfoValue}>{item.value}</Text>
  </View>
)

const QuantitySelector = () => (
  <View style={styles.quantityContainer}>
    <Icon name="plus" size={20} color="black" />
    <Text style={styles.quantityText}>1</Text>
    <Icon name="minus" size={20} color="black" />
  </View>
)

const AddToCartButton = ({price, onPress}) => (
  <Pressable style={styles.cartButtonContainer} onPress={onPress}>
    <View style={styles.cartButton}>
      <Text style={styles.cartText}>{price}</Text>
      <Text style={styles.cartText}>Add</Text>
    </View>
  </Pressable>
)

const ProductDetails = () => {
  const {params} = useRoute()
  const {productInfo, tagName} = params || {}
  const {cartList, addToCart} = useCartStore()
  const cartRef = useRef()
  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.fill}>
          <View style={globalStyles.center}>
            {/* Shared Element Image */}
            <Animated.Image
              style={styles.image}
              sharedTransitionTag={tagName}
              source={{uri: productInfo?.image}}
            />
          </View>

          {/* Title & description */}
          <Text style={styles.title}>Avocado Salad</Text>
          <Text style={styles.weight}>300 g</Text>
          <Text style={[styles.weight, styles.description]}>
            Homemade italian dressing, cherry tomatoes, green olives,Homemade italian
          </Text>

          {/* Food Info */}
          <FlatList
            data={foodInfo}
            horizontal
            keyExtractor={(_, i) => i.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({item}) => <FoodInfoCard item={item} />}
          />
        </View>

        {/* Add to Cart */}
        <View style={styles.actionRow}>
          <QuantitySelector />

          <AddToCartButton
            price="$300"
            onPress={() => {
              addToCart(productInfo)
              cartRef.current.open(OPEN_HEIGHT)
            }}
          />
        </View>

        <SafeAreaView />
      </View>

      <Cart ref={cartRef} items={cartList} />
    </>
  )
}

export default ProductDetails
