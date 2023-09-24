import axios from 'axios';

const API_BASE_URL = "YOUR_SERVER_ADDRESS_HERE";

export const getUserData = async (id: number) => {
	try {
		const idStr = id.toString();
		const res = await axios.get(API_BASE_URL + "users/" + idStr);
		return res.data;
		
	} catch(err) {
		console.log(err);
	}

	return null;
}