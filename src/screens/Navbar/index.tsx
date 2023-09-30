import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import { Home } from "../Home";
import { ParkingPlaces } from "../ParkingPlaces";
import { Profile } from "../Profile";
import { ReservationScreen } from "../ReservationScreen";

//Screen names
const homeName = "Home";
const bookingName = "Booking";
const profileName = "Profile";
const reservationName = "Reservation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={homeName} component={Home} />
    <Stack.Screen name={reservationName} component={ReservationScreen} />
  </Stack.Navigator>
)

const ParkingPlacesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={bookingName} component={ParkingPlaces} />
    <Stack.Screen name={reservationName} component={ReservationScreen} />
  </Stack.Navigator>
)

export function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarLabel: () => null,
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: [
          {
            display: "flex",
          },
        ],
      })}
    >
      <Tab.Screen
        name={homeName} component={HomeStack}
        options={{ tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
        )}}
      />
      <Tab.Screen
        name={bookingName} component={ParkingPlacesStack}
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart-outline" size={size} color={color} />
        )}}
      />
      <Tab.Screen
        name={profileName} component={Profile}
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" size={size} color={color} />
        )}}
      />
    </Tab.Navigator>
  );
}
