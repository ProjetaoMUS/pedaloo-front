import { Box, Center, Text, IconButton, Image, Avatar, Button, Input, VStack, FormControl } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useState, useEffect } from 'react';
import { useProfile } from '../../contexts/profile';

const avatarFallback = require('../../../assets/avatar.png');
const cameraIcon = require('../../../assets/camera-icon.png');

export function Account({ navigation }) {
    const {
        name, setName,
        email, setEmail
    } = useProfile();

    const [iName, setIName] = useState(name);
    const [iEmail, setIEmail] = useState(email);

    const [enableBtn, setEnableBtn] = useState(false);

    const saveChanges = () => {
    	setName(iName);
    	setEmail(iEmail);

    	// TODO: Update user data in server

    	navigation.navigate('ProfileHome');
    }

    useEffect(() => {
    	setEnableBtn(
    		name  !== iName ||
    		email !== iEmail
		);

    }, [iName, iEmail]);

	return (
        <Center flex={1} bg="white">
			<Center h="28%">
                <Avatar size="xl" p="1" bg="#EEFC79">
                    <Image source={avatarFallback} resizeMode="contain" alt="Avatar Fallback" />
                    {/*
                    <Avatar.Badge bg="#928FFF" alignItems="center" justifyContent="center" size={35}>
                    	<Image source={cameraIcon} resizeMode="contain" alt="Edit profile picture" size={21} />
                    </Avatar.Badge>
                    */}
                </Avatar>
			</Center>

			<VStack h="57%" w="100%" px={12} space={3}>
				<FormControl>
					<FormControl.Label mb={-1} _text={{
						color: "#8F94A3",
						fontSize: 12
					}}>
						Name
					</FormControl.Label>
					<Input
						type="text"
						variant="unstyled"
						value={iName}
						onChangeText={setIName}
						px={0}
						color="#003714"
						fontSize="md"
					/>
				</FormControl>

				<FormControl>
					<FormControl.Label mb={-1} _text={{
						color: "#8F94A3",
						fontSize: 12
					}}>
						Email
					</FormControl.Label>
					<Input
						type="email"
						variant="unstyled"
						value={iEmail}
						onChangeText={setIEmail}
						px={0}
						color="#003714"
						fontSize="md"
					/>
				</FormControl>

				<FormControl>
					<FormControl.Label mb={-1} _text={{
						color: "#8F94A3",
						fontSize: 12
					}}>
						Phone Number
					</FormControl.Label>
					<Input
						type="name"
						variant="unstyled"
						value="+23408146185683"
						px={0}
						color="#003714"
						fontSize="md"
					/>
				</FormControl>

				<FormControl>
					<FormControl.Label mb={-1} _text={{
						color: "#8F94A3",
						fontSize: 12
					}}>
						CPF
					</FormControl.Label>
					<Input
						type="name"
						variant="unstyled"
						value="000.000.000-00"
						px={0}
						color="#003714"
						fontSize="md"
					/>
				</FormControl>
			</VStack>

			<Center flex="1" w="100%">
				<Button
					w="83%" py={4}
					rounded="full"
					bg="#32C000"
					_text={{
						color: "white",
						fontSize: 14,
						fontWeight: "bold"
					}}
					_pressed={{
						bg: "#299900",
						_text: { color: "#muted.200" }
					}}
					onPress={saveChanges}
					/*isDisabled={!enableBtn}*/
				>
					Save
				</Button>
			</Center>
		</Center>
	);
}