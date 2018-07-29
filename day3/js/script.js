window.addEventListener('DOMContentLoaded', function() {
    
    let products = document.querySelectorAll(".product"),
        buttons = document.getElementsByTagName("button"),
        open = document.querySelector(".open");
    
    function createCart() {
        let cart = document.createElement("div"),
            field = document.createElement("div"),
            heading = document.createElement("h2"),
            close = document.createElement("button");       
        
        cart.classList.add("cart");
        field.classList.add("cart-field");
        close.classList.add("close");
        
        close.textContent = "Закрыть";
        heading.textContent = "Ваша корзина: ";
        
        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(close);
    }   
    createCart();
    
    let field = document.querySelector(".cart-field"),
        cart = document.querySelector(".cart"),
        close = document.querySelector(".close");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            let item = products[i].cloneNode(true),
                btn = item.querySelector("button");
            
            btn.textContent = "Убрать";
            field.appendChild(item);
            products[i].remove();
            
            if(btn.textContent == "Убрать") {
                btn.addEventListener('click', function() {
                    item.remove();
                    let shop = document.querySelector(".shop");
                    shop.appendChild(products[i]);
                                
                                     })
            }
        })
    };
    
    open.addEventListener('click', function() {
        cart.style.display = "block";
    });
    close.addEventListener("click", function() {
        cart.style.display = "none";
    })
       
});

