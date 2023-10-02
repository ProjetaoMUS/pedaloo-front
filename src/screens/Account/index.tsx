import {
	Center,
	Text,
	IconButton,
	Image,
	Avatar,
	Button,
	Input,
	VStack,
	FormControl,
	KeyboardAvoidingView
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useState } from 'react';
import { useFeedback } from '../../contexts/feedback';
import { useProfile } from '../../contexts/profile';
import { updateUserData } from '../../api/user-data';

const avatarFallback = require('../../../assets/avatar.png');
const cameraIcon = require('../../../assets/camera-icon.png');

export function Account({ navigation }) {
    const { sendFeedback } = useFeedback();
    const { userId, name, email, phone, taxId, updateProfile } = useProfile();

	const formattedTaxId = taxId.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    const [inEditMode, setInEditMode] = useState(false);
    const [iName, setIName] = useState(name);
    const [iEmail, setIEmail] = useState(email);
    const [iPhone, setIPhone] = useState(phone);

    const toggleMode = () => {
		setInEditMode(!inEditMode);
    }

    const saveChanges = async () => {
		if (iName == name && iEmail == email && iPhone == phone) {
			toggleMode();
			return;
		}

		newData = {
			first_name: iName,
			email: iEmail,
			phone_number: iPhone
		};

		let responseData = await updateUserData(userId, newData);

		if (responseData == null) {
			sendFeedback("error", "Não conseguimos atualizas suas informações.");
			toggleMode();
			return;
		}

		updateProfile(iName, iEmail, iPhone);
		sendFeedback("success", "Suas informações foram atualizadas.");
		toggleMode();
    }

	return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
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

			<VStack flex={1} w="100%" px={12} space={3}>
				<FormControl>
					<FormControl.Label mb={-1} _text={{
						color: "#8F94A3",
						fontSize: 12
					}}>
						Nome
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
						Celular
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

			<Button
				w="90%" py={5}
				position="absolute"
				bottom={4}
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
				{inEditMode ? "Salvar" : "Editar"}
			</Button>
		</Center>
    </KeyboardAvoidingView>
	);
}