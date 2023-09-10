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
	Button
} from 'native-base';

import { useState } from 'react';

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
	return (
		<Center flex={1} bg="white" px={10}>
			<FormControl>
				<FormControl.Label>e-mail</FormControl.Label>
				<Input type="email" />
			</FormControl>

			<FormControl mb="12">
				<FormControl.Label>senha</FormControl.Label>
				<Input type="password" />
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
			<Box w="130px" h="130px"mb={6} bg="#D9D9D9"
				alignItems="center" justifyContent="center"
			>
				logo
			</Box>

			<Text fontSize="xl" color="black" mb={12} bold>Lorem ipsum dolor sit amet, consectetur.</Text>

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