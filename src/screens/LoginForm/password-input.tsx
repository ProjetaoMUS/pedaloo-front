import { Box, Input, Pressable } from 'native-base';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const PasswordInput = ({ value, onChangeText }) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Input
			type={showPassword ? "text" : "password"}
			value={value}
			onChangeText={onChangeText}
			variant="underlined"
			color="#003714"
			focusOutlineColor="#32C100"
			InputRightElement={
				<Pressable onPress={() => setShowPassword(!showPassword)}>
					<Box mr="2">
						{showPassword
							? <Ionicons name="eye-off-outline" color="#32C100" size={19} />
							: <Ionicons name="eye-outline" color="#32C100" size={19} />
						}
					</Box>
				</Pressable>
			}
		/>
	);
}