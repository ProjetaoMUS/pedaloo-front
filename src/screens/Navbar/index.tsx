import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import { ProfileProvider } from '../../contexts/profile';

import { ProfileStackHeader } from './profile-header';

// Screens
import { Home } from "../Home";
import { ParkingPlaces } from "../ParkingPlaces";
import { Profile, ProfilePageHeader } from "../Profile";
import { ReservationScreen } from "../ReservationScreen";
import { Account } from '../Account';
import { Contact } from '../Contact';
import { Help } from '../Help';
import { Settings } from '../Settings';

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

const NavbarApp = () => (
  <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({ route }) => ({
      tabBarLabel: () => null,
      headerShown: false,
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "grey",
      tabBarStyle: {
        backgroundColor: "white",
        //opacity: "0.8",
        //position: "absolute",
        height: "10%",
        paddingBottom: "5%",
        paddingTop: "1%",
      },
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
)

export function Navbar() {
  return (
    <ProfileProvider>
      <Stack.Navigator
          initialRouteName="ProfileHome"
          screenOptions={{ header: ProfileStackHeader }}
      >
        <Stack.Screen name="ProfileHome" component={NavbarApp}
          options={{ headerShown: false }} />
        <Stack.Screen name="Minha Conta" component={Account} />
        <Stack.Screen name="Configurações" component={Settings} />
        <Stack.Screen name="Suporte" component={Help} />
      </Stack.Navigator>
    </ProfileProvider>
  );
}
