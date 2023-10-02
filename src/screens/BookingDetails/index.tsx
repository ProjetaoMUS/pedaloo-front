import {
    Box,
    Center,
    Flex,
    Heading,
    Image,
    Text,
    IconButton,
    HStack,
    Button,
    ScrollView,
    Divider,
} from "native-base";
import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

const qrCode = require('../../../assets/qr_code.png');

export function BookingDetails({ navigation }) {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <Center py={6} w="100%">
              <Text fontSize="xl" bold>Estacionamento Moinho</Text>
              <Text fontSize="sm" color="muted.500">R. de São Jorge, 240 - Recife, PE.</Text>

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

            <Box w="100%" px={8} py={3}>
                <Text fontSize="lg" bold>Data e hora de agendamento</Text>
                <HStack p={1} alignItems="center">
                    <Ionicons name="calendar-outline" color="black" size={29} />
                    <HStack flex={1} p={2}>
                        <Text bold>{"21 de setembro"} • </Text>
                        <Text color="muted.500" bold>{"13:00"} - {"19:00"}</Text>
                    </HStack>
                </HStack>
            </Box>

            <Divider w="100%" />

            <Box w="100%" px={8} py={3}>
                <Text fontSize="lg" bold>Forma de pagamento</Text>
                <HStack p={1} alignItems="center">
                    <Ionicons name="wallet-outline" color="black" size={29} />
                    <Text pl={2} bold>Cartão de crédito</Text>
                </HStack>
            </Box>

            <Divider w="100%" />

            <Center>
                <Flex mt="7" alignItems="center" flexDirection="row">
                    <Heading>
                        <Flex alignItems="center" flexDirection="column">
                            <Flex mb="5">
                                <Text bold fontSize="24px">Código: 67HK02</Text>
                            </Flex>
                            <Image size="2xl" source={qrCode} alt="" />
                        </Flex>
                    </Heading>
                </Flex>
            </Center>
      </ScrollView>
    );
}