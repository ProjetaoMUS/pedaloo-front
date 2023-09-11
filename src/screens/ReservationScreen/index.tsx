import React, { useState } from 'react';
import { View, Text, Spinner, Button, ScrollView, Box, Center, FlatList, Image } from 'native-base';
import MapView, { Marker } from 'react-native-maps';

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
      <View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            data={carouselContent}
            horizontal
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  width: 300,
                  height: 200,
                  padding: 16,
                  borderRadius: 8,
                  marginBottom: 24,
                  marginLeft: 16,
                }}
              >
                 <Image
                  source={{uri:item.image}}
                  style={{ width: '100%', height: '100%', borderRadius: 8 }}
                />
              </View>
            )}
            onMomentumScrollEnd={(e) => {
              const contentOffsetX = e.nativeEvent.contentOffset.x;
              const currentIndex = Math.floor(contentOffsetX / 300);
              setCurrentContentIndex(currentIndex);
            }}
          />
        </View>

        <View
          style={{
            marginLeft: 16,
            marginRight: 16,
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 24, color: 'black', paddingTop:2 }}>Sorveteria Gelada</Text>
          <Text style={{ fontSize: 16, color: 'gray', marginBottom: 16 }}>Pernambuco, Brasil</Text>

          {/* Seção "Sobre o Local" */}
          <View>
            <Text style={{ fontSize: 24, color: 'black', marginBottom: 5, marginTop: 16,paddingTop:2 }}>Sobre o Local</Text>
            <Text style={{ fontSize: 16, color: 'gray', marginBottom: 16 }}>
              Descrição completa do Local: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, nunc eu lobortis laoreet, lectus elit consequat velit, at facilisis nunc ex in justo.
            </Text>
          </View>

          <MapView
            style={{ height: 200, marginBottom: 24 }} // Mais espaço abaixo do mapa
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

          <Box padding={4} marginBottom={4}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Text style={{ fontSize: 24, color: 'black', paddingTop:2 }}>R$ 5,00</Text>
                <Text style={{ fontSize: 16, color: 'black' }}>Aberto todos os dias</Text>
              </Box>
              <Button
                colorScheme="dark"
                color="gray"
                borderRadius={16}
                height={44}
                width={120}
                backgroundColor="gray.700"
                onPress={handleReservationSubmit}
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
        </View>
      </View>
    </ScrollView>
  );
}
