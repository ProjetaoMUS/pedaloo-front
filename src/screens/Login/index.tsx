import {
	VStack,
	Text,
	Box,
	Image,
	Link,
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

const logo = require('../../../assets/green-logo.png');

const LoginOptionButton = ({ optionName, icon, callback }) => {
	return (
		<Link onPress={callback}>
			<Box w="100%" py="1.5" pl="2"
				bg="#003714" rounded="full"
				alignItems="center" flexDirection="row"
			>
				<Box size={21} alignItems="center" justifyContent="center" rounded="full" bg="white">
					{icon}
				</Box>
				<Text flex={1} color="white" ml={4}>Continuar com {optionName}</Text>
			</Box>
		</Link>
	)
};

const LoginForm = ({ onLogin })  => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	return (
		<Box w="100%" px="10" alignItems="center">
			<FormControl>
				<FormControl.Label _text={{ color: "#003714" }}>e-mail</FormControl.Label>
				<Input type="email" value={email} onChangeText={setEmail} />
			</FormControl>

			<FormControl mb="12">
				<FormControl.Label _text={{ color: "#003714" }}>senha</FormControl.Label>
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
				bg="#003714"
				_text={{ color: "white" }}
				_pressed={{
					bg: "#004d1c",
					_text: { color: "muted.200" }
				}}
				onPress={() => performLogin(email, password) && onLogin()}
			>
				Entrar
			</Button>

		</Box>
	)
}

export function Login({ onLogin }) {
	const [inLoginForm, setInLoginForm] = useState(false);

	const LoginOptions = () => (
		<Box w="100%" alignItems="center" mt={-12}>
			<Text fontSize="2xl" color="#003714" mb={1} bold>Estacione sua bicicleta</Text>
			<Text fontSize="2xl" color="#003714" mb={10} bold>Perto & com segurança.</Text>

			<VStack space={3} w="70%">
				<LoginOptionButton optionName="Apple"
					icon={<Ionicons name="logo-apple" color="#003714" size={16} />} />

				<LoginOptionButton optionName="Google"
					icon={<Ionicons name="logo-facebook" color="#003714" size={16} />} />

				<LoginOptionButton optionName="Facebook"
					icon={<Ionicons name="logo-google" color="#003714" size={16} />} />

				<LoginOptionButton optionName="e-mail"
					icon={<Ionicons name="mail-outline" color="#003714" size={16} />}
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
					icon={<Ionicons name="arrow-back-circle-outline" color="#003714" size={35} />}
				/>
			}

			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={12} />

			{inLoginForm
				? <LoginForm onLogin={onLogin} />
				: <LoginOptions />
			}
		</Box>
	)
}