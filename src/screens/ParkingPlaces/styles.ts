import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Background color for the entire app
  },
  header: {
    backgroundColor: '#003714',
    paddingTop: 30,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#ffffff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#000000',
  },
  ratingStars: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 5,
  },
  distance: {
    fontSize: 16,
    color: '#444',
  },
  cost: {
    fontSize: 16,
    color: '#444',
  },
  parkingSpaces: {
    fontSize: 16,
    color: '#444',
  },
  parkingSpacesCritical: {
    fontSize: 16,
    color: 'red'
  }
});

//ffffff
//#43f6b1
//#0be18e
//#003714