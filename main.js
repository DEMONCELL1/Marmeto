
const currentQuant = document.getElementById("qty");
const addQuant = document.getElementById("add-qty");
const removeQty = document.getElementById("remove-qty");
const pincode = document.getElementById("pincode");
const checkAvailabiltu = document.getElementById("check");
const addToCart = document.getElementById("add-to-cart");
let quantity = 1;
let userPincode = "";
let qt = 1;
let money =2599;

addQuant.addEventListener("click", (e) => {
	e.preventDefault();
    currentQuant.innerText = ++quantity;
    ++qt;
    if(qt>1){
        money = qt*2599
        console.log(money)
        document.getElementById("add-to-cart").innerHTML = "Add to Cart.₹"+money;
    }
    
    
});

removeQty.addEventListener("click", (e) => {
	e.preventDefault();
    if (quantity > 1) currentQuant.innerText = --quantity;
    if(qt>1)--qt;
    if(qt>=1){
        money = qt*2599
        console.log(money)
        document.getElementById("add-to-cart").innerHTML = "Add to Cart.₹"+money;
    }
    
});

pincode.addEventListener("change", (e) => {
	if (e.target.value !== "560017" && e.target.value !== "560103") {
		addToCart.disabled = true;
	}
});

 document.getElementById("add-to-cart").innerHTML = "Add to Cart . ₹"+money;