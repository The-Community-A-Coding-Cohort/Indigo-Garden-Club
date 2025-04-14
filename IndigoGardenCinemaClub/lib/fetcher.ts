import axios from 'axios';

// Create an Axios instance with credentials enabled
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  withCredentials: true, // Ensure cookies are sent with every request
});

// Helper function for GET requests
export const getData = (url: string) =>
  axiosInstance.get(url).then(response => response.data);

// Helper function for POST requests
export const postData = <T>(url: string, data: unknown): Promise<T> =>
    axiosInstance.post(url, data).then((response) => response.data);

// Helper function for DELETE requests
export const deleteData = <T>(url: string, data?: unknown): Promise<T> =>
    axiosInstance.delete<T>(url, { data }).then(response => response.data);

// Export the instance if needed elsewhere
export default axiosInstance;