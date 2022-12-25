import { suma, multiplica } from "./controller.js";
import chalk from 'chalk';

const sumar = suma(4, 5);
const multiplicar = multiplica(1, 2);

console.log(chalk.green(sumar));
console.log(chalk.green(multiplicar));