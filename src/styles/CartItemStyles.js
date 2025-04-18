import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  list: {
    opacity: 0,
  },
  separator: {
    width: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  itemDetails: {
    paddingHorizontal: 10,
    width: '60%',
  },
  itemTitle: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 12,
  },
  itemPrice: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 12,
  },
})
export default styles
