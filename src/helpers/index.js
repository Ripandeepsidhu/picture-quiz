export const authenticate = () => {
    if (localStorage.getItem("user")) {
        return JSON.parse(localsStorage.getItem("user"));
    }   else {
        return false;
    }
};