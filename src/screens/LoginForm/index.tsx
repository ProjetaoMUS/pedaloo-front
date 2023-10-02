import { Box, Image, FormControl, Input, Button, Pressable, IconButton } from 'native-base';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { PasswordInput } from './password-input';

import { getUserData } from '../../api/user-data';
import { performLogin } from '../../api/auth';
import { api, setToken } from '../../api/config';
import { useFeedback } from '../../contexts/feedback';
import { useProfile } from '../../contexts/profile';

const logo = require('../../../assets/green-logo.png');

export function LoginForm({ navigation, onLogin }) {
  const { initProfile } = useProfile();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { sendFeedback } = useFeedback();

	const initiateProfile = async () => {
		const userData = await getUserData();
	  initProfile(
	    userData.id,
	    userData.first_name,
	    userData.email,
	    userData.phone_number,
	    userData.tax_id
	  );
	};

	const handleLogin = async () => {
		const tokenData = await performLogin(email, password);

		if (tokenData == undefined) {
			sendFeedback('error', 'Verifique suas credenciais e tente novamente.')

		} else {
			sendFeedback('success', 'Login realizado com sucesso!');
			setToken(tokenData.token);
			initiateProfile();
			onLogin();
		}
	}

	return (
		<Box flex={1} bg="white" alignItems="center">
			<IconButton
				position="absolute"
				left="5"
				top="5"
				onPress={navigation.goBack}
				borderRadius="full"
				bg="#FAFBFF"
				_pressed={{
					bg: "muted.200"
				}}
				onPress={() => navigation.navigate("Options")}
				icon={<Ionicons name="chevron-back-outline" color="#121826" size={20} />}
			/>

			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={12} />

			<Box w="100%" px="10" alignItems="center">
				<FormControl mb={4}>
					<FormControl.Label _text={{ color: "#003714" }} mb={-1}>Email</FormControl.Label>
					<Input
						type="email"
						value={email}
						onChangeText={setEmail}
						variant="underlined"
						color="#003714"
						focusOutlineColor="#32C100"
					/>
				</FormControl>

				<FormControl mb="12">
					<FormControl.Label _text={{ color: "#003714" }} mb={-1}>Senha</FormControl.Label>
					<PasswordInput value={password} onChangeText={setPassword} />
				</FormControl>
			</Box>

			<Button
				position="absolute"
				bottom={10}
				w="90%"
				py={4}
				bg="#32C100"
				_text={{ color: "white" }}
				_pressed={{
					bg: "#299900",
					_text: { color: "muted.200" }
				}}
				onPress={handleLogin}
				borderRadius="full"
			>
				Entrar
			</Button>
		</Box>
	);
}