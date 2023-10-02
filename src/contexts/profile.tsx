import { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
	const [userId, setUserId] = useState(0);
	const [name, setName]     = useState('');
	const [email, setEmail]   = useState('');
	const [phone, setPhone]   = useState('');
	const [taxId, setTaxId]   = useState('');

	const initProfile = (userId, newName, newEmail, newPhone, newTaxId) => {
		setUserId(userId)
		setName(newName);
		setEmail(newEmail);
		setPhone(newPhone);
		setTaxId(newTaxId);
	};

	const updateProfile = (newName, newEmail, newPhone) => {
		setName(newName);
		setEmail(newEmail);
		setPhone(newPhone);
	};

	return (
    <ProfileContext.Provider value={{
		userId, name, email, phone, taxId,
		initProfile, updateProfile
    }}>
        {children}
    </ProfileContext.Provider>
	);
}

export function useProfile() {
	return useContext(ProfileContext);
}