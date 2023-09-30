import { Box, Image, FormControl, Input, Button, Pressable, IconButton } from 'native-base';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { performLogin } from '../../api/auth';
import { api } from '../../api/config';
import { useFeedback } from '../../contexts/feedback';

const logo = require('../../../assets/green-logo.png');

const PasswordInput = ({ value, onChangeText }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Input
			type={showPassword ? "text" : "password"}
			value={value}
			onChangeText={onChangeText}
			variant="underlined"
			color="#003714"
			focusOutlineColor="#32C100"
			InputRightElement={
				<Pressable onPress={() => setShowPassword(!showPassword)}>
					<Box mr="2">
						{showPassword
							? <Ionicons name="eye-off-outline" color="#32C100" size={19} />
							: <Ionicons name="eye-outline" color="#32C100" size={19} />
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
		const tokenData = await performLogin(email, password);

		if (tokenData == undefined) {
			sendFeedback('error', 'Verifique suas credenciais e tente novamente.')

		} else {
			sendFeedback('success', 'Login realizado com sucesso!');
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