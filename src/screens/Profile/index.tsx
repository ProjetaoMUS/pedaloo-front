import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { Center, Box, Text, Pressable, VStack, HStack, Button, Avatar, Image, IconButton } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getHeaderTitle } from '@react-navigation/elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Account } from '../Account';
import { Contact } from '../Contact';
import { Help } from '../Help';
import { Settings } from '../Settings';

import { ProfileProvider, useProfile } from '../../contexts/profile';
import { getUserData } from '../../api/user-data';

const MOCK_USER_ID = 1

const avatarFallback = require('../../../assets/avatar.png');
const Stack = createStackNavigator();

const ProfilePageHeader = ({ navigation, route, options, back }) => {
    const title = getHeaderTitle(options, route.name);

    return (
        <Center flexDiretion="row" w="100%" py={10} bg="white">
                {back &&
                    <IconButton
                        position="absolute"
                        left="5"
                        onPress={navigation.goBack}
                        borderRadius="full"
                        bg="#FAFBFF"
                        _pressed={{
                            bg: "muted.200"
                        }}
                        icon={<Ionicons name="chevron-back-outline" color="#121826" size={20} />}
                    />
                }

                <Text color="#003714" bold>{title}</Text>
        </Center>
    );
}

const ProfileScreenButton = ({ text, icon, onPress }) => {
    return (
        <Pressable w="80%" h="50px" flexDirection="row" alignItems="center" onPress={onPress}>
            <Center p={3} bg="#32C100" borderRadius={15}>
                {icon}
            </Center>
            <Text flex="1" fontSize={18} pl={5} color="#003714">{text}</Text>
            <Box w={6} h={6} mr={3}>
                <Ionicons name="chevron-forward-outline" color="#32C100" size={24} />
            </Box>
        </Pressable>
    )
}

const ProfileHome = ({ navigation }) => {
    const {
        name, setName,
        email, setEmail,
        setPhone, setTaxId
    } = useProfile();

    useEffect(() => {
        (async () => {
            const userData = await getUserData(MOCK_USER_ID);
            setName(userData.first_name);
            setEmail(userData.email);
            setPhone(userData.phone_number);
            setTaxId(userData.tax_id);
        })();

    }, []);

    return (
        <Center flex={1} bg="#32C100">
            <HStack h="35%" w="100%" px={9} pt={3} alignItems="center" space={4}>
                <Avatar size="xl" p="1" bg="#EEFC79">
                    <Image source={avatarFallback} resizeMode="contain" alt="Avatar Fallback" />
                </Avatar>

                <VStack>
                    <Text fontSize={18} color="#003714" bold>{name}</Text>
                    <Text fontSize={14} color="#003714">{email}</Text>
                </VStack>
            </HStack>

            <VStack bg="white" w="100%" flex="1" alignItems="center" space={3} pt={7} borderTopRadius={60}>
                    <ProfileScreenButton text="My Account"
                        icon={<Ionicons name="person" color="white" size={21} />}
                        onPress={() => navigation.navigate('My Account')}
                    />

                    <ProfileScreenButton text="Settings"
                        icon={<Ionicons name="settings" color="white" size={21} />}
                        onPress={() => navigation.navigate('Settings')}
                    />

                    <ProfileScreenButton text="Help"
                        icon={<Ionicons name="help-circle" color="white" size={21} />}
                        onPress={() => navigation.navigate('Help')}
                    />
            </VStack>
        </Center>
    );
}

export function Profile({ navigation }) {
    return (
        <ProfileProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator
                    initialRouteName="ProfileHome"
                    screenOptions={{
                        header: ProfilePageHeader
                    }}
                >
                    <Stack.Screen name="ProfileHome" component={ProfileHome} options={{ headerShown: false }}/>
                    <Stack.Screen name="My Account" component={Account} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="Help" component={Help} />
                </Stack.Navigator>
            </NavigationContainer>
        </ProfileProvider>
    );
}

