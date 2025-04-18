import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  firstCategoryHighlight: {
    backgroundColor: '#d4eac8',
  },
  categoryIcon: {
    width: 20,
    height: 20,
  },
  categoryText: {
    fontSize: 12,
    marginLeft: 8,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  itemSeparator: {
    width: 10,
  },
})

export default styles
