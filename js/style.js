document.getElementById("discount-field").value = "0";
document.getElementById("coupon-field").value = "0";
document.getElementById("price-field").value = "0";
document.getElementById("final-price").value = "0";


document.getElementById('calculate-btn').addEventListener('click', function(){

  const productPriceField= getNumFromValue("price-field")
  const discountField= getNumFromValue("discount-field")
  const couponField= getNumFromValue("coupon-field")
  

  const totalDiscount= discountField+couponField
  const AfterDiscount= productPriceField-(productPriceField*totalDiscount/100)

  const finalPrice= document.getElementById("final-price")
  finalPrice.innerText=AfterDiscount


})

document.getElementById('reset-btn').addEventListener('click',function(){
  document.getElementById("discount-field").value = "0";
document.getElementById("coupon-field").value = "0";
document.getElementById("price-field").value = "0";
document.getElementById("final-price").innerText = "0";
})