import React, { useState } from 'react';
import { Dimensions } from 'react-native'
import {
  View,
  Text,
  Spinner,
  Button,
  ScrollView,
  Box,
  Center,
  FlatList,
  Image,
  Divider,
  HStack,
  Skeleton
} from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarouselImage = ({ source }) => {
  const screenWidth = Dimensions.get('window').width
  const [imgIsLoading, setImgIsLoading] = useState(true);

  return (
    <>
      {imgIsLoading && <Skeleton w={screenWidth} h="100%" />}
      <Image
        source={{uri:source}}
        w={screenWidth}
        alt="Imagem do local"
        onLoad={() => setImgIsLoading(false)}
        fallbackElement={<Skeleton w={screenWidth} h="100%" />}
      />
    </>
  );
}

export function ReservationScreen({navigation}) {
  const [dailyRate, setDailyRate] = useState('');
  const [guests, setGuests] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const handleGuestsChange = (text) => {
    setGuests(text);
  };

  const handleReservationSubmit = () => {
    setIsLoading(true);

    // Simular um pedido de reserva para o servidor (substitua pelo código do servidor real)
    setTimeout(() => {
      setIsLoading(false);
      console.log('Reserva enviada: Valor da diária:', dailyRate, 'Número de Hóspedes:', guests);
    }, 2000);
  };

  // Conteúdo de exemplo para o carrossel
  const carouselContent = [
    {
      title: 'Titulo do Conteúdo 1',
      description: 'Descrição completa do Local 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1520370047458-7b6072ea51e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80'

    },
    {
      title: 'Titulo do Conteúdo 2',
      description: 'Descrição completa do Local 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://plus.unsplash.com/premium_photo-1658526992090-e15722e684c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'

    },
    {
      title: 'Titulo do Conteúdo 3',
      description: 'Descrição completa do Local 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1597041505347-26a27f87b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1914&q=80'
    },
  ];

  const latitudeDaLocacao = -8.0524;
  const longitudeDaLocacao = -34.9454;

  const handleCarouselItemChange = (index) => {
    setCurrentContentIndex(index);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Center h={250} mb={2}>
        <FlatList
          data={carouselContent}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CarouselImage source={item.image} />
          )}
          onMomentumScrollEnd={(e) => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const currentIndex = Math.floor(contentOffsetX / 300);
            setCurrentContentIndex(currentIndex);
          }}
        />
      </Center>

      <HStack px={6} py={2}>
        <Box w="50%">
          <Text fontSize="lg" bold>Sorveteria Gelada</Text>
          <Text fontSize="sm" color="muted.500">Pernambuco, Brasil</Text>
          <Text fontSize="sm" underline>2 comentários</Text>
        </Box>
        <Box
          w="50%"
          py={1}
          flexDirection="row" 
          alignItems="flex-start"
          justifyContent="flex-end"
        >
          <Ionicons name="star" color="black" size={15} />
          <Text fontSize="xs" ml={1} bold>4,85</Text>
        </Box>
      </HStack>

      <Divider w="91%" mx="auto" />

      <Box px={8} py={3} mb={6}>
        <Text fontSize="xl" pt={1} mb={2} bold>Sobre o Local</Text>
        <Text fontSize="sm" color="muted.500">
          Descrição completa do Local: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, nunc eu lobortis laoreet, lectus elit consequat velit, at facilisis nunc ex in justo.
        </Text>
      </Box>

      <Divider w="91%" mx="auto" />

      <Box px={8} mb={50}>
        <Text fontSize="xl" py={5} bold>Localização</Text>
        <Box px={1}>
        <MapView
          style={{ height: 200, borderRadius: 17 }}
          initialRegion={{
            latitude: latitudeDaLocacao,
            longitude: longitudeDaLocacao,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitudeDaLocacao,
              longitude: longitudeDaLocacao,
            }}
            title="Localização da Locação"
          />
        </MapView>

        <Text mt={5}>Av. Fulano, 145, Recife, Pernambuco, Brasil </Text>
        <Text color="muted.500" my={2}>Lorem ipsum dolor sit amet consectetur. Vel semper elit tellus quisque. Mauris in quis molestie adipiscing ullamcorper suspendisse scelerisque. Nisl faucibus in maecenas purus vitae ut proin pharetra. Ut lectus cursus non eget libero eu. </Text>
        <Text underline>Saiba mais</Text>
        </Box>
      </Box>

      <Box py={4} px={7} bg="muted.300">
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Text fontSize="2xl" mb={-2}>
              R$ 5,00 <Text sub>por bicicleta</Text>
            </Text>
            <Text fontSize="md">Aberto todos os dias</Text>
          </Box>
          <Button
            borderRadius={16}
            height="90%"
            width="40%"
            onPress={handleReservationSubmit}
            bg="black"
            _pressed={{
              bg: "gray.800",
              _text: { color: "muted.100" }
            }}
          >
            Reservar
          </Button>
        </View>
      </Box>

        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
    </ScrollView>
  );
}
