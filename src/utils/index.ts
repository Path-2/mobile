export function validatePassword(password: string): boolean {
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

  let hasNumber: boolean = false;
  let hasUpper: boolean = false;
  let hasLower: boolean = false;

  for (const letter of password) {
    if (lower.includes(letter)) hasLower = true;
    else if (upper.includes(letter)) hasUpper = true;
    else if (numeric.includes(letter)) hasNumber = true;
  }

  return hasLower && hasUpper && hasNumber && password.length > 8;
}

export function validateIdCard(idCard: string): boolean {
  return /[0-9]{9}[A-Za-z]{2}[0-9]{3}/.test(idCard);
}

export function validateEmail(email: string):boolean {
  return /[a-z0-9]{2,}([._][a-z0-9]{2,})*@[a-z]{2,}([._][a-z0-9]{2,})*[.][a-z]{2,}/g.test(email)
}