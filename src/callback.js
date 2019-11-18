export default (error, rest) => {
    if (error) {
        console.log(`Произошла непредвиденная ошибка: ${error}`);
        return;
    } else {
        console.log(rest.message);
    }
}