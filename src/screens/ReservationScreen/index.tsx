import React, { useState } from 'react';
import { View, Text, Spinner, Button, ScrollView, Box, Center, FlatList } from 'native-base';
import MapView, { Marker } from 'react-native-maps';

export function ReservationScreen() {
  const [dailyRate, setDailyRate] = useState(''); // Campo para o valor da diária
  const [guests, setGuests] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0); // Índice do conteúdo atual

  const handleDailyRateChange = (text) => {
    setDailyRate(text);
  };

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
      title: 'Título do Conteúdo 1',
      description: 'Descrição completa do Local 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Título do Conteúdo 2',
      description: 'Descrição completa do Local 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Título do Conteúdo 3',
      description: 'Descrição completa do Local 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const latitudeDaLocacao = -23.5505;
  const longitudeDaLocacao = -46.6333;

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
                  backgroundColor: 'gray',
                  padding: 16,
              
                  marginBottom: 24, // Mais espaço entre os itens do carrossel
                  marginLeft: 16,
                }}
              >
                <Text style={{ fontSize: 24, marginTop: 8, paddingTop:2 }}>{item.title}</Text>
                <Text style={{ color: 'white', marginTop: 8 }}>{item.description}</Text>
              </View>
            )}
            onMomentumScrollEnd={(e) => {
              const contentOffsetX = e.nativeEvent.contentOffset.x;
              const currentIndex = Math.floor(contentOffsetX / 300); // 300 é a largura de cada item do carrossel
              setCurrentContentIndex(currentIndex);
            }}
          />
        </View>

        <View
          style={{
            marginLeft: 16,
            marginRight: 16,
            marginBottom: 24, // Mais espaço abaixo dos itens
          }}
        >
          <Text style={{ fontSize: 24, color: 'white', marginBottom: 16, marginTop: 16,paddingTop:2 }}>Nome da Locação</Text>
          <Text style={{ fontSize: 16, color: 'gray', marginBottom: 16 }}>Cidade, Estado</Text>

          {/* Seção "Sobre o Local" */}
          <View>
            <Text style={{ fontSize: 24, color: 'white', marginBottom: 16, marginTop: 16,paddingTop:2 }}>Sobre o Local</Text>
            <Text style={{ fontSize: 16, color: 'white', marginBottom: 16 }}>
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

          <Box backgroundColor="gray.700" padding={4} marginBottom={4}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Text style={{ fontSize: 24, color: 'gray', paddingTop:2 }}>RS$ 150,00</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>Aberto todos os dias</Text>
              </Box>
              <Button
                colorScheme="dark"
                color="gray.900"
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
