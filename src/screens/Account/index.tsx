import { Box, Center, Text, IconButton, Image, Avatar, Button, Input, VStack, FormControl } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useState, useEffect } from 'react';
import { useProfile } from '../../contexts/profile';

const avatarFallback = require('../../../assets/avatar.png');
const cameraIcon = require('../../../assets/camera-icon.png');

export function Account({ navigation }) {
    const {
        name, setName,
        email, setEmail,
        phone, setPhone,
        taxId
    } = useProfile();

	const formattedTaxId = taxId.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    const [inEditMode, setInEditMode] = useState(false);
    const [iName, setIName] = useState(name);
    const [iEmail, setIEmail] = useState(email);
    const [iPhone, setIPhone] = useState(phone);

    const toggleMode = () => {
		setInEditMode(!inEditMode);
    }

    const saveChanges = () => {
    	if (iName != name)
			setName(iName);

		if (iEmail != email)
			setEmail(iEmail);

		if (iPhone != phone)
			setPhone(iPhone);

    	// TODO: Update user data in server

		toggleMode();
    }

	return (
        <Center flex={1} bg="white">
			<Center h="28%">
                <Avatar size="xl" p="1" bg="#EEFC79">
                    <Image source={avatarFallback} resizeMode="contain" alt="Avatar Fallback" />
                    {inEditMode &&
	                    <Avatar.Badge bg="#32C100" alignItems="center" justifyContent="center" borderWidth={3} size={35}>
							<Image source={cameraIcon} resizeMode="contain" alt="Edit profile picture" size={21} />
	                    </Avatar.Badge>
                    }
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
						color={inEditMode ? "#32C100" : "#003714"}
						fontSize="md"
						isReadOnly={!inEditMode}
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
						color={inEditMode ? "#32C100" : "#003714"}
						fontSize="md"
						isReadOnly={!inEditMode}
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
						type="text"
						variant="unstyled"
						value={iPhone}
						onChangeText={setIPhone}
						px={0}
						color={inEditMode ? "#32C100" : "#003714"}
						fontSize="md"
						isReadOnly={!inEditMode}
					/>
				</FormControl>

				<FormControl>
					<FormControl.Label mb={-1} _text={{
						color: "#8F94A3",
						fontSize: 12
					}}>
						CPF {inEditMode && <Ionicons name="lock-closed" color="#8F94A3" size={14} />}
					</FormControl.Label>
					<Input
						type="name"
						variant="unstyled"
						value={formattedTaxId}
						px={0}
						fontSize="md"
						isReadOnly={true}
						color={inEditMode ? "#8F94A3" : "#003714"}
					/>
				</FormControl>
			</VStack>

			<Center flex="1" w="100%">
				<Button
					w="90%" py={5}
					rounded="full"
					bg="#32C000"
					_text={{
						color: "white",
						fontSize: 14,
						fontWeight: "bold"
					}}
					_pressed={{
						bg: "#299900",
						_text: { color: "muted.200" }
					}}
					onPress={inEditMode ? saveChanges : toggleMode}
				>
					{inEditMode ? "Save" : "Edit"}
				</Button>
			</Center>
		</Center>
	);
}