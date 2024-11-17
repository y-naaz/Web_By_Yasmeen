 export const cart = [];
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