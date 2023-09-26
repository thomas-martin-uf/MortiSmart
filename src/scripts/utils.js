export const utils = {
    // define format for us dollar currency so it shows with dollar sign and commas
    USDollar: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }),

    // generic debounce function used to help give user time to type a full word before checking their input
    debounce: (func, timeout = 350) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, timeout);
        };
    },
};
