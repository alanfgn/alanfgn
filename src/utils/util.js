export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

export const delay = time => {
    return new Promise(resolve => setTimeout(resolve, time));
};

export default {
    randomNumber,
    delay,
};
