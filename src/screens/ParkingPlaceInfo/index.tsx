import {
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  HStack,
  IconButton,
  Image,
  ScrollView,
  Skeleton,
  Spinner,
  Text,
} from "native-base";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

import { CarouselImage } from "./carousel-image";

export function ParkingPlaceInfo({ navigation, route }) {
  const { parkingPlace } = route.params;
  const [dailyRate, setDailyRate] = useState("");
  const [guests, setGuests] = useState("1");
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
      console.log(
        "Reserva enviada: Valor da diária:",
        dailyRate,
        "Número de Hóspedes:",
        guests
      );
    }, 2000);
  };

  /*
   * Seria ideal que o atributo `images` de `parkingPlace` fosse uma lista de uris de imagens.
   * Assim, o conteúdo do carrosel seria `parkingPlace.images
   */
  const carouselContent = [
    {
      title: "Titulo do Conteúdo 1",
      description:
        "Descrição completa do Local 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1520370047458-7b6072ea51e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80",
    },
    {
      title: "Titulo do Conteúdo 2",
      description:
        "Descrição completa do Local 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://plus.unsplash.com/premium_photo-1658526992090-e15722e684c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    },
    {
      title: "Titulo do Conteúdo 3",
      description:
        "Descrição completa do Local 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1597041505347-26a27f87b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1914&q=80",
    },
  ];

  const latitudeDaLocacao = -8.0524;
  const longitudeDaLocacao = -34.9454;

  const handleCarouselItemChange = (index) => {
    setCurrentContentIndex(index);
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Center py={6}>
          <Text fontSize="xl" bold>{parkingPlace.name}</Text>
          <Text fontSize="sm" color="muted.500">{parkingPlace.address}</Text>

          <IconButton
            position="absolute"
            top="50%"
            left={0}
            borderRadius="full"
            onPress={navigation.goBack}
            icon={
              <Ionicons name="chevron-back" color="black" size={27} />
            }
          />
        </Center>

        <Divider w="100%" />

        <Center h={300} mb={2}>
          <FlatList
            data={carouselContent}
            horizontal
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CarouselImage source={item.image} rating={parkingPlace.rating} />
            )}
            onMomentumScrollEnd={(e) => {
              const contentOffsetX = e.nativeEvent.contentOffset.x;
              const currentIndex = Math.floor(contentOffsetX / 300);
              setCurrentContentIndex(currentIndex);
            }}
          />
        </Center>

        <Divider w="100%" />

        <Box flex={1} px={6} py={3}>
          <HStack justifyContent="space-between">
            <Box>
              <HStack>
                <Text fontSize="lg" bold>
                  {/* TODO: Replace typescript constants with variables */}
                  <Text underline>Horas</Text>: <Text color="success.500">{"Aberto"}</Text>
                  <Text bold>⋅ Fecha à {"00:00"}</Text>
                </Text>
              </HStack>
              <Text fontSize="lg" color="muted.400">4 vagas disponiveis</Text>
            </Box>

            {/* TODO: Define what in the name of Richard Stallman this button is supposed to do */}
            <IconButton
              borderRadius="full"
              onPress={() => console.log("Press")}
              icon={
                <Ionicons name="arrow-forward" color="black" size={25} />
              }
            />
          </HStack>
        </Box>

        <Divider w="100%" />

        {/* TODO: Find out just what the hell the designers wanted to put here in the first place */}
        <Box px={6} py={2} mb="100px">
          <Text fontSize="2xl" pt={1} mb={2} bold>
            Sobre o Local
          </Text>
          <Text fontSize="sm" color="muted.500">
            {parkingPlace.description}
          </Text>
        </Box>

        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
      </ScrollView>

      <Box
        position="absolute"
        alignItems="center"
        bottom={4}
        left={0}
        right={0}
      >
        <Button
          w="90%" py={5}
          rounded="full"
          bg="#32C000"
          _text={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold"
          }}
          _pressed={{
            bg: "#299900",
            _text: { color: "muted.200" }
          }}
          onPress={() => navigation.navigate("Reservation", { parkingPlace: parkingPlace })}
        >
          Reservar
        </Button>
      </Box>
    </>
  );
}
