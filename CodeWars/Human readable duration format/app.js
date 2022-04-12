function formatDuration(seconds) {
  let second = new Date(seconds * 1000).getSeconds();
  let minute = new Date(seconds * 1000).getMinutes();
  let hour = new Date(seconds * 1000).getHours();
  let day = new Date(seconds * 1000).getDay();
  let month = new Date(seconds * 1000).getMonth();
  let year = new Date(seconds * 1000).getFullYear();

  return (
    second +
    " seconds" +
    " " +
    minute +
    " minutes" +
    " " +
    hour +
    " hours" +
    " " +
    day +
    " days" +
    " " +
    month +
    " months" +
    " " +
    year +
    " years"
  );
}

console.log(formatDuration(1)); // '1 second'
console.log(formatDuration(62)); // '1 minute and 2 seconds'
console.log(formatDuration(120)); // '2 minutes'
console.log(formatDuration(3600)); // '1 hour'
console.log(formatDuration(3662)); // '1 hour, 1 minute and 2 seconds'
console.log(formatDuration(86399)); // '23 hours, 59 minutes and 59 seconds'
console.log(formatDuration(31536000)); // '1 year'
console.log(formatDuration(31536001)); // '1 year, 1 second'
console.log(formatDuration(31536002)); // '1 year, 2 seconds'
console.log(formatDuration(31536003)); // '1 year, 3 seconds'
console.log(formatDuration(31536004)); // '1 year, 4 seconds'
