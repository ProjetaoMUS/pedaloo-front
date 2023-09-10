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

const LoginOptionButton = ({optionName, icon, callback}) => {
	return (
		<Link onPress={callback}>
	      <Box w="100%" py="1.5" pl="2"
	        bg="#D9D9D9" rounded="full"
	        alignItems="center" flexDirection="row"
	      >
	        {icon}
	        <Text flex={1} ml={6}>Continuar com {optionName}</Text>
	      </Box>
		</Link>
	)
};

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const peformLogin = () => {
		if (!global.btoa) {
	  		global.btoa = encode;
		}

		axios
			.post(API_BASE_URL + 'auth/login/', {}, {
				auth: {
					username: email,
					password: password
				}
			})
			.then(res => {
				saveData('token', res.data.token);
			})
			.catch(err => console.log(err))
	}

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
          					<CircleIcon color="#BEBBBB" mr="2" />
          				</Pressable>
      				}
				/>
			</FormControl>

			<Button
				px="10"
				bg="#D9D9D9" _text={{ color: "black" }}
				_pressed={{
					bg: "#BEBBBB",
					_text: { color: "muted.700" }
				}}
				onPress={peformLogin}
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
					<LoginOptionButton optionName="Apple" icon={<CircleIcon color="#BEBBBB" />} />
					<LoginOptionButton optionName="Google" icon={<CircleIcon color="#BEBBBB" />} />
					<LoginOptionButton optionName="Facebook" icon={<CircleIcon color="#BEBBBB" />} />
					<LoginOptionButton optionName="e-mail" icon={<CircleIcon color="#BEBBBB" />}
						callback={() => { setInLoginForm(true) }} />
			</VStack>
		</Box>
	);

	return (
		<Box flex={1} bg="white" alignItems="center">
			{ inLoginForm &&
				<IconButton
					position="absolute"
					top="5"
					left="5"
					onPress={() => setInLoginForm(!inLoginForm)}
					borderRadius="full"
					icon={<CircleIcon color="#BEBBBB" size="2xl" />}
				/>
			}

			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo"  mt={12} />

			{ inLoginForm
				? <LoginForm />
				: <LoginOptions />
			}
		</Box>
	)
}