import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParkingPlacesList } from '../ParkingPlacesList';
import { ReservationScreen } from '../ReservationScreen';

const Stack = createNativeStackNavigator();

export function ParkingPlaces() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Parking Places">
          {(props) => (<ParkingPlacesList {...props} />)}
        </Stack.Screen>

        <Stack.Screen name="Reservation">
          {(props) => (<ReservationScreen {...props} />)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
