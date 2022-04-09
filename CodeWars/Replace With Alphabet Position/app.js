function alphabetPosition(text) {
  return text
    .replace(/[~`!@#_$%^&*()|+={}\[\];:\'\"<>.,\/\\\?-]/g, "")
    .replace(".", "")
    .replace("-", "")
    .replace(/\d/g, "")
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .map((el) => el.charCodeAt() - 96)
    .join(" ");
}
