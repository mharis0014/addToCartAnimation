import React, {forwardRef, useImperativeHandle, useState} from 'react'
import {View, Text, Pressable} from 'react-native'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolate,
  Extrapolation,
  FadeIn,
  runOnJS,
} from 'react-native-reanimated'

import CartItems from './CartItems'
import FakeCartItems from './FakeCartItems.js'
import styles from '../styles/CartStyle.js'

export const HEIGHT = 500
export const OPEN_HEIGHT = HEIGHT * 0.7

const Cart = forwardRef(({items}, ref) => {
  const translateY = useSharedValue(HEIGHT)
  const initialY = useSharedValue(0)

  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showPrice, setShowPrice] = useState(false)
  const [showFakeItems, setShowFakeItems] = useState(true)

  /** Animate Cart Slide */
  const cartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }))

  /** Animate Order Button */
  const orderButtonStyle = useAnimatedStyle(() => {
    const y = interpolate(translateY.value, [HEIGHT, 0], [80, 0], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP,
    })
    return {transform: [{translateY: withSpring(y)}]}
  })

  /** Animate Price Label */
  const priceAnimatedStyle = useAnimatedStyle(() => {
    const y = interpolate(translateY.value, [OPEN_HEIGHT, 0], [0, -70], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP,
    })
    return {transform: [{translateY: y}]}
  })

  /** Show Real Cart Items After Fake Ones */
  const handleFakeItemsDone = finished => {
    'worklet'
    if (finished) runOnJS(setShowFakeItems)(false)
  }

  /** Open Cart */
  const openCart = (toY = 0) => {
    setShowPrice(true)
    translateY.value = withTiming(toY, {duration: 500})
  }

  /** Close Cart */
  const closeCart = () => {
    const resetState = () => {
      setIsAnimating(false)
      setIsVisible(false)
      setShowPrice(false)
      setShowFakeItems(true)
    }

    translateY.value = withTiming(HEIGHT, {duration: 500}, isFinished => {
      if (isFinished) runOnJS(resetState)()
    })
  }

  /** Expose Open Method via Ref */
  useImperativeHandle(ref, () => ({open: openCart}), [])

  return (
    <>
      <Animated.View style={[styles.container, cartAnimatedStyle]}>
        <Pressable onPress={closeCart}>
          <Text style={[styles.title, styles.sectionText]}>Cart</Text>
        </Pressable>

        <View style={{height: 192}}>
          {isVisible && <CartItems data={items} hideFakeItems={handleFakeItemsDone} />}

          {showFakeItems && (
            <FakeCartItems
              translateX={translateY}
              toggle={isAnimating}
              setToggle={setIsAnimating}
              handleOpen={openCart}
              data={items}
              start={initialY}
              notify={showPrice}
              visible={isVisible}
              setVisible={setIsVisible}
            />
          )}
        </View>

        {isVisible && (
          <Animated.View entering={FadeIn} style={{opacity: 0}}>
            <View style={styles.promoContainer}>
              <Text style={styles.sectionText}>Promo Code</Text>
              <Text style={[styles.sectionText, styles.promoHint]}>
                Enter the promo code & get discount
              </Text>
            </View>

            <View style={styles.totalContainer}>
              <Text style={[styles.sectionText, styles.totalText]}>Total</Text>
              <Text style={[styles.sectionText, styles.totalText]}></Text>
            </View>
          </Animated.View>
        )}

        <Animated.View style={[styles.orderButton, orderButtonStyle]}>
          <Text style={styles.orderText}>Order</Text>
        </Animated.View>
      </Animated.View>

      {showPrice && (
        <Animated.Text style={[styles.sectionText, styles.price, priceAnimatedStyle]}>
          $200
        </Animated.Text>
      )}
    </>
  )
})

export default Cart
