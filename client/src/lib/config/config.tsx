const isDev = import.meta.env.MODE === 'development';
export const BASE_PATH = isDev ? 'localhost:5173' : '';
export const BACK_PATH = isDev ? 'localhost' : window.location.origin;