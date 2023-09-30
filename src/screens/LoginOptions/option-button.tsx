import { Text, Box,	Link } from 'native-base';

export const LoginOptionButton = ({ optionName, icon, callback }) => {
	return (
		<Link onPress={callback}>
			<Box w="100%" py="2"
				bg="#32C100" rounded="full"
				alignItems="center" justifyContent="center" flexDirection="row"
			>
				<Box
					p={1}
					alignItems="center"
					justifyContent="center"
					rounded="full"
					bg="white"
					position="absolute"
					left={1}
				>
					{icon}
				</Box>
				<Text flex={1} color="white" ml="25%">Continuar com {optionName}</Text>
			</Box>
		</Link>
	)
};