
const imgPath = 'https://raw.githubusercontent.com/it-crafts/mockapi/master';

const Slider = (() => {
    const urlBase = 'https://my-json-server.typicode.com/it-crafts/mockapi/detail/';

    const Slider = function(param = {}) {
        const slider = document.querySelector(param.selector);
        const wrapper = slider.querySelector('#wrapper');
        const pagebar = slider.querySelector('#pagebar');
        const leftBtn = slider.querySelector('#left');
        const rightBtn = slider.querySelector('#right');
        const ul = wrapper.querySelector('#slide');
        const url = urlBase + param.id;
        let width = wrapper.offsetWidth; // FIXME 화면 리사이즈시 변경
        let page = 1;
        let total = 1;
        const create = async () => {
            let data = await getData(url);
            total = data.imgList.length;
            renderImg(ul, data, width);
            addEvent();
           
        }
    
        const destroy = () => {
            removeEvent();
        }
    
        // TODO left/right 합칠 수 있으면 합치기
        const addEvent = () => {
            leftBtn.addEventListener('click', slideLeft);
            rightBtn.addEventListener('click', slideRight);
        }
    
        const removeEvent = () => {
            leftBtn.removeEventListener('click', slideLeft);
            rightBtn.removeEventListener('click', slideRight);
        }
    
        const slideLeft = function() {
            if(page <= 1) { return; }
            pagebar.children[page - 1].classList.remove('XCodT');
            page--;
            wrapper.style.transform = 'translateX(' + (-page + 1) * width +  'px)';
            pagebar.children[page - 1].classList.add('XCodT');
        }

 
        
    
        const slideRight = function() {
            if(page >= total) { return; }
            pagebar.children[page - 1].classList.remove('XCodT');
            page++;
            wrapper.style.transform = 'translateX(' + (-page + 1) * width +  'px)';
            pagebar.children[page - 1].classList.add('XCodT');
        }
    
        create();

        return Object.assign(Object.create(Slider.prototype), {
            destroy
        });
    }
    
    const getData = async function(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data.data;
        
    }

    
    const renderImg = function(ul, data, width) {
        ul.innerHTML = data.imgList.reduce((html, img) => {
            html += createLi({
                width: width,
                img: imgPath + img
            });
            return html;
        }, '');
    }

 
    const createLi = function(data = {}) {
        const template = `<li class='_-1_m6' style='opacity: 1; width: ${data.width}px;'><div class='bsGjF' style='margin-left: 0px; width: ${data.width}px;'><div role='button' tabindex='0' class='ZyFrc'><div class='eLAPa RzuR0'><div class='KL4Bh' style='padding-bottom: 124.907%;'><img class='FFVAD' decoding='auto' src='${data.img}' style='object-fit: cover;'></div><div class='_9AhH0'></div></div></div></div></li>`;
        return template;
    }
    
    Slider.prototype = {
        constructor: Slider,
        getData
    };

    return Slider;
})();







const lazyLoad = (()=>{
    
    const url = `https://my-json-server.typicode.com/it-crafts/mockapi/detail/1`
    const article = document.querySelector('#detailofTop')
    const create = async () => {
        let detailData = await getDetailImg(url)
        renderDetailImg(article , detailData)
        const img = document.querySelector('img[data-src]');
        img && lazyload(img);
    }

    const lazyload = img => {
        const options = { root: null, threshold: 0, rootMargin: "100px" }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                }
                const img = entry.target;
                img.setAttribute('src' , img.getAttribute('data-src'));
                img.removeAttribute('data-src');
                img.onload = (event) => {
                    const img = document.querySelector('img[data-src]')
                    img && lazyload(img);
                };
                observer.disconnect();
            });
        }, options);

        observer.observe(img);
    }
    
    const createArticle = function(detailImg) {
       
        return ` <article class="QBXjJ M9sTE h0YNM SgTZ1 Tgarh ">
        <img style="width: 100%; height: auto;" data-src=https://raw.githubusercontent.com/it-crafts/mockapi/master${detailImg}>
     </article>`
       
    };

   
    const renderDetailImg = function(article , detailData){
        let html ='' 
        detailData.forEach(el =>  html+= createArticle(el)

            )
         article.insertAdjacentHTML('afterend' ,html)
      

      console.log(detailData)
        
    }

      const getDetailImg = async function(url){
        const res = await fetch(url)
        const data = await res.json()
        return data.data.detailList
        
    }
    create() 
})()









let slider = new Slider({
    selector: '#slider',
    id: '1'
});

/*
4. 상품상세(+컨텐츠) : 슬라이드, 레이지로드
 - this/prototype, 클래스멤버, 순수함수 / 스코프 체인
*/ 

//78~87 35~39 42 43 섹션6 109 110 111
