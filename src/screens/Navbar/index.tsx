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
      initialRouteName={"Home Stack"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home Stack") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Booking Stack") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
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
      <Tab.Screen name={"Home Stack"} component={HomeStack} />
      <Tab.Screen name={"Booking Stack"} component={ParkingPlacesStack} />
      <Tab.Screen name={profileName} component={Profile} />
    </Tab.Navigator>
  );
}
