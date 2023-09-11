import {
	Center,
	VStack,
	Text,
	Box,
	Image,
	Link,
	CircleIcon,
	FormControl,
	Input,
	Button,
	Pressable,
	IconButton
} from 'native-base';

import { useState } from 'react';
import { encode } from 'base-64';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { performLogin } from '../../api/auth';

// If you deploy this to production, I will break into your house
// and throw foam noodles at you for a week
const API_BASE_URL = "TODO: read server adress from .env file"

const logo = require('../../../assets/logo.png');

const saveData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (err) {
		console.log(err);
	}
};

const LoginOptionButton = ({ optionName, icon, callback }) => {
	return (
		<Link onPress={callback}>
			<Box w="100%" py="1.5" pl="2"
				bg="#D9D9D9" rounded="full"
				alignItems="center" flexDirection="row"
			>
				<Box size={21} alignItems="center" justifyContent="center">
					{icon}
				</Box>
				<Text flex={1} ml={4}>Continuar com {optionName}</Text>
			</Box>
		</Link>
	)
};

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	return (
		<Box w="100%" px="10" alignItems="center">
			<FormControl>
				<FormControl.Label>e-mail</FormControl.Label>
				<Input type="email" value={email} onChangeText={setEmail} />
			</FormControl>

			<FormControl mb="12">
				<FormControl.Label>senha</FormControl.Label>
				<Input
					type={showPassword ? "text" : "password"}
					value={password}
					onChangeText={setPassword}
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
			</FormControl>

			<Button
				px="10"
				bg="#D9D9D9"
				_text={{ color: "black" }}
				_pressed={{
					bg: "#BEBBBB",
					_text: { color: "muted.700" }
				}}
				onPress={() => performLogin(email, password)}
			>
				Entrar
			</Button>

		</Box>
	)
}

export function Login() {
	const [inLoginForm, setInLoginForm] = useState(false);

	const LoginOptions = () => (
		<Box w="100%" alignItems="center" mt={-12}>
			<Text fontSize="xl" color="black" mb={12} bold>Lorem ipsum dolor sit amet, consectetur.</Text>

			<VStack space={3} w="70%">
				<LoginOptionButton optionName="Apple"
					icon={<Ionicons name="logo-apple" color="black" size={16} />} />

				<LoginOptionButton optionName="Google"
					icon={<Ionicons name="logo-facebook" color="black" size={16} />} />

				<LoginOptionButton optionName="Facebook"
					icon={<Ionicons name="logo-google" color="black" size={16} />} />

				<LoginOptionButton optionName="e-mail"
					icon={<Ionicons name="mail-outline" color="black" size={16} />}
					callback={() => { setInLoginForm(true) }} />
			</VStack>
		</Box>
	);

	return (
		<Box flex={1} bg="white" alignItems="center">
			{inLoginForm &&
				<IconButton
					position="absolute"
					top="5"
					left="2"
					onPress={() => setInLoginForm(!inLoginForm)}
					borderRadius="full"
					icon={<Ionicons name="arrow-back-circle-outline" color="gray" size={35} />}
				/>
			}

			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={12} />

			{inLoginForm
				? <LoginForm />
				: <LoginOptions />
			}
		</Box>
	)
}