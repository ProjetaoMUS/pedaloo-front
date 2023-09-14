import { Box, Center, Text, IconButton, Image, Avatar, Button, Input, VStack, FormControl } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useState } from 'react';
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

    const saveChanges = () => {
    	setName(iName);
    	setEmail(iEmail);

    	// TODO: Update user data in server
    }

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
			<Box h="11%" alignItems="center" justifyContent="flex-end">
				<Text fontSize={16} color='#121826'>My Account</Text>
			</Box>

			<Center h="28%">
                <Avatar size="xl" p="1" bg="#FFD9AF">
                    <Image source={avatarFallback} resizeMode="contain" alt="Avatar Fallback" />
                    <Avatar.Badge bg="#928FFF" alignItems="center" justifyContent="center" size={35}>
                    	<Image source={cameraIcon} resizeMode="contain" alt="Edit profile picture" size={21} />
                    </Avatar.Badge>
                </Avatar>
			</Center>

			<VStack h="45%" w="85%" space={4}>
				<FormControl bg="white" borderRadius={20} py={2} px={4}>
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
					/>
				</FormControl>

				<FormControl bg="white" borderRadius={20} py={2} px={4}>
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
					/>
				</FormControl>

				<FormControl bg="white" borderRadius={20} py={2} px={4}>
					<FormControl.Label mb={-1} _text={{
						color: "#8F94A3",
						fontSize: 12
					}}>
						Phone Number
					</FormControl.Label>
					<Input type="name" variant="unstyled" value="+23408146185683" px={0} />
				</FormControl>
			</VStack>

			<Center flex="1" w="100%">
				<Button
					w="83%" py={4}
					rounded="full"
					bg="#E9E9FF"
					_text={{
						color: "#4A44C6",
						fontSize: 14,
						fontWeight: "bold"
					}}
					_pressed={{
						bg: "#e6e6ff",
						_text: { color: "#6863cf" }
					}}
					onPress={saveChanges}
				>
					Save
				</Button>
			</Center>

			<IconButton
				position="absolute"
				top="10"
				left="7"
				onPress={() => navigation.navigate("ProfileHome")}
				borderRadius="full"
				bg="white"
				_pressed={{
					bg: "muted.200"
				}}
				icon={<Ionicons name="chevron-back-outline" color="#1218" size={20} />}
			/>
		</LinearGradient>
	);
}