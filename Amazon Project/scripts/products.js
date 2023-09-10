const mainProductGrid = document.querySelector(".products-main-page-grid");

const ratingImgJSON ={
  4 : "images/ratings/rating-4.png",
  4.5 : "images/ratings/rating-45.png",
  5: "images/ratings/rating-5.png",
}

const renderProductSection = (data) =>{
  let htmlGen = ``;
  data.forEach((element, index)=> {
      let ratingImg;
      if(element.rating.stars){
        ratingImg = ratingImgJSON[element.rating.stars];
      }        
      htmlGen += `
      <div class="prodect-item-container" id="${element.id}">
              <div class="product-image-container" >
                  <img src="${element.image}" alt="image-${element.id}" class="product-image">
              </div>
              <div class="product-info">
                  <div class="product-name">${element.name}</div>
                  <div class="product-rating-info">
                      <img src="${ratingImg}" alt="" class="product-rating">
                      <div class="rating-quatity">${element.rating.count}</div>
                  </div>
                  <div class="price">$${(element.priceCents/10).toFixed(2)}</div>
                  <div class="quantity-selector-container">
                      <select class="js-quantity-selector" data-testid="quantity-selector">
                          <option selected="" value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                  </div>
                  <div class="added-to-cart-message"></div>
              </div>
              <button class="add-to-cart-button" data-product-id="${element.id}">Add to cart</button>
          </div>`
  });
  console.log(htmlGen);
  mainProductGrid.innerHTML = htmlGen;

}

const addToCart = (e) =>{
  const productID =  e.srcElement.dataset.productId;
  let currentItem;
  cart.forEach(element => {
    if (element.productID == productID){
      currentItem =element;
    }
  })
  if(currentItem){
    currentItem.quantity += 1;
  }
  else{
    cart.push({productID: productID, quantity: 1});
  }
  console.log(cart);
}


fetch('backend/products.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON data
  })
  .then((data) => {
    // Now you can work with the 'data' variable containing the JSON data
    renderProductSection(data);
    document.querySelectorAll('.add-to-cart-button').forEach(button =>{
      button.addEventListener('click', addToCart)
    })
  
    console.log(data);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });




