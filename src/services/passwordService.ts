import { Options } from "../types/options";

export default function generatePass(length: number, options: Options) {
  let password = "";
  let characters = selectedCaracters(options);

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

function selectedCaracters(options: Options) {
  let characters = "";

  if (options.specials) characters += "@#$%&*!?";
  if (options.numbers) characters += "0123456789";
  if (options.uppers) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.lowers) characters += "abcdefghijklmnopqrstuvwxyz";

  if (!characters) {
    characters = "Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!";
  }

  return characters;
}