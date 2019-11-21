const Shopping = function(){
    //const shoppingList = document.querySelector('.jjbaz')

    const DomString = {
        shoppingList : document.querySelector('.jjbaz'),
        plusBtn : document.getElementsByClassName('plus'),
        minusBtn : document.getElementsByClassName('minus')
    }

    const cartData = [
        {"name":"상품명1","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/01.jpg","price":5000,"quantity":2},
        {"name":"상품명2","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/02.jpg","price":7000,"quantity":2},
        {"name":"상품명3","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/03.jpg","price":6000,"quantity":3},
        {"name":"상품명4","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/04.jpg","price":10000,"quantity":1},
        {"name":"상품명5","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/05.jpg","price":3000,"quantity":5}
    ]

    const listTemplte = `
    <li class="wo9IH">
        <div class="uu6c_">
            <div class="t2ksc">
                <div class="RR-M- SAvC5" role="button" tabindex="0">
                    <canvas class="CfWVH" height="120" width="120" style="position: absolute; top: -5px; left: -5px; width: 40px; height: 40px;"></canvas><a class="_2dbep qNELH kIKUG" href="javascript:;" style="width: 56px; height: 56px;"><img alt="" class="_6q-tv" src='{{src}}'></a>
                </div>
                <div class="enpQJ">
                    <div class="d7ByH">
                        <a class="FPmhX notranslate _0imsa " title="yeongdong07" href="javascript:;"> {{ name}}</a>
                    </div>
                    <div class="wFPL8 ">
                        {{price}}원 × {{quantity}}개 ＝{{total}}원
                    </div>
                </div>
            </div>
            <div class="Pkbci">
                <button class="sqdOP L3NKy y3zKF plus" type="button" style="margin-bottom: 2px;">+</button>
                <button class="sqdOP L3NKy y3zKF minus" type="button" style="margin-top: 2px;">-</button>
            </div>
        </div>
    </li>`

    const ShoppingController = function(){
        
        let html = '';
        const handlePlus = function(e){
            console.log(e)
        }
        
        const handleMinus = function(e){
            console.log('마이너스')
        }
        
        cartData.forEach(function(el , idx , arr){
            html += listTemplte.replace(/{{ *(name) *}}/g , cartData[idx]["name"]).replace(/{{ *(src) *}}/g , cartData[idx]["src"]).replace(/{{ *(price) *}}/g , cartData[idx]["price"]).replace(/{{ *(quantity) *}}/g , cartData[idx]["quantity"]).replace(/{{ *(total) *}}/g , cartData[idx]["quantity"]*cartData[idx]['price'])
        })

        DomString.shoppingList.innerHTML = html;

        Array.from(DomString.plusBtn).forEach(plusBtn => plusBtn.addEventListener('click', handlePlus))
        Array.from(DomString.minusBtn).forEach(minusBtn => minusBtn.addEventListener('click', handleMinus))
    }();




  return {
    
  }
  
};

const init = function(){
    let content = new Shopping();
}();