import {StyleSheet} from 'react-native'
import globalStyles from './globalStyles'

const styles = StyleSheet.create({
  container: {
    ...globalStyles.fill,
    paddingHorizontal: 25,
    backgroundColor: '#f9f9f9',
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 23,
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    marginTop: 20,
  },
})

export default styles
