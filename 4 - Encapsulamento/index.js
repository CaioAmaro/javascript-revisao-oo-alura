import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";

const novoUser = new User('Caio', 'c@c.com', '2024-01-01');
const novoAdmin = new Admin('Brunna', 'b@b.com', '2024-01-01');

console.log(novoUser.exibirInfos());
novoUser.nome = 'k';
console.log(novoUser.exibirInfos());
