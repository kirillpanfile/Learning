const ip = (ip) => {
  return parseInt(
    ip
      .split(".")
      .map((el) => {
        let tmp = parseInt(el).toString(2);
        return new Array(9 - tmp.length).join("0") + tmp;
      })
      .join(""),
    2
  );
};

function ipsBetween(ip1, ip2) {
  return ip(ip2) - ip(ip1);
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1"));
console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("0.0.0.0", "255.255.255.255"));

console.log(ip("255.255.255.255"));
