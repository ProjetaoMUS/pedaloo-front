import { Box, Center, Flex, Heading, Image, Text } from "native-base";
import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

const qrCode = require('../../../assets/qr_code.png');

export function BookingDetails() {
    return (
        <Box bg="white" height={1000}>
            <Center>
                <Flex mt="20" alignItems="center" flexDirection="row">
                    <Heading ml="15">
                        <Ionicons name="arrow-back" size={30} color="black" />
                        <Flex mt="20" mr="30" alignItems="center" flexDirection="column">
                            <Text fontSize="24px">Estacionamento Moinho</Text>
                            <Text color="muted.500" fontSize="16px">
                                R. de São Jorge, 240 - Recife, PE.
                            </Text>
                        </Flex>
                    </Heading>
                </Flex>
            </Center>
            <Box mt="10" ml='5' mr="5" borderBottomWidth={1} borderBottomColor="gray.300" paddingBottom="5">
                <Box ml="3" mr="20">
                    <Text fontSize="lg" bold>
                        Data e hora de agendamento
                    </Text>
                    <Flex alignItems="center" flexDirection="row">
                        <Ionicons name="calendar-outline" size={22} mr={3} color="black" />
                        <Text fontSize="lg">
                            21 de setembro • <Text color="muted.500">13:00 - 19:30</Text>
                        </Text>
                    </Flex>
                </Box>
            </Box>
            <Box mt="5" ml='5' mr="5" borderBottomWidth={1} borderBottomColor="gray.300" paddingBottom="5">
                <Box ml="3" mr="20">
                    <Text fontSize="lg" bold>
                        Forma de pagamento
                    </Text>
                    <Flex alignItems="center" flexDirection="row">
                        <Ionicons name="card-outline" size={22} color="black" />
                        <Text fontSize="lg">
                            Cartão de crédito
                        </Text>
                    </Flex>
                </Box>
            </Box>
            <Center>
                <Flex mt="7" alignItems="center" flexDirection="row">
                    <Heading>
                        <Flex alignItems="center" flexDirection="column">
                            <Flex mb="5">
                                <Text bold fontSize="24px">Código: 67HK02</Text>
                            </Flex>
                            <Image size="2xl" source={qrCode} />
                        </Flex>
                    </Heading>
                </Flex>
            </Center>
        </Box>
    );
}