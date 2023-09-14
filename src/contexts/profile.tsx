import { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	return (
	    <ProfileContext.Provider value={{ name, email, setName, setEmail }}>
	        {children}
	    </ProfileContext.Provider>
	);
}

export function useProfile() {
	return useContext(ProfileContext);
}