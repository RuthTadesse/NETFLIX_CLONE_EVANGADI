import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
























/*  
Axios is a popular JavaScript library used for making HTTP requests from the browser. 
In React applications, Axios is commonly utilized for fetching data from APIs, 
sending data to a server, or performing any other HTTP request-related tasks.
The above code Demonesrates 
fisrt Axios is imported and then an instance of Axios is created using the axios.create() method.
This instance is customized with a base URL of "https://api.themoviedb.org/3".
By creating an instance of Axios with a base URL, it allows you to specify a base URL for the requests 
made by that instance. This means that when you make subsequent requests using this instance, 
you only need to provide the endpoint relative to this base URL, rather than typing the full URL each time
Creating instances of Axios using axios.create() allows you to customize Axios for different parts of your 
application or different API endpoints. creating instances of Axios using axios.create() provides flexibility,
 reusability, and customization options for handling HTTP requests in your application.

*/