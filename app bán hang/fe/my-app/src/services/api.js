import axios from 'axios';

const API_URL = 'http://192.168.10.104:9999/api'; // Đổi lại nếu chạy trên thiết bị khác

export const login = (email, password) => {
	return axios.post(`${API_URL}/users/login`, { email, password });
};

// Thêm các hàm gọi API khác nếu cần
