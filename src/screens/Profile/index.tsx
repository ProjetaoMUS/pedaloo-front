import * as React from 'react';
import { Box, Text, VStack } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export function Profile({ navigation }) {
    return (
        <LinearGradient
            colors={['#32FC65', '#43F6B1']}
            start={[0.2, 0]}
            end={[1, 0.25]}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Box h="10%">
                <Text fontSize={26}>Profile Buttons</Text>
            </Box>
            
            <Box h="20%">
                <Text fontSize={26} bold>Picture and name/email</Text>
            </Box>

            <VStack bg="white" w="100%" flex="1" alignItems="center" space={4} pt={7} borderTopRadius={60}>
                <Text fontSize={26} bold>More Options</Text>
            </VStack>
        </LinearGradient>
    );
}

