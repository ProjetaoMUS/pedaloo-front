import { VStack, Text, Box,	Image } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginOptionButton } from './option-button';

const logo = require('../../../assets/green-logo.png');

export function LoginOptions({ navigation }) {
	return (
		<Box flex={1} bg="white" alignItems="center">
			<Image source={logo} resizeMode="contain" size={200} alt="Pedaloo" mt={12} />

			<Box w="100%" alignItems="center" mt={-12}>
				<Text fontSize="2xl" color="#003714" mb={-3}>Estacione sua bicicleta</Text>
				<Text fontSize="2xl" color="#003714" mb="80px" bold>Perto & com segurança.</Text>

				<VStack space={3} w="70%">
					<LoginOptionButton optionName="Apple"
						icon={<Ionicons name="logo-apple" color="#32C100" size={19} />} />

					<LoginOptionButton optionName="Facebook"
						icon={<Ionicons name="logo-facebook" color="#32C100" size={19} />} />

					<LoginOptionButton optionName="Google"
						icon={<Ionicons name="logo-google" color="#32C100" size={19} />} />

					<LoginOptionButton optionName="e-mail"
						icon={<Ionicons name="mail" color="#32C100" size={19} />}
						callback={() => navigation.navigate("Form")}
					/>
				</VStack>
			</Box>
		</Box>
	)
}