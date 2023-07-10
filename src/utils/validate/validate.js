export function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
export const changeCase = (word) => {
  return word
    .replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const validator = (obj) => {
  let isValid = true;
  //   let error = {};
  let error = "";

  for (let [key, value] of Object.entries(obj)) {
    // console.log(key, value);
    // if (value.trim().length === 0) {
    //EMPTY INPUTS
    if (value.trim() === "") {
      isValid = false;
      //   error = {key:`${changeCase(key)} is required!`};
      error = `${changeCase(key)} is required!`;
      break;
    }

    //VALIDATE EMAIL
    if (key === "email") {
      const isEmail = validateEmail(value);
      if (!isEmail) {
        isValid = false;
        error = `${changeCase(key)} is not a valide email!`;
        break;
      }
    }

    //CHECK USERNAME LENGTH
    if (key === "userName") {
      if (value.length < 5) {
        isValid = false;
        error = `${changeCase(key)} must be 5 character and above!`;
        break;
      }
    }
    //CHECK  PASSWORD
    if (key === "Password") {
      if (value.length < 8) {
        isValid = false;
        error = `${changeCase(key)} must be 5 character and above!`;
        break;
      }
    }

    //CHECK CONFRIM PASSWORD
    if (key === "confirmPassword") {
      if (value !== obj.password) {
        isValid = false;
        error = `${changeCase(key)} does not match!`;
        break;
      }
    }
    //CHECK  PASSWORD
    if (key === "country") {
      if (value === "") {
        isValid = false;
        error = `${changeCase(key)} must have country!`;
        break;
      }
    }
  }

  return { isValid, error };
};
