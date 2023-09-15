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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginOptions } from '../LoginOptions';
import { LoginForm } from '../LoginForm';

const logo = require('../../../assets/green-logo.png');

const Stack = createNativeStackNavigator();

export function Login({ onLogin }) {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Options" component={LoginOptions} />
				<Stack.Screen name="Form">
					{ (props) => (<LoginForm {...props} onLogin={onLogin} />) }
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	)
}