import { Text, View, FlatList, Image} from 'react-native';
import { Pressable } from 'native-base';
import { useState } from 'react';
import { ReservationScreen } from '../ReservationScreen';

import { styles } from './styles';

interface ParkingPlace {
  name: string;
  rating: number;
  distanceFromUser: number;
  costPerHour: number;
  parkingSpaces: number;
}

export function ParkingPlaces() {
  const original_data: ParkingPlace[] = [
    {
      name: 'Sorveteria Gelada',
      rating: 4.86,
      distanceFromUser: 50.0,
      costPerHour: 5.0,
      parkingSpaces: 1,
    },
    {
      name: 'Mercadinho Bom de Preço',
      rating: 4.66,
      distanceFromUser: 140.0,
      costPerHour: 4.0,
      parkingSpaces: 14,
    }, 
    {
      name: 'Padaria da Esquina',
      rating: 4.64,
      distanceFromUser: 200.0,
      costPerHour: 3.5,
      parkingSpaces: 6,
    },
    {
      name: 'Restaurante Sabor Caseiro',
      rating: 4.28,
      distanceFromUser: 75.0,
      costPerHour: 6.0,
      parkingSpaces: 8,
    },
    {
      name: 'Cafeteria Aconchegante',
      rating: 4.93,
      distanceFromUser: 90.0,
      costPerHour: 4.5,
      parkingSpaces: 3,
    },
    {
      name: 'Loja de Bicicletas BikeMania',
      rating: 4.75,
      distanceFromUser: 110.0,
      costPerHour: 3.0,
      parkingSpaces: 9,
    },
    {
      name: 'Bar do João',
      rating: 3.81,
      distanceFromUser: 160.0,
      costPerHour: 2.4,
      parkingSpaces: 5,
    },
    {
      name: 'Farmácia Saúde e Bem-estar',
      rating: 4.63,
      distanceFromUser: 180.0,
      costPerHour: 4.0,
      parkingSpaces: 4,
    },
    {
      name: 'Academia Fitness Plus',
      rating: 4.95,
      distanceFromUser: 210.0,
      costPerHour: 3.0,
      parkingSpaces: 10,
    },
    {
      name: 'Pet Shop Amigo Fiel',
      rating: 4.9,
      distanceFromUser: 120.0,
      costPerHour: 4.0,
      parkingSpaces: 3,
    },
  ];

  const [seeReservation, setSeeReservation] = useState(false);

  const renderItem = ({ item }: { item: ParkingPlace }) => (
      <View style={styles.item}>
        <Pressable onPress={() => { setSeeReservation(true) } }>
          {<Image source={{uri: 'https://plus.unsplash.com/premium_photo-1658526992090-e15722e684c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80', width:370, height: 100}}/>}
          <Text style={styles.name}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.rating}>Avaliação: {item.rating.toFixed(2)}/5  </Text>
            <Text style={styles.ratingStars}>{'\u2B50'.repeat(item.rating | 0) + '\u2606'.repeat((6 - item.rating) | 0)}</Text>
          </View>
          <Text style={styles.distance}>Distância: {item.distanceFromUser} metros</Text>
          <Text style={styles.cost}>Custo por hora: R${item.costPerHour.toFixed(2)}</Text>
          <Text style={item.parkingSpaces < 5 ? styles.parkingSpacesCritical : styles.parkingSpaces}>Vagas restantes: {item.parkingSpaces}</Text>
        </Pressable>
      </View>
  );

  if (seeReservation)
    return <ReservationScreen />

  return (
    <View style={{paddingBottom:30}}>
      <FlatList
        data={original_data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
   </View>
   );
};
