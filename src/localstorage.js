function getLocalStorage () {

    let cartCards= [];

    if(localStorage.getItem('cards')=== null){
        localStorage.setItem('cards',JSON.stringify(cartCards));
    }

    let cardss = JSON.parse(localStorage.getItem('cards'));
    const lengthArr = cardss?.length
    const lastArray = cardss?.slice(lengthArr - 1)
    const resultSum = lastArray[0]?.length
    
    window.onload = function() {

        addBasket();
        function addBasket() {
            let badge = document.querySelector('.basket');
            if(resultSum?.length === undefined){
                badge.innerText = 0;
            }
            else{
                badge.innerText = resultSum;
            }
        }
    }
}

export default getLocalStorage



