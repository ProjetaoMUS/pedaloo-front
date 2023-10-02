import * as React from "react";

import { BookingDetails } from "../BookingDetails";
// Screens
import { Home } from "../Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MyReservations } from "../MyReservations";
import { ParkingPlaces } from "../ParkingPlaces";
import { Profile } from "../Profile";
import { ReservationScreen } from "../ReservationScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen names
const homeName = "Home";
const bookingName = "Booking";
const profileName = "Profile";
const reservationName = "Reservation";

const Tab = createBottomTabNavigator();

export function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === bookingName) {
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
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={bookingName} component={ParkingPlaces} />
      <Tab.Screen name={profileName} component={Profile} />
      <Tab.Screen
        name={reservationName}
        component={ReservationScreen}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}
