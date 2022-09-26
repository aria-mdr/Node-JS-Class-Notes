// object 

// type is object
const personObject = {
    name: 'Aria',
    age: 30,
    printName: () =>{
        console.log(name)
    }
}


const func = () => {
    inputElement.style = 'background-color: black'
}

// setTimeout(func, 2000)

// define function 
const inputElement = document.getElementById('inputEmail');

const handleUserType = () => {
    console.log(inputElement.value)
}

const userSelectsInputElement = () =>{
    console.log('user clicked on the inout form')
}

const checkEmail = () => {
    console.log('focus out')
    const emailInput = inputElement.value
    if(emailInput.includes('@')) {
        console.log('valid email')
    } else {
        console.error('invalid email')
    }
}

// set event listner
// inputElement.onkeyup = handleUserType;

// inputElement.onfocus = userSelectsInputElement

// inputElement.addEventListener('focusout', checkEmail)

// const product = {
//     imageLink: "https://images.squarespace-cdn.com/content/v1/5575cf30e4b022db0f14920f/1650084730232-34HEID2W06HQC68TLWBL/E8B57BE9-B2C1-46E0-8E98-5F0A53B89A39.jpeg?format=1500w",
//     title: 'Best Shoes',
//     description: 'title describes it, these are very very good shoes you should buy it',
//     price: +(Math.random() * 100).toFixed(2) ,
//     quantity: +(Math.random() * 100).toFixed(),
//     sellOne: (event) => {
//         if(product.quantity > 0) {
//             product.quantity -= 1;
//             if (product.quantity === 0) {
//                 console.log('disbale button')
//                 const purchaseButton = event.target;
//                 purchaseButton.classList.add('disabled')
//             }
//         } else {
//             console.error('we dont have stuff to sell')
//         }
//         product.populateData();
//     },
//     print: () => {
//         console.log(`we have ${product.quantity}  of ${product.title}`)
//     },
//     populateData: () => {
//         const imageElement = document.getElementById('prodcutImage');
//         imageElement.setAttribute('src', product.imageLink)
//         const productIdElement = document.getElementById('productID');
//         productIdElement.innerHTML = product.title;
//         const productDescElement = document.getElementById('productDesc');
//         productDescElement.innerHTML = `${product.description} we have ${product.quantity} of it`
//         const purchaseElement = document.getElementById('purchase');
//         purchaseElement.addEventListener('click', product.sellOne);
//         purchaseElement.innerText = `Buy one for ${product.price}`
//     }
// }

// constructor - generates an object for you

const productConstructor = (imageLinkParam, titleParam, descParam) => {
    return {
        imageLink: imageLinkParam,
        title: titleParam,
        description: descParam,
        price: +(Math.random() * 100).toFixed(2) ,
        quantity: +(Math.random() * 100).toFixed(),
        sellOne: function (event)  {
            if(this.quantity > 0) {
                this.quantity -= 1;
                if (this.quantity === 0) {
                    console.log('disbale button')
                    const purchaseButton = event.target;
                    purchaseButton.classList.add('disabled')
                }
            } else {
                console.error('we dont have stuff to sell')
            }
            this.populateData();
        },
        print: () => {
            console.log(`we have ${this.quantity}  of ${this.title}`)
        },
        populateData: () => {
            const imageElement = document.getElementById('prodcutImage');
            imageElement.setAttribute('src', product.imageLink)
            const productIdElement = document.getElementById('productID');
            productIdElement.innerHTML = product.title;
            const productDescElement = document.getElementById('productDesc');
            productDescElement.innerHTML = `${product.description} we have ${this.quantity} of it`
            const purchaseElement = document.getElementById('purchase');
            purchaseElement.addEventListener('click', product.sellOne);
            purchaseElement.innerText = `Buy one for ${product.price}`
        }
    }
}

const product = productConstructor(
    "https://images.squarespace-cdn.com/content/v1/5575cf30e4b022db0f14920f/1650084730232-34HEID2W06HQC68TLWBL/E8B57BE9-B2C1-46E0-8E98-5F0A53B89A39.jpeg?format=1500w", 
    "Best Shoes",
    "title describes it, these are very very good shoes you should buy it"
)

const product2 = productConstructor(
    './hat.jpg',
    'Best Hats',
    'Cool hats you can leave by the pool'
)

product.populateData();



