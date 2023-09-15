import { VStack, Text, Box,	Image, Link } from 'native-base';
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
				<Box p={1} alignItems="center" justifyContent="center" rounded="full" bg="white">
					{icon}
				</Box>
				<Text flex={1} color="white" ml={6}>Continuar com {optionName}</Text>
			</Box>
		</Link>
	)
};

export function LoginOptions({ navigation }) {
	return (
		<Box flex={1} bg="white" alignItems="center">
			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={12} />

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
						icon={<Ionicons name="mail" color="#003714" size={16} />}
						callback={() => navigation.navigate("Form")}
					/>
				</VStack>
			</Box>
		</Box>
	)
}