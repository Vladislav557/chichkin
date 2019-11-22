export default (error, rest) => {
    if (error) throw new Error(error);
    
    console.log(rest.message);
};