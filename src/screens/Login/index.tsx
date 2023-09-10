import { Center, VStack, Text, Box, Image, Link, CircleIcon } from 'native-base';

const LoginOptionButton = ({optionName, icon}) => {
	return (
		<Link>
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

export function Login() {
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
				<LoginOptionButton optionName="e-mail" icon={<CircleIcon color="#BEBBBB" />} />
			</VStack>
		</Center>
	)
}