import ShoppingCartSmall from './images/Shopping-small.PNG';
import ShoppingCartLarge from './images/Shopping-large.PNG';
import MemorySmall from './images/Memory-small.PNG';
import MemoryLarge from './images/Memory-large.PNG';
import TodoSmall from './images/Todo-small.PNG';
import TodoLarge from './images/Todo-large.PNG';
import FriendlyChatSmall from './images/Friendlychat-small.png';
import FriendlyChatLarge from './images/Friendlychat-large.png';
import ClubhouseSmall from './images/Clubhouse-small.PNG';
import ClubhouseLarge from './images/Clubhouse-large.PNG';
import UMSSmall from './images/UMS-small.PNG';
import UMSLarge from './images/UMS-large.PNG';

const projects = [
    {id: 1, name: "Friendly Chat", small: FriendlyChatSmall, large: FriendlyChatLarge, description: "Start a friendly chat using this web-based chat application built with Express, NodeJS, React, MongoDB, and Socket.IO.", repoLink: "https://github.com/LetsGo12300/friendly-chat-app", demoLink: "https://friendlychat-app.herokuapp.com/"},
    {id: 2, name: "Clubhouse", small: ClubhouseSmall, large: ClubhouseLarge, description: "A message dashboard website using NodeJS, Express and MongoDB at the backend. Join the Clubhouse, post a message, and enjoy its perks.", repoLink: "https://github.com/LetsGo12300/Clubhouse", demoLink: "https://clubhouse2022.herokuapp.com/"},
    {id: 3, name: "User Management System", small: UMSSmall, large: UMSLarge, description: "A simple user management system to create, update, and delete user profiles (CRUD app).", repoLink: "https://github.com/LetsGo12300/user-management-system", demoLink: "https://desolate-river-13878.herokuapp.com/"},    
    {id: 4, name: "Best Buys: Shopping Cart", small: ShoppingCartSmall, large: ShoppingCartLarge, description:  "A basic shopping cart app built with React's react-router-dom to display multiple pages", repoLink: "https://github.com/LetsGo12300/shopping-cart", demoLink: "https://letsgo12300.github.io/shopping-cart/"},
    {id: 5, name: "Memory Game", small: MemorySmall, large: MemoryLarge, description:  "A memory game built with React featuring Asian flags", repoLink: "https://github.com/LetsGo12300/memory-game", demoLink: "https://letsgo12300.github.io/memory-game/"},
    {id: 6, name: "To Do List App", small: TodoSmall, large: TodoLarge, description: "A web-based to-do list application created with JavaScript, HTML, and CSS. Webpack was used as the bundler of Javascript modules.", repoLink: "https://github.com/LetsGo12300/to-do-list", demoLink: "https://letsgo12300.github.io/to-do-list/"},
];

export default projects;