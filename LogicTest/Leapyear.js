function leapYear(str) {
  function determineLeapYear(data) {
    let dataRange = [];
    for (let i = data[0]; i <= data[1]; i++) {
      dataRange.push((i = data[0] += 4));
    }
    return dataRange;
  }
  return str.map(determineLeapYear);
}

leapYear([[1900, 2020]]);

console.log(leapYear([[1900, 2020]]));
