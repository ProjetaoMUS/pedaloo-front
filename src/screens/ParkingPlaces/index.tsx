import { useState, useEffect } from 'react';
import { Text, View, FlatList, Image} from 'react-native';

import { styles } from './styles';

interface ParkingPlace {
  name: string;
  rating: number;
  distance_from_user: number;
  cost_per_hour: number;
  parking_spaces: number;
}

export function ParkingPlaces() {
  const original_data: ParkingPlace[] = [
    {
      name: 'Sorveteria Gelada',
      rating: 4.86,
      distance_from_user: 50.0,
      cost_per_hour: 5.0,
      parking_spaces: 1,
    },
    {
      name: 'Mercadinho Bom de Preço',
      rating: 4.66,
      distance_from_user: 140.0,
      cost_per_hour: 4.0,
      parking_spaces: 14,
    },
    {
      name: 'Padaria da Esquina',
      rating: 4.64,
      distance_from_user: 200.0,
      cost_per_hour: 3.5,
      parking_spaces: 6,
    },
    {
      name: 'Restaurante Sabor Caseiro',
      rating: 4.28,
      distance_from_user: 75.0,
      cost_per_hour: 6.0,
      parking_spaces: 8,
    },
    {
      name: 'Cafeteria Aconchegante',
      rating: 4.93,
      distance_from_user: 90.0,
      cost_per_hour: 4.5,
      parking_spaces: 3,
    },
    {
      name: 'Loja de Bicicletas BikeMania',
      rating: 4.75,
      distance_from_user: 110.0,
      cost_per_hour: 3.0,
      parking_spaces: 9,
    },
    {
      name: 'Bar do João',
      rating: 3.81,
      distance_from_user: 160.0,
      cost_per_hour: 2.4,
      parking_spaces: 5,
    },
    {
      name: 'Farmácia Saúde e Bem-estar',
      rating: 4.63,
      distance_from_user: 180.0,
      cost_per_hour: 4.0,
      parking_spaces: 4,
    },
    {
      name: 'Academia Fitness Plus',
      rating: 4.95,
      distance_from_user: 210.0,
      cost_per_hour: 3.0,
      parking_spaces: 10,
    },
    {
      name: 'Pet Shop Amigo Fiel',
      rating: 4.9,
      distance_from_user: 120.0,
      cost_per_hour: 4.0,
      parking_spaces: 3,
    },
  ];


  const renderName = (name: string) => (
    <Text style={styles.name}>{name}</Text>
  );

  const renderRating = (rating: number) => (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.rating}>Avaliação: {rating.toFixed(2)}/5  </Text>
      <Text style={styles.ratingStars}>{'\u2B50'.repeat(rating | 0) + '\u2606'.repeat((6 - rating) | 0)}</Text>
    </View>
  );

  const renderDistance = (distance: number) => (
    <Text style={styles.distance}>Distância: {distance} metros</Text>
  );

  const renderCost = (cost: number) => (
    <Text style={styles.cost}>Custo por hora: R${cost.toFixed(2)}</Text>
  );

  const renderParkingSpaces = (spaces: number) => (
    <Text style={spaces < 5 ? styles.parkingSpacesCritical : styles.parkingSpaces}>Vagas restantes: {spaces}</Text>
  );

  const renderItem = ({ item }: { item: ParkingPlace }) => (
    <View style={styles.item}>
      {<Image source={{uri: 'https://picsum.photos/300/100', width:300, height: 100}}/>}
      {renderName(item.name)}
      {renderRating(item.rating)}
      {renderDistance(item.distance_from_user)}
      {renderCost(item.cost_per_hour)}
      {renderParkingSpaces(item.parking_spaces)}
    </View>
  );

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pontos Perto De Você</Text>
      </View>
      <FlatList
        data={original_data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
