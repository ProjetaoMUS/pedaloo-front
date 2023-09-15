import { Box, Image, FormControl, Input, Button, Pressable, IconButton } from 'native-base';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { performLogin } from '../../api/auth';
import { useFeedback } from '../../contexts/feedback';

const logo = require('../../../assets/green-logo.png');

const PasswordInput = ({ value, onChangeText }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Input
			type={showPassword ? "text" : "password"}
			value={value}
			onChangeText={onChangeText}
			InputRightElement={
				<Pressable onPress={() => setShowPassword(!showPassword)}>
					<Box mr="2">
						{showPassword
							? <Ionicons name="eye-off-outline" color="#003714" size={19} />
							: <Ionicons name="eye-outline" color="#003714" size={19} />
						}
					</Box>
				</Pressable>
			}
		/>
	);
}

export function LoginForm({ navigation, onLogin }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { sendFeedback } = useFeedback();

	const handleLogin = async () => {
		const loggedIn = await performLogin(email, password);

		if (loggedIn) {
			sendFeedback('success', 'Login realizado com sucesso!');
			onLogin();
		} else {
			sendFeedback('error', 'Verifique suas credenciais e tente novamente.')
		}
	}

	return (
		<Box flex={1} bg="white" alignItems="center">
			<IconButton
				position="absolute"
				top="5"
				left="2"
				borderRadius="full"
				onPress={() => navigation.navigate("Options")}
				icon={<Ionicons name="arrow-back-circle-outline" color="#003714" size={35} />}
			/>

			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={12} />

			<Box w="100%" px="10" alignItems="center">
				<FormControl>
					<FormControl.Label _text={{ color: "#003714" }}>e-mail</FormControl.Label>
					<Input type="email" value={email} onChangeText={setEmail} />
				</FormControl>

				<FormControl mb="12">
					<FormControl.Label _text={{ color: "#003714" }}>senha</FormControl.Label>
					<PasswordInput />
				</FormControl>

				<Button
					px="10"
					bg="#003714"
					_text={{ color: "white" }}
					_pressed={{
						bg: "#004d1c",
						_text: { color: "muted.200" }
					}}
					onPress={handleLogin}
				>
					Entrar
				</Button>
			</Box>
		</Box>
	);
}