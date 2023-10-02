export interface iReservation {
	user: number;
	location: number;
	total_price: string;
	bike_count: number;
	start?: string;
	end?: string;
	is_active: boolean;
	payment_method: string;
};