import * as React from 'react';
import { Center, Box, Text, Pressable, VStack, HStack, Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreenButton = ({ text, icon }) => {
    return (
        <Pressable w="80%" h="50px" flexDirection="row" alignItems="center">
            <Center p={3} bg="#43F6B1" borderRadius={15}>
                {icon}
            </Center>
            <Text flex="1" fontSize={20} pl={5} color="#003714">{text}</Text>
            <Box w={6} h={6} mr={3}>
                <Ionicons name="chevron-forward-outline" color="#43F6B1" size={24} />
            </Box>
        </Pressable>
    )
}

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
            <HStack h="10%" space="35%">
                <Button variant="link" _text={{ fontSize: 14, color: "#003714" }}>My Profile</Button>
                <Button variant="link" _text={{ fontSize: 14, color: "#003714" }}>Edit Profile</Button>
            </HStack>
            
            <Box h="20%">
                <Text fontSize={26} bold>Picture and name/email</Text>
            </Box>

            <VStack bg="white" w="100%" flex="1" alignItems="center" space={4} pt={7} borderTopRadius={60}>
                <ProfileScreenButton text="My Account"
                    icon={<Ionicons name="person" color="white" size={23} />} />

                <ProfileScreenButton text="Configurations"
                    icon={<Ionicons name="settings" color="white" size={23} />} />

                <ProfileScreenButton text="Help"
                    icon={<Ionicons name="help-circle" color="white" size={23} />} />

                <ProfileScreenButton text="Contact"
                    icon={<Ionicons name="call" color="white" size={23} />} />
            </VStack>
        </LinearGradient>
    );
}

