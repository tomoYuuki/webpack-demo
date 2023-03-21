// const {say} = require("./js/index");
import { sub, add } from './js/math';

sub(1, 2);
add(3, 4);

const func = () => {
  console.log('say');
};

const fn = new Promise((resolve, reject) => {
  console.log('Promise');
});
console.log(fn);
func();
