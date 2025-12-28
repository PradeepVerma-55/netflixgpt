
const checkValidData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = {};

    if (!email || !emailRegex.test(email)) {
        errorMessage.email = "Invalid email format.";
    }

    if (!password || password.length < 6) {
        errorMessage.password = "Password must be at least 6 characters long.";
    }

    return Object.keys(errorMessage).length ? errorMessage : null;
};

export { checkValidData };