document.getElementById("discount").addEventListener("click", function () {
    const price = document.getElementById('price');
    const priceget = price.innerText;
    const priceNow = parseFloat(priceget);
    const priceSet = priceNow - (priceNow * 0.3);
    price.innerText = priceSet;
    const discount = document.getElementById('discount');
    discount.style.display = 'none';
    
    const prices = document.getElementById('Pay');
    const pricesGet = prices.innerText;
    const pricesNow = parseFloat(pricesGet);
    const pricesSet = pricesNow - (pricesNow * 0.3);
    prices.innerText = pricesSet;
    
});


document.getElementById("coupon").addEventListener("click", function () {

    const open = document.getElementById('open');
    open.classList.remove('hidden');
    document.getElementById('h-btn').addEventListener('click', function(){
        const couponGet = document.getElementById('input').value;
        couponGet.value = '';
        if (couponGet == 'give30'){
            const price = document.getElementById('price');
            const priceget = price.innerText;
            const priceNow = parseFloat(priceget);
            const priceSet = priceNow - (priceNow * 0.3);
            price.innerText = priceSet;
            const discount = document.getElementById('discount');
            discount.style.display = 'none';
            
            const prices = document.getElementById('Pay');
            const pricesGet = prices.innerText;
            const pricesNow = parseFloat(pricesGet);
            const pricesSet = pricesNow - (pricesNow * 0.3);
            prices.innerText = pricesSet;
        }

        

     })

});