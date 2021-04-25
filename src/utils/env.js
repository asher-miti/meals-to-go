const liveHost = 'https://us-central1-mealstogo-822ec.cloudfunctions.net';
const localHost = 'http://localhost:5001/mealstogo-822ec/us-central1';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const host = liveHost;
