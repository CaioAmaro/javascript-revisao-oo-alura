import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";

const novoUser = new User('Caio', 'c@c.com', '2024-01-01');
const dadosFicticios = User.exibirInfosGenericas('Cassio', 'Email@.com');

console.log(dadosFicticios);

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2024-01-01');

const novaDocente = new Docente('Carla', 'c@c.com', '2024-01-01');


// console.log(novoUser.exibirInfos());
// console.log(novoAdmin.exibirInfos());
// console.log(novaDocente.exibirInfos());


