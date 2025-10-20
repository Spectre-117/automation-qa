export default class TicketManager {
  #ticketsNumber;

  constructor(ticketsNumber) {
    this.#ticketsNumber = ticketsNumber;
  }

  isTicketsAvailable(ticketsNumber) {
    if (ticketsNumber <= this.#ticketsNumber) {
      const promiseA = Promise.resolve(true);
      return promiseA;
    } else {
      const promiseV = Promise.resolve(false);
      return promiseV;
    }
  }
}
