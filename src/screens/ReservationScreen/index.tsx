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
  View,
} from "native-base";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stars = ({ rating }) => {
  let starList = [];
  let i = 0;

  for (; i < rating; i++)
    starList.push("star");

  for (; i < 5; i++)
    starList.push("star-outline");

  return (
    <>
      { starList.map((type, index) => (
          <Ionicons name={type} color="white" size={21} key={index} />
      ))}
    </>
  );
}

const CarouselImage = ({ source, rating }) => {
  const screenWidth = Dimensions.get("window").width;
  const [imgIsLoading, setImgIsLoading] = useState(true);

  return (
    <Box flex={1} w={screenWidth} p={5}>
      {imgIsLoading && <Skeleton w="100%" h="100%" borderRadius={12} />}
      <Image
        source={{ uri: source }}
        borderRadius={12}
        w="100%"
        h="100%"
        alt="Imagem do local"
        onLoad={() => setImgIsLoading(false)}
        fallbackElement={<Skeleton w="100%" h="100%" borderRadius={12} />}
      />

      <Box
        position="absolute"
        left={9}
        bottom={8}
        flexDirection="row"
      >
        <Stars rating={rating} />
      </Box>
    </Box>
  );
};

export function ReservationScreen({ navigation, route }) {
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

  // Conteúdo de exemplo para o carrossel
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
    <ScrollView style={{ flex: 1 }}>
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

      {/*
      <Box w="50%" px={6} py={2}>
        <Text fontSize="lg" bold>
          {parkingPlace.name}
        </Text>
        <Text fontSize="sm" color="muted.500">
          Recife, Brasil
        </Text>
        <Text fontSize="sm" underline>
          2 comentários
        </Text>
      </Box>
      */}

      <Divider w="100%" />

      <Box flex={1} px={6} py={3}>
        <HStack justifyContent="space-between">
          <Box>
            <HStack>
              <Text fontSize="lg" bold>Horas: </Text>
              <Text fontSize="lg" color="success.500" bold>Aberto</Text>
              <Text fontSize="lg" bold>⋅ Fecha à </Text>
              <Text fontSize="lg" bold>00:00</Text>
            </HStack>
            <Text fontSize="lg" color="muted.400">4 vagas disponiveis</Text>
          </Box>

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

      <Box px={6} py={2} mb={6}>
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

      <IconButton
        position="absolute"
        top="0"
        right="0"
        borderRadius="full"
        onPress={() => navigation.navigate("Parking Places")}
        icon={
          <Ionicons name="close-circle-outline" color="#D9D9D9" size={35} />
        }
      />
    </ScrollView>
  );
}
