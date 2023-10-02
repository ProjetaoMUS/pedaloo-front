import { Box, Divider, FlatList, Image, Pressable, Text, Flex} from "native-base";
import { Dimensions} from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getPartnerLocations } from "../../api/partnerLocation";

import { Search } from "../Search";

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
  rating: number;
}

export function ParkingPlacesList({ navigation }) {
  const [parkingPlaceData, setParkingPlaceData] = useState<ParkingPlace[]>([]);

  useEffect(() => {
    // Fetch parking place data when the component mounts
    async function fetchParkingPlaces() {
      try {
        const data = await getPartnerLocations();
        setParkingPlaceData(data);
      } catch (error) {
        console.error("Error fetching parking places:", error);
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
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance | 0;
  }

  const renderItem =
    (userLocation: number[]) =>
    ({ item }: { item: ParkingPlace }) =>
      (
        <Pressable
          w="90%"
          mx="auto"
          borderRadius={20}
          borderWidth={1}
          borderColor="muted.200"
          shadow={3}
          onPress={() => {
            navigation.navigate("Reservation", { parkingPlace: item });
          }}
        >
          <Flex flexDirection="row" alignItems="center">
            <Box
              h={Dimensions.get('window').width * 0.2 | 0}
              w={Dimensions.get('window').width * 0.2 | 0}
              bg="gray.400"
              overflow="hidden"
              borderRadius={20}
              alignItems="center"
              justifyContent="center"
              px={10}
            >
              <Image
                source={{ uri: item.images }}
                alt="Imagem do local"
                w="100%"
                h="100%"
                borderRadius={20}
              />
            </Box>

            <Box flex={1} px={2} py={3}>
              <Text fontSize="lg" bold>
                {item.name}
              </Text>
              <Text color="muted.500">
                {item.address}
              </Text>
              <Text>R${item.price} por hora</Text>
              <Text color={item.parking_spaces_count < 5 ? "red.600" : "black"}>
                {item.parking_spaces_count} vagas restantes
              </Text>
            </Box>

            <Box
              bg="#505050"
              borderRadius={10}
              px={10}
              py={5}
            >
              <Text fontSize={16}>
                {calculateDistance(userLocation, [item.latitude, item.longitude])}m
              </Text>
            </Box>
          </Flex>
        </Pressable>
      );

  const userLatitude = -8.063169;
  const userLongitude = -34.871139;

  return (
    <Box flex={1}>
      <Box px={5} py={2}>
        <Search />
      </Box>
      <FlatList
        data={parkingPlaceData}
        renderItem={renderItem([userLatitude, userLongitude])}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={<Divider my={4} w="80%" mx="auto"></Divider>}
        style={{
          marginBottom: 10,
        }}
      />
    </Box>
  );
}
