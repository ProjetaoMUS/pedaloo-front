import { Center, Box, Text, Pressable } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ProfileMenuButton = ({ text, icon, onPress }) => {
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