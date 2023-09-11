import { Text, View, FlatList, Image} from 'react-native';
import { getPartnerLocations } from '../../api/partnerLocation'
import { Pressable } from 'native-base';
import { useState } from 'react';
import { ReservationScreen } from '../ReservationScreen';

import { styles } from './styles';
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
//Error fetching parking places: Axios Error: Network Error
export function ParkingPlaces() {
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

  const [seeReservation, setSeeReservation] = useState(false);
  
  const renderItem = (userLocation: number[]) => ({ item }: { item: ParkingPlace } ) => (
    <View style={styles.item}>
      <Pressable onPress={() => { setSeeReservation(true) } }>
        {<Image source={{uri: 'https://picsum.photos/300/100', width:300, height: 100}}/>}
        <Text style={styles.name}>{item.name}</Text>
        {/*<View style={{flexDirection: 'row'}}>
          <Text style={styles.rating}>Avaliação: {item.rating.toFixed(2)}/5  </Text>
          <Text style={styles.ratingStars}>{'\u2B50'.repeat(item.rating | 0) + '\u2606'.repeat((6 - item.rating) | 0)}</Text>
        </View>*/}
        <Text style={styles.distance}>Distância: {calculateDistance(userLocation, [item.latitude, item.longitude])} metros</Text>
        <Text style={styles.cost}>Custo por hora: R${item.price}</Text>
        <Text style={item.parking_spaces_count < 5 ? styles.parkingSpacesCritical : styles.parkingSpaces}>Vagas restantes: {item.parking_spaces_count}</Text>
      </Pressable>  
  </View>
  );

  if (seeReservation)
    return <ReservationScreen />

  const userLatitude = -8.063169;
  const userLongitude = -34.871139;
    
  return (
    <View style={{paddingBottom:130}}>
      <View style={{paddingVertical:30}}>
        <Search/>
      </View>
      <FlatList
        data={parkingPlaceData}
        renderItem={renderItem([userLatitude, userLongitude])}
        keyExtractor={(item) => item.name}
      />
   </View>
   );
};
