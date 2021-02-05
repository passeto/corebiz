const isAuthenticated = () => localStorage.getItem("@jarvis/token") !== null;

export default isAuthenticated;
