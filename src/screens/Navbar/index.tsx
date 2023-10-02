import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import { ProfileProvider } from '../../contexts/profile';

import { ProfileStackHeader } from './profile-header';

// Screens
import { Home } from "../Home";
import { ParkingPlacesList } from "../ParkingPlacesList";
import { ParkingPlaceInfo } from "../ParkingPlaceInfo";
import { Profile } from "../Profile";
import { ReservationScreen } from "../ReservationScreen";
import { Account } from '../Account';
import { Contact } from '../Contact';
import { Help } from '../Help';
import { Settings } from '../Settings';

//Screen names
const infoName = "Info";
const reservationName = "Reservation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={"Map"} component={Home} />
    <Stack.Screen name={infoName} component={ParkingPlaceInfo} />
    <Stack.Screen name={reservationName} component={ReservationScreen} />
  </Stack.Navigator>
)

const ParkingPlacesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={"Booking Home"} component={ParkingPlacesList} />
    <Stack.Screen name={infoName} component={ParkingPlaceInfo} />
    <Stack.Screen name={reservationName} component={ReservationScreen} />
  </Stack.Navigator>
)

const NavbarApp = () => (
  <Tab.Navigator
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
      name={"App Home"} component={HomeStack}
      options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
      )}}
    />
    <Tab.Screen
      name={"Booking"} component={ParkingPlacesStack}
      options={{ tabBarIcon: ({ color, size }) => (
        <Ionicons name="cart-outline" size={size} color={color} />
      )}}
    />
    <Tab.Screen
      name={"Profile"} component={Profile}
      options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" size={size} color={color} />
      )}}
    />
  </Tab.Navigator>
)

export function Navbar() {
  return (
    <ProfileProvider>
      <Stack.Navigator screenOptions={{ header: ProfileStackHeader }}>
        <Stack.Screen name="Profile Home" component={NavbarApp}
          options={{ headerShown: false }} />
        <Stack.Screen name="Minha Conta" component={Account} />
        <Stack.Screen name="Configurações" component={Settings} />
        <Stack.Screen name="Suporte" component={Help} />
      </Stack.Navigator>
    </ProfileProvider>
  );
}
