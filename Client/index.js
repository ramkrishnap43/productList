const productListDiv = document.getElementById('product-list');
const productForm = document.getElementById('product-form');
const productNameInput = document.getElementById('name');
const productDescriptionInput = document.getElementById('description');
const productPriceInput = document.getElementById('price');

// Function to fetch and display the product list
async function fetchProducts() {
  const data = await fetch('http://localhost:8050/products');
  const products = await data.json();
  //console.log(products)
  productListDiv.innerHTML = " ";
  products.forEach(product => {
    productListDiv.innerHTML += `<div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="editProduct('${product._id}', '${product.name}', '${product.description}', '${product.price}')">Edit</button>
      <button onclick="deleteProduct('${product._id}')">Delete</button>
    </div>`;
  });
}


async function submitProduct(event) {
  event.preventDefault();
  const name =  productNameInput.value;
  const description = productDescriptionInput.value;
  const price = productPriceInput.value;

  if (name.trim() === '' || description.trim() === '' || price.trim() === '') {
    alert('Please fill in all the fields.');
  }
}
  
