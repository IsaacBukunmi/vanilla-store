const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const form = document.getElementById("form");
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
                    <div class="add-icon">
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

//Calling the function.
fetchProducts();

form.addEventListener("submit" , function(e){
    e.preventDefault
})

//Event Listener
searchInput.addEventListener('keyup', searchProducts)


































//Function to search for product
// const searchProducts = () => {
//     fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(data => {
//         for(let i=0; i < data.length; i++){
//             // console.log(data[i])
//             titleFilter = data[i].title
//             // console.log(titleFilter.toLowerCase())
//             if (titleFilter.toLowerCase().indexOf(query) > -1){
//                 console.log(titleFilter)
//             }else{
//                 console.log(null)
//             }
//         }
//     })
// }

// searchProducts();


