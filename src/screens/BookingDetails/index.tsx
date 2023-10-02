import { Box, Button, Center, Container, Flex, Heading, Text } from "native-base";
import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

export function BookingDetails() {
    return (
        <React.Fragment>
            <Center>
                <Flex mt="20" alignItems="center" flexDirection="row">
                    <Ionicons name="arrow-back" size={30} color="black" />
                    <Heading ml="15" size="xl">
                        <Text>Estacionamento Moinho</Text>
                    </Heading>
                </Flex>
            </Center>
            <Box bg="white" mt="10" style={{borderRadius: 20}} ml='5' mr="5">
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
        </React.Fragment>
    );
}