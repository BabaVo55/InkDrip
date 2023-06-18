
/*const product = document.querySelectorAll(".product");*/
const products = [
    {
        id: 1,
        title: "Tees",
        price: 22.99,
        colors: [
            {
                code: "White",
                img: "/img/Oversized-T-Shirt-PNG-Pic.png"
            },
            {
                code: "navy",
                img: ""
            }
        ],
    },
    {
        id: 2,
        title: "Shorts",
        price: 22.99,
        colors: [
            {
                code: "darkblue",
                img: "/img/Shorts-removebg-preview.png"
            },
            {
                code: "purple",
                img: ""
            }
        ],
    },
    {
        id: 3,
        title: "Hoodies",
        price: 27.99,
        colors: [
            {
                code: "gray",
                img: "img/Hoodie-removebg-preview.png"
            },
            {
                code: "orange",
                img: ""
            }
        ],
    },
    {
        id: 4,
        title: "Jumpers",
        price: 32.99,
        colors: [
            {
                code: "brown",
                img: "/img/jumper_green-removebg-preview.png"
            },
            {
                code: "grey",
                img: "/img/jumper_yellow-removebg-preview.png"
            }
        ],
    },
    {
        id: 5,
        title: "Tracksuits",
        price: 27.99,
        colors: [
            {
                code: "grey",
                img: "/img/Tracksuit-removebg-preview.png"
            },
            {
                code: "black",
                img: ""
            }
        ]
    }   
]
//selects the .sliderWrapper div and sets it to a variable named  wrapper
const wrapper = document.querySelector(".sliderWrapper");
//selects .menuItems div in the .navBottom div and sets it to a variable named menuItems
const menuItems = document.querySelectorAll(".menuItem");

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change current slide
       wrapper.style.transform = `translateX(${-100 * index}vw)`;

       //change chosen product
       chosenProduct = products[index];

       //change text of product
       currentProductTitle.textContent = chosenProduct.title;
       currentProductPrice.textContent = `$${chosenProduct.price}`;
       currentProductImg.src = chosenProduct.colors[0].img;
       
       //assign new colors
       currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;

       });
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
})

close.addEventListener("click", ()=>{
    payment.style.display = "none";
})