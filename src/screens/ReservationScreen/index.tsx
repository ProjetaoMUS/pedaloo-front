import React, { useState } from 'react';
import { View, Text, Spinner, Button, ScrollView, HStack, Box, Center } from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';

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
      description: 'Descrição completa do Local: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, nunc eu lobortis laoreet, lectus elit consequat velit, at facilisis nunc ex in justo.',
    },
    {
      title: 'Título do Conteúdo 2',
      description: 'Descrição completa do Local: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, nunc eu lobortis laoreet, lectus elit consequat velit, at facilisis nunc ex in justo.',
    },
    {
      title: 'Título do Conteúdo 3',
      description: 'Descrição completa do Local: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, nunc eu lobortis laoreet, lectus elit consequat velit, at facilisis nunc ex in justo.',
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
        <Carousel
          data={carouselContent}
          renderItem={({ item }) => (
            <Box
              width={300}
              height={200}
              backgroundColor="gray.500"
              padding={4}
            >
              <Text fontSize="xl" marginBottom={2}>
                {item.title}
              </Text>
              <Text marginBottom={4}>
                {item.description}
              </Text>
            </Box>
          )}
          sliderWidth={300} // Largura do carrossel
          itemWidth={300} // Largura de cada item do carrossel
          onSnapToItem={handleCarouselItemChange} // Chamado quando um item é focalizado
        />

        {/* Seção "Sobre o Local" e Descrição */}
        <Text fontSize="xl" marginBottom={2} color="white">
          Sobre o Local
        </Text>
        <Text fontSize="md" marginBottom={2} color="white">
          Descrição completa do Local: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, nunc eu lobortis laoreet, lectus elit consequat velit, at facilisis nunc ex in justo.
        </Text>

        <View paddingX={4} paddingY={2}>
          <Text fontSize="xl" marginBottom={2}>
            Nome da Locação
          </Text>
          <Text fontSize="md" color="gray.500" marginBottom={2}>
            Cidade, Estado
          </Text>

          {/* Mapa da Locação */}
          <MapView
            style={{ height: 200, marginBottom: 4 }}
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

          {/* Box com Valor da Diária e Botão Reservar */}
          <Box backgroundColor="gray.500" padding={4} marginBottom={4}>
            <HStack alignItems="center" justifyContent="space-between">
              <Box>
                <Text fontSize="xl" color="gray.700">
                  RS$ 150,00
                </Text>
                <Text fontSize="md" color="gray.700">
                  Aberto todos os dias
                </Text>
              </Box>
              <Button
                colorScheme="dark"
                color="gray.900"
                backgroundColor="gray.700" // Cor mais escura para o botão Reservar
                onPress={handleReservationSubmit}
              >
                Reservar
              </Button>
            </HStack>
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
