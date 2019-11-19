export default (error, rest) => {
    if (error) {
        console.log(error);
        return;
    } 
    if (rest.message === "eslint") {
        return rest.stdout;
    }
    console.log(rest.message);
};