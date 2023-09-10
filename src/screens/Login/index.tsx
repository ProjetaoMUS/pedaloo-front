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
	Pressable
} from 'native-base';

import { useState } from 'react';

const logo = require('../../../assets/logo.png');

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

	return (
		<Center flex={1} bg="white" px={10}>
			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={-12} />

			<FormControl>
				<FormControl.Label>e-mail</FormControl.Label>
				<Input type="email" />
			</FormControl>

			<FormControl mb="12">
				<FormControl.Label>senha</FormControl.Label>
				<Input
					type={showPassword ? "text" : "password"}
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
			>
				Entrar
			</Button>
		</Center>
	)
}

export function Login() {
	const [inLoginForm, setInLoginForm] = useState(false);

	if (inLoginForm) {
		return <LoginForm />
	}

	return (
		<Center flex={1} bg="white" >
			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={-12} />

			<Text fontSize="xl" color="black" mt={-12} mb={12} bold>Lorem ipsum dolor sit amet, consectetur.</Text>

			<VStack space={3} w="70%">
				<LoginOptionButton optionName="Apple" icon={<CircleIcon color="#BEBBBB" />} />
				<LoginOptionButton optionName="Google" icon={<CircleIcon color="#BEBBBB" />} />
				<LoginOptionButton optionName="Facebook" icon={<CircleIcon color="#BEBBBB" />} />
				<LoginOptionButton optionName="e-mail" icon={<CircleIcon color="#BEBBBB" />}
					callback={() => { setInLoginForm(true) }} />
			</VStack>
		</Center>
	)
}