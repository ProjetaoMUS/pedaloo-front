import { useEffect } from 'react';
import { Center, Text, VStack, HStack, Avatar, Image } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ProfileMenuButton } from './menu-button';
import { useProfile } from '../../contexts/profile';
import { getUserData } from '../../api/user-data';

const avatarFallback = require('../../../assets/avatar.png');

export const Profile = ({ navigation }) => {
    const { name, email, setPhone, initProfile } = useProfile();

    useEffect(() => {
        (async () => {
            const userData = await getUserData();
            initProfile(
                userData.id,
                userData.first_name,
                userData.email,
                userData.phone_number,
                userData.tax_id
            );
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

            <VStack bg="white" w="100%" flex="1" alignItems="center" space={3} pt={7} borderTopRadius={40}>
                    <ProfileMenuButton text="Minha Conta"
                        icon={<Ionicons name="person" color="white" size={21} />}
                        onPress={() => navigation.navigate('Minha Conta')}
                    />

                    <ProfileMenuButton text="Configurações"
                        icon={<Ionicons name="settings" color="white" size={21} />}
                        onPress={() => navigation.navigate('Configurações')}
                    />

                    <ProfileMenuButton text="Suporte"
                        icon={<Ionicons name="help-circle" color="white" size={21} />}
                        onPress={() => navigation.navigate('Suporte')}
                    />
            </VStack>
        </Center>
    );
}