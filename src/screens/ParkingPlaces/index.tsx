import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParkingPlacesList } from '../ParkingPlacesList';
import { ParkingPlaceInfo } from '../ParkingPlaceInfo';
import { ReservationScreen } from '../ReservationScreen';

const Stack = createNativeStackNavigator();

export function ParkingPlaces() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Parking Places" component={ParkingPlacesList} />
        <Stack.Screen name="Info" component={ParkingPlaceInfo} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
