import { Box, Image, FormControl, Input, Button, Pressable, IconButton } from 'native-base';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { performLogin } from '../../api/auth';

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
							? <Ionicons name="eye-off-outline" color="gray" size={19} />
							: <Ionicons name="eye-outline" color="gray" size={19} />
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


	return (
		<Box flex={1} bg="white" alignItems="center">
			<IconButton
				position="absolute"
				top="5"
				left="2"
				onPress={() => console.log("Pressed!")}
				borderRadius="full"
				icon={<Ionicons name="arrow-back-circle-outline" color="gray" size={35} />}
			/>

			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={12} />

			<Box w="100%" px="10" alignItems="center">
				<FormControl>
					<FormControl.Label>e-mail</FormControl.Label>
					<Input type="email" value={email} onChangeText={setEmail} />
				</FormControl>

				<FormControl mb="12">
					<FormControl.Label>senha</FormControl.Label>
					<PasswordInput />
				</FormControl>

				<Button
					px="10"
					bg="#D9D9D9"
					_text={{ color: "black" }}
					_pressed={{
						bg: "#BEBBBB",
						_text: { color: "muted.700" }
					}}
					onPress={() => performLogin(email, password) && onLogin()}
				>
					Entrar
				</Button>
			</Box>
		</Box>
	);
}