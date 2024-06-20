
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Lee Cooper",
    price: 119,
    colors: [
      {
        code: "black",
        img: "C:\Users\pavan\Desktop\Shopify\img\Lee Cooper.jpg",
      },
      {
        code: "darkblue",
        img: "C:\Users\pavan\Desktop\Shopify\img\Lee Jeans.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Lee Jeans",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "C:\Users\pavan\Desktop\Shopify\img\Lee Jeans.jpg",
      },
      {
        code: "green",
        img: "C:\Users\pavan\Desktop\Shopify\img\Brutus Jeans.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "BLevi's",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "C:\Users\pavan\Desktop\Shopify\img\Levi's1.jpg",
      },
      {
        code: "green",
        img: "C:\Users\pavan\Desktop\Shopify\img\Calvin Klein1.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Brutus Jeans",
    price: 129,
    colors: [
      {
        code: "black",
        img: "C:\Users\pavan\Desktop\Shopify\img\Levi's.jpg",
      },
      {
        code: "lightgray",
        img: "C:\Users\pavan\Desktop\Shopify\img\Lee Cooper1.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Calvin Klein",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "C:\Users\pavan\Desktop\Shopify\img\Calvin Klein.jpg",
      },
      {
        code: "black",
        img: "C:\Users\pavan\Desktop\Shopify\img\Levi's.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
