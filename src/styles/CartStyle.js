import {StyleSheet} from 'react-native'

export const HEIGHT = 500

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#7651dc',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: HEIGHT,
  },
  sectionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  promoContainer: {
    borderTopWidth: 2,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    paddingTop: 10,
    marginBottom: 20,
  },
  promoHint: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  totalText: {
    fontSize: 22,
  },
  orderButton: {
    width: '70%',
    backgroundColor: '#000',
    paddingVertical: 25,
    position: 'absolute',
    bottom: -20,
    right: 0,
    borderTopLeftRadius: 10,
    height: 100,
    zIndex: 999,
  },
  orderText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    fontSize: 22,
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
})

export default styles
