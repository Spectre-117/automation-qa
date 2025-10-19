function letsGoHome(cbFunction) {
  console.log('Call a taxi');
  console.log('On the road...');
  cbFunction();
}

function callback() {
  console.log('We are at home!');
}

letsGoHome(callback); /// synchronous call
//-----------------------------------------------------------------------
/**  Timers:
 *  setTimeout(callback, timeStamp, arg1, arg2, ...)   arg1..arg2 - arguments for callback
 *  timeStamp - when implement timer after delay
 */
function greetUser(name, greetPhrase) {
  console.log(`${greetPhrase}, ${name}`);
}

setTimeout(greetUser, 1000, 'Serhii', 'Hello');

const timerId = setTimeout(
  greetUser,
  2000,
  'Dmitro',
  'Hello',
);
clearTimeout(timerId); // discard timer if needed

/** setInterval(callback, timeInterval, arg1, arg2, ...)   arg1..arg2 - arguments for callback
 *  to stop interval you may use setTimeout method to stop it in
 */
function greetUserTwo(name, greetPhrase) {
  console.log(`${greetPhrase}, ${name}`);
}

const intervalIDNumber = setInterval(
  greetUserTwo,
  1000,
  'Alex',
  'Hello',
);

setTimeout(() => {
  clearInterval(intervalIDNumber);
  console.log('Interval stopped');
}, 10000);

/**
 * Recursion setTimeout
 * use when you need to set one Timer after finish of another timer
 */
let timeStamp = 2000;
const timerRecID = setTimeout(
  function firstTimer() {
    if (timeStamp > 6000) {
      return;
    }
    console.log(`Timer one`);
    setTimeout(firstTimer, timeStamp);
    timeStamp += 2000;
  },
  2000,
);
