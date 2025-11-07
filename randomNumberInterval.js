function printRandomEvery2Seconds() {
  setInterval(() => {
    const rand = Math.random();
    console.log(rand);
  }, 2000);
}

printRandomEvery2Seconds();
