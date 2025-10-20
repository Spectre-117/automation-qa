const menu = {
  americano: [
    { item: 'burger', time: 3000 },
    { item: 'fried potato', time: 1500 },
    { item: 'cola', time: 500 },
  ],
  italiano: [
    { item: '🍕', time: 1500 },
    { item: '🥗', time: 1500 },
    { item: '🍷', time: 500 },
  ],
  breakfast: [
    { item: '🥪', time: 1000 },
    { item: '🍳', time: 2500 },
    { item: '☕', time: 1000 },
  ],
};

function order(dishes) {
  console.log(`Start cooking order ...`);
  const orderResult = [];

  function getResultData(dish, index) {
    orderResult[index] = dish;
    if (
      orderResult.filter(Boolean).length ===
      dishes.length
    ) {
      console.log(orderResult);
    }
  }

  function cookFood(item, index, onDishComplete) {
    const condition = 1;

    const dish = new Promise(function (
      resolve,
      reject,
    ) {
      if (condition === 1) {
        resolve(item);
      } else {
        reject(`${item} failed`);
      }
    });
    onDishComplete(dish, index);
  }

  dishes.forEach((item, index) =>
    cookFood(item, index, getResultData),
  );
}

order(menu.americano);
