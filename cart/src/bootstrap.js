import faker from 'faker';

const mount = (el) => {
  if (el) {
    el.innerHTML = `<div>You have ${faker.random.number()} items in your cart</div>`;
  }
}

export { mount };
