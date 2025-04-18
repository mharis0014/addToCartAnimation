import {Dimensions, StyleSheet} from 'react-native'

import globalStyles from './globalStyles'

const IMAGE_HEIGHT = Dimensions.get('window').height * 0.4

const styles = StyleSheet.create({
  container: {
    ...globalStyles.fill,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 25,
    paddingTop: 50,
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  weight: {
    color: 'grey',
    fontSize: 17,
  },
  description: {
    marginVertical: 20,
  },
  separator: {
    width: 10,
  },
  foodInfo: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  foodInfoTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 5,
  },
  foodInfoValue: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quantityContainer: {
    ...globalStyles.row,
    width: '45%',
    backgroundColor: '#f2f4f8',
    padding: 15,
    borderRadius: 10,
  },
  quantityText: {
    fontWeight: 'bold',
  },
  cartButtonContainer: {
    width: '45%',
  },
  cartButton: {
    ...globalStyles.row,
    backgroundColor: '#1d212b',
    padding: 15,
    borderRadius: 10,
  },
  cartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
})

export default styles
