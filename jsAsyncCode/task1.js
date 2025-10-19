function printText(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

printText('Hello World in 2 sec', 2000);
