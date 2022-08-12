

const getUsers=async()=> {
const url =`http://localhost:3030/api/users/`;
const resp=await fetch(url);
const userApi= await resp.json();

return userApi;
}

export default getUsers