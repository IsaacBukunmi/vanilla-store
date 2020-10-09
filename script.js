const productList = document.getElementById("product-list")


// Function to list out all products
const fetchProducts = () => {
    // fetch method for fetching data
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {

        // Using map function to access each element in the array and displaying them
        const productItem = data.map((item) => (
            `
                <div class="product-item">
                    <div class="image-container">
                        <img src="${item.image}" alt="">
                    </div>
                    <p>${item.title}</p>
                    <p>${item.description}</p>
                    <p>${item.category}</p>
                    <p>${item.price}</p>
                </div>
            `
        ))

        // Inserting the product items into the product-list-container in the HTML file
        productList.innerHTML = productItem
    })
}

// Calling the function. Calling the function here would run the function immediately the web page is opened
fetchProducts();