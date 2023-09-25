import { createContext, useContext, useState } from 'react';

const MOCK_USER_ID = 1
const ProfileContext = createContext();

export function ProfileProvider({ children }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [taxId, setTaxId] = useState('');

	const updateProfile = (newName, newEmail, newPhone) => {
		setName(newName);
		setEmail(newEmail);
		setPhone(newPhone);
	};

	return (
    <ProfileContext.Provider value={{
			name, email, phone, taxId,
			setName, setEmail, setPhone, setTaxId,
			updateProfile
    }}>
        {children}
    </ProfileContext.Provider>
	);
}

export function useProfile() {
	return useContext(ProfileContext);
}