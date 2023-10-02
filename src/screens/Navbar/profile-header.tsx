import { Center, Text, IconButton } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getHeaderTitle } from '@react-navigation/elements';

export const ProfileStackHeader = ({ navigation, route, options, back }) => {
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