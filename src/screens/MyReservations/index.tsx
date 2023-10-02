import { Box, Button, Container, Flex, Heading, Image, Text, FlatList } from "native-base";
import React, { useState, useEffect } from "react";
import { getPartnerLocations } from "../../api/partnerLocation";

import Carousel from 'react-native-snap-carousel';
import Ionicons from "react-native-vector-icons/Ionicons";

const carouselData = [
    'https://blog.urbansystems.com.br/wp-content/uploads/2021/06/T157_02.png',
    'https://cdn.progresso.com.br/upload/dn_arquivo/2023/06/recife-2023-06-21-at-142701-1.jpeg'
];

const renderItem = ({ item }) => {
    return (
        <Box h={200} bg="gray.400" overflow="hidden">
            <Image
                source={{uri: item}}
                alt="Imagem do local"
                w="100%"
                h="100%"
            />
            <Box
                position="absolute"
                bg="muted.200:alpha.40"
                py={1}
                px={2}
                borderBottomRightRadius={10}
                flexDirection="row"
                alignItems="center"
                _text={{
                    fontSize: 12,
                }}
            >
            <Ionicons name="star" color="black" /> 5
            </Box>
        </Box>
    );
  };

export function MyReservations() {
    const [parkingPlaceData, setParkingPlaceData] = useState([]);

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

    const [isActivePressed, setIsActivePressed] = useState(false);
    const [isClosedPressed, setIsClosedPressed] = useState(false);
  
    const handleActivePress = () => {
      setIsActivePressed(!isActivePressed);
      setIsClosedPressed(false);
    };
  
    const handleClosedPress = () => {
      setIsClosedPressed(!isClosedPressed);
      setIsActivePressed(false);
    };

    return (
        <React.Fragment>
            <Flex>
                <Container>
                    <Heading mt="20" ml="7" size="2xl">
                        Minhas Reservas
                    </Heading>
                    <Flex mt="10" ml="10" direction="row">
                        <Button onPress={handleActivePress} colorScheme={isActivePressed ? 'green' : 'black'} variant={isActivePressed ? 'solid' : 'ghost'} rounded="full" mr="10" size="lg"><Text color={isActivePressed ? 'white' : 'black'}>Ativas</Text></Button>
                        <Button onPress={handleClosedPress} colorScheme={isClosedPressed ? 'green' : 'black'} variant={isClosedPressed ? 'solid' : 'ghost'} rounded="full" size="lg"><Text color={isClosedPressed ? 'white' : 'black'}>Encerradas</Text></Button>
                    </Flex>
                </Container>
            </Flex>
            <FlatList
                data={parkingPlaceData}
                renderItem={() => (
                    <Box bg="white" mt="10" style={{borderRadius: 20}} ml='5' mr="5">
                        <Carousel
                            data={carouselData}
                            renderItem={renderItem}
                            sliderWidth={372}
                            itemWidth={400}
                            contentContainerCustomStyle={{ paddingHorizontal: 0 }}
                        />
                        <Box px={2} py={3} >
                            <Flex alignItems="center" flexDirection="row">
                                <Box ml="3" mr="20">
                                    <Text fontSize="lg" bold>
                                        Estacionamento Moinho
                                    </Text>
                                    <Text color="muted.500">
                                        R. de São Jorge, 240 - Recife, PE.
                                    </Text>
                                    <Text color="muted.500">R$5 por hora</Text>
                                </Box>
                                <Ionicons name="arrow-forward" size={32} color="black" />
                            </Flex>
                        </Box>
                    </Box>
                )}
                keyExtractor={(item) => item.name}
            />
        </React.Fragment>
    );
}