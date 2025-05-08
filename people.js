const { fullName } = require("./names");
const { hobbies } = require("./hobbies");

const init = () => {
  const name = fullName();
  const hobby = hobbies();
  return { name, hobby };
};
console.log(init());
