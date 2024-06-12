function generateProduct(product) {
  //   image
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("product-image-container");
  const image = document.createElement("img");
  image.classList.add("product-image");
  image.src = product.image;
  imageContainer.appendChild(image);
  //   name
  const name = document.createElement("div");
  name.classList.add("product-name", "limit-text-to-2-lines");
  name.innerText = product.name;
  //   rating
  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("product-rating-container");
  const ratingStars = document.createElement("img");
  ratingStars.classList.add("product-rating-stars");
  ratingStars.src = `images/ratings/rating-${product.rating.stars * 10}.png`;
  const ratingCount = document.createElement("div");
  ratingCount.classList.add("product-rating-count", "link-primary");
  ratingCount.innerText = product.rating.count;
  ratingContainer.appendChild(ratingStars);
  ratingContainer.appendChild(ratingCount);
  //   price
  const price = document.createElement("div");
  price.classList.add("product-price");
  price.innerText = `$${(product.priceCents / 100).toFixed(2)}`;
  //   quantity
  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add("product-quantity-container");
  const quantity = document.createElement("select");
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    if (i === 1) {
      option.selected = true;
    }
    quantity.appendChild(option);
  }
  // product spacer
  const productSpacer = document.createElement("div");
  productSpacer.classList.add("product-spacer");
  // added to cart
  const addedToCart = document.createElement("div");
  addedToCart.classList.add("added-to-cart");
  const addedToCartImg = document.createElement("img");
  addedToCartImg.src = "images/icons/checkmark.png";
  addedToCart.appendChild(addedToCartImg);
  addedToCart.appendChild(document.createTextNode("Added"));
  // button
  const button = document.createElement("button");
  button.classList.add("add-to-cart-button", "button-primary");
  button.innerText = "Add to Cart";

  //   append everychild to product container
  const productContainer = document.createElement("div");
  productContainer.classList.add("product-container");
  productContainer.appendChild(imageContainer);
  productContainer.appendChild(name);
  productContainer.appendChild(ratingContainer);
  productContainer.appendChild(price);
  productContainer.appendChild(quantityContainer);
  productContainer.appendChild(productSpacer);
  productContainer.appendChild(addedToCart);
  productContainer.appendChild(button);
  return productContainer;
}

function generateProducts(products) {
  const productsContainer = document.querySelector(".products-grid");
  products.forEach((product) => {
    productsContainer.appendChild(generateProduct(product));
  });
}
