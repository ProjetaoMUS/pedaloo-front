import { getPartnerLocations } from '../../api/partnerLocation'
import { Pressable, Box, Image, IconButton, FlatList, Divider, Text } from 'native-base';
import { useState, useEffect } from 'react';
import { ReservationScreen } from '../ReservationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Search } from '../Search'

interface ParkingPlace {
  id: number;
  name: string;
  parking_spaces_count: number;
  images: string | null;
  address: string;
  description: string;
  price: number;
  latitude: number;
  longitude: number;
}

const Stack = createNativeStackNavigator();

const ParkingPlacesList = ({ navigation }) => {
  const [parkingPlaceData, setParkingPlaceData] = useState<ParkingPlace[]>([]);
  
  useEffect(() => {
    // Fetch parking place data when the component mounts
    async function fetchParkingPlaces() {
      try {
        const data = await getPartnerLocations();
        setParkingPlaceData(data);
      } catch (error) {
        console.error('Error fetching parking places:', error);
      }
    }
    fetchParkingPlaces();
  }, []);

  function calculateDistance(coords1, coords2) {
    const lat1 = coords1[0];
    const lat2 = coords2[0];
    const lon1 = coords1[1];
    const lon2 = coords2[1];
    const earthRadius = 6371000; // Earth's radius in meters (mean value)
  
    // Convert latitude and longitude from degrees to radians
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lon1Rad = (lon1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;
    const lon2Rad = (lon2 * Math.PI) / 180;
  
    // Haversine formula
    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
  
    return distance | 0;
  }

  const renderItem = (userLocation: number[]) => ({ item }: { item: ParkingPlace } ) => (
    <Pressable
      w="90%" mx="auto"
      borderRadius={20}
      borderWidth={1}
      borderColor="muted.200"
      shadow={3}
      onPress={() => { navigation.navigate("Reservation") } }
    >
      <Box h={200} bg="gray.400" overflow="hidden" borderRadius={20}>
        <Image source={{ uri: item.images }} alt="Imagem do local" w="100%" h="100%" />
        <Box
          position="absolute"
          bg="muted.200:alpha.40"
          py={1} px={2}
          borderBottomRightRadius={10}
          flexDirection="row"
          alignItems="center"
          _text={{
            fontSize: 12}}
          >
          {/* TODO: Read rating from server */}
          <Ionicons name="star" color="black" /> 4,85
        </Box>
      </Box>

      <Box px={2} py={3}>
        <Text fontSize="lg" bold>{item.name}</Text>
        <Text color="muted.500">{calculateDistance(userLocation, [item.latitude, item.longitude])}m do endereço</Text>
        <Text>R${item.price} por hora</Text>
        <Text color={
          item.parking_spaces_count < 5 ? "red.600"  : "black"
        }>{item.parking_spaces_count} vagas restantes</Text>
      </Box>
    </Pressable>
  );

  const userLatitude = -8.063169;
  const userLongitude = -34.871139;
    
  return (
    <Box flex={1}>
      <Box px={5} py={2}>
        <Search/>
      </Box>
      <FlatList
        data={parkingPlaceData}
        renderItem={renderItem([userLatitude, userLongitude])}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={ <Divider my={4} w="80%" mx="auto"></Divider> }
        style={{
          marginBottom: 10
        }}
      />
   </Box>
   );
}

export function ParkingPlaces() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Parking Places">
        {(props) => (<ParkingPlacesList {...props} />)}
        </Stack.Screen>

        <Stack.Screen name="Reservation">
          {(props) => (
            <ReservationScreen {...props} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
