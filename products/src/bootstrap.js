import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 3; i++) {
    products += `<div> ${faker.commerce.productName()} </div>`
  }
  
  el.innerHTML = products;  
}

export { mount };