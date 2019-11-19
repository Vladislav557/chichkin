export default (error, rest) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(rest.message);
}