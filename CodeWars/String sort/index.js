function sort(str) {
  const code =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!?’'()*+,.…:\"@#$%&^-;<>=[]_{}~“”£ ";
  return [...str]
    .sort((a, b) => code.indexOf(a) - code.indexOf(b))
    .join("")
    .trim();
}
console.log(sort("The cat sat on the mat"));
// aaaceehhmnosTtttt
