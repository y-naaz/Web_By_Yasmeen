import { products } from "./products";

 export const cart = [
  {
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity :2
  },
  {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
  }
 ];
 export function addToCart(productId) {
    let matchingItem;
    cart.forEach((CartItems) => {
      if (productId === CartItems.productId) {
        //as the object_name is items (it is referencing to the object) hence matchingItem will also refer to the same item
        matchingItem = CartItems;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
  }