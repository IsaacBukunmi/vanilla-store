const hamburgerMenu = document.getElementById("hamburger-menu");
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const form = document.getElementById("form");
const addIcon = document.getElementById("add-icon");
const categoryItem = document.querySelectorAll('.category-item');
const categoryHeader = document.getElementById("category-header");
const mobileNavList = document.getElementById("mobile-nav-list");
let productItemList = [];


//Function to toggle hamburger menu
const toggleHamburgerMenu = () => {
    hamburgerMenu.classList.toggle("toggle-menu")
    mobileNavList.classList.toggle("toggle-menu")

    // gsap.from('.mobile-nav-list', { duration:.4, y:'-100%', ease:'power1.out'})
    // gsap.from('.nav-item', {duration:1, opacity:0, delay:.4, stagger:.5})
}


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
            item.title.toLowerCase().includes(query)
        )
    });

    displayProducts(searchedItem)
}

// Function to display product by category
const categoryProducts = (e) => {
    console.log(e.target.innerText.toLowerCase())
    const categoryName = e.target.innerText.toLowerCase();
    categoryHeader.innerHTML = categoryName;

    const categorizedProducts = productItemList.filter((item) => {
        return(
            item.category.toLowerCase() === categoryName
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
hamburgerMenu.addEventListener('click', toggleHamburgerMenu)
searchInput.addEventListener('keyup', searchProducts)

categoryItem.forEach((item) => (
    item.addEventListener('click', categoryProducts)
))
