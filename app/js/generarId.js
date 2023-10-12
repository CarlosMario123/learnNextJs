export const generateId = () => {
    const randomNumber = Math.random();
    const id = Math.floor(randomNumber * 1000000000000000).toString(16);
  
    return id;
}