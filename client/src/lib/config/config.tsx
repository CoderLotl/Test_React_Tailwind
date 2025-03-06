const isDev = import.meta.env.MODE === 'development';
export const BASE_PATH = isDev ? 'http://localhost:5173/' : '';
export const BACK_PATH = isDev ? 'http://localhost' : window.location.origin;