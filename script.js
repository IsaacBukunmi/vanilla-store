const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input")
const query = searchInput.value.toLowerCase()


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
                    <div class="content">
                        <p class="title">${item.title}</p>
                        <div class="sub-content">
                            <p class="category">${item.category}</p>
                            <p class="price">$${item.price}</p>
                        </div>
                    </div>
                </div>
            `
        ))

        // Inserting the product items into the product-list-container in the HTML file
        productList.innerHTML = productItem
    })
}

// Calling the function. Calling the function here would run the function immediately the web page is opened
fetchProducts();

//Function to search for product
const searchProducts = () => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        for(let i=0; i < data.length; i++){
            // console.log(data[i])
            titleFilter = data[i].title
            // console.log(titleFilter.toLowerCase())
            if (titleFilter.toLowerCase().indexOf(query) > -1){
                console.log(titleFilter)
            }else{
                console.log(null)
            }
        }
    })
}

// searchProducts();

//Event Listener
searchInput.addEventListener('keyup', searchProducts)