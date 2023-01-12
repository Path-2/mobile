const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upper = lower.map((l) => l.toUpperCase());
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function validatePassword(password: string): boolean {
  return (
    hasLowerCase(password) &&
    hasUpperCase(password) &&
    hasNumeric(password) &&
    hasEnoughLength(password, 8)
  );
}

export function hasNumeric(text: string): boolean {
  return numeric.find((val) => text.includes(val)) !== undefined;
}
export function hasUpperCase(text: string): boolean {
  return upper.find((val) => text.includes(val)) !== undefined;
}
export function hasLowerCase(text: string): boolean {
  return lower.find((val) => text.includes(val)) !== undefined;
}
export function hasEnoughLength(text: string, length: number): boolean {
  return text.length >= length;
}

export function validateIdCard(idCard: string): boolean {
  return /\d{9}[A-Za-z]{2}\d{3}/.test(idCard);
}

export function validateEmail(email: string): boolean {
  return (
    /[a-z0-9]{2,}([._][a-z0-9]{2,})*@[a-z]{2,}([._][a-z0-9]{2,})*[.][a-z]{2,}/g.test(
      email
    ) &&
    !email.endsWith(".") &&
    !email.startsWith(".")
  );
}

export function capitalize(text: string): string {
  return text.endsWith(" ")
    ? text
    : text
        .split(" ")
        .map((s) => s[0].toUpperCase() + s.substring(1))
        .reduce((a, b) => a + " " + b);
}

export function validatePhone(phone: string): boolean {
  return /[9][1-9][0-9]{7}/.test(phone);
}

export function mask(value: string, mask: string): string {
  let masked: string = "";

  for (let i = 0, j = 0; i < value.length && j < mask.length; ) {
    if (value[i]) {
      if (mask[j] === "x") {
        masked += value[i];
        i++;
        j++;
      } else {
        masked += mask[j];
        j++;
      }
    } else break;
  }
  return masked ? masked : value;
}

function symbols(text: string): Array<string> {
  return text.split(/[A-Za-z0-9]/).filter((s) => s !== "");
}

function separateBySymbol(text: string): Array<string> {
  return text.split(/[*/-\\ ,.<>|!"#$%&/()=?»«+*@]/).filter((s) => s !== "");
}
