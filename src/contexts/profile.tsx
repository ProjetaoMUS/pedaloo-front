import { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [taxId, setTaxId] = useState('');

	return (
	    <ProfileContext.Provider value={{
			name, email, phone, taxId,
			setName, setEmail, setPhone, setTaxId
	    }}>
	        {children}
	    </ProfileContext.Provider>
	);
}

export function useProfile() {
	return useContext(ProfileContext);
}