import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import { Home } from '../Home';
import { ParkingPlaces } from '../ParkingPlaces';
import { Profile } from '../Profile';

//Screen names
const homeName = "Home";
const bookingName = "Booking";
const profileName = "Profile";

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
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === bookingName) {
            iconName = focused ? 'calendar' : 'calendar-outline';

          } else if (rn === profileName) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
        headerShown: false
      })}

      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70}
      }}>

      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={bookingName} component={ParkingPlaces} />
      <Tab.Screen name={profileName} component={Profile} />

    </Tab.Navigator>
  );
}