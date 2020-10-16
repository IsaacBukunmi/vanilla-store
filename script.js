const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const form = document.getElementById("form");
const addIcon = document.getElementById("add-icon");
const categoryItem = document.querySelectorAll('.category-item')
let productItemList = [];



// Function to list out all products
const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => { 

        productItemList =  data
        displayProducts(productItemList)
    })
    .catch(err => {
        console.log(err)
    })
}

// const fetchProducts = async () => {
//     try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         productItemList = await res.json();
//         displayProducts(productItemList);

//     } catch(err){
//         console.error(err)
//     }
// }

// Function to display product to the UI
const displayProducts = (products) => {
    // Using map function to access each element in the array and displaying them
    const productItems = products.map((product) => (
        `
            <div class="product-item">
                <div class="image-container">
                    <div class="add-icon" id="add-icon">
                        <img src="/images/plus-icon.svg"/>
                    </div>
                    <img src="${product.image}" alt="">
                </div>
                <div class="content">
                    <p class="title">${product.title}</p>
                    <div class="sub-content">
                        <p class="category">${product.category}</p>
                        <p class="price">$${product.price}</p>
                    </div>
                </div>
            </div>
        `
    ))

    // Inserting the product items into the product-list-container in the HTML file
    productList.innerHTML = productItems
    
}

// Function to search for products
const searchProducts = (e) => {
    const query = e.target.value.toLowerCase();
    const searchedItem = productItemList.filter((item) => {
        return(
            item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
        )
    });

    displayProducts(searchedItem)
}

// Function to display product category
const categoryProducts = (e) => {
    console.log(e.target.innerText.toLowerCase())
    const categoryName = e.target.innerText.toLowerCase();
    
    const categorizedProducts = productItemList.filter((item) => {
        return(
            item.category.toLowerCase().includes(categoryName)
        )
    });
    
    displayProducts(categorizedProducts)
}



const addToCart = () => {
    
}

//Calling the function.
fetchProducts();

form.addEventListener("submit" , function(e){
    e.preventDefault
})

//Event Listener
searchInput.addEventListener('keyup', searchProducts)

categoryItem.forEach((item) => (
    item.addEventListener('click', categoryProducts)
))
