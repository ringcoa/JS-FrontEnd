const _loading = document.querySelector('._4emnV');

const timeline = (function() {
    const template = `<div class="Nnq7C weEfm"><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa">
        <div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{src1}}" style="object-fit: cover;"></div>
        <div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
        <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{  src2 }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
        <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div>
        <div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
        <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{ src3  }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
        <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div></div>`;
    const url = 'https://my-json-server.typicode.com/it-crafts/mockapi/timeline/';
    const selector = '#app';
    let page = 1;
    const child = document.querySelector('.Nnq7C')
    


    const render = async function() {
        // model
       
        const { data } = await axios(url + page++);
        
        console.log(data)
    
        
        const list = data.data.map(l => l.reduce((o, v, i) => (o[`src${i+1}`] = v, o), {}));
        

        // controller
        let html = '';
        list.forEach(data => {
            //console.log(data);
            html += template.replace(/{{ *(\w+) *}}/g, (m, key) => data[key] || '');
        })

        // view
        const app = document.querySelector(selector); 
        app.innerHTML += html;

    }


    const del = function(){ 
        console.log(page)
        page = 1;
        console.log(page)

        app.removeChild(child)
      
    }

    return {
        render: render,
        del : del
    }
}());


const test = function(test) {
    let _test = test;
    console.log(_test);
}
test('test'); // test
test(); // undefined

function Constructor() {
    let _test;
    this.test = function(test) {
        _test = _test || test;
        console.log(_test);
    }
};
const TEST = new Constructor();
TEST.test('TEST'); // TEST
TEST.test(); // TEST

const root = (async function() {
   
    await timeline.render();
    // await timeline.render();
    // await timeline.render();
    // await timeline.render();
    // await timeline.render();
    // await timeline.render();
}())



document.querySelectorAll('.fx7hk > a').forEach(tabButton => {
    tabButton.addEventListener('click', async function(e) {
        // TODO 버튼 누를 때는 1페이지부터 새로 요청을 해야 함
        // FIXME 조건이 잘못걸린 것 같습니다
        if('' === _loading.style.display) {
            // FIXME page값은 timeline 모듈 내부에 있습니다 - 리셋할 수 있는 API를 timeline모듈이 제공하고, 해당 API를 호출 해주세요
            page = 1;
        }
        _loading.style.display = '';
        await timeline.render();
        _loading.style.display = 'none';
    });
});

// FIXME totalPage를 info API에서 받고, page가 totalPage에 닿으면 이벤트 reomve 해주세요
let timer; 
window.addEventListener('scroll' , function(){
    // TODO 타임아웃 이벤트를 통해 성능튜닝을 하신 것 같습니다. 좋은 방법인 것 같아요.
    if (timer) {
        clearTimeout(timer);
    }   
    timer = setTimeout(function() {
        // TODO 방법1 - 푸터의 시작점 - 살짝 위 (스크롤값 하드코딩)
        // TODO 방법2 - 해당영역의 시작점 + 해당영역의 세로사이즈 - 살짝 위 (스크롤값 하드코딩)
        // TODO 방법3 - 해당영역의 시작점 + 해당영역의 페이지사이즈 * (페이지 -1 ~ -0.5 정도 상대값)
        // TODO document.querySelector('footer')의 DOM탐색이 반복적으로 일어나고 있습니다 - 변수에 DOM객체를 캐싱 해주세요
        if(pageYOffset + document.scrollingElement.offsetHeight > document.querySelector('footer').offsetTop - 500) {
            // TODO 로딩중엔 새 페이지 요청하지 못하게 막아주세요 - _loading.style.display 사용
            timeline.render()
        }
    }, 200);
})


// window.addEventListener('scroll', async function(e) {
//     // TODO 화면의 적절한 위치까지 갔을 때만 Ajax 요청
//       if(app.offsetHeight < window.scrollY   ) { // TODO 100 대신 페이지의 거의 마지막에 닿은 Y좌표를 동적으로 가져온다`

//       
        
//       }
//     if('' === _loading.style.display) {
//         return;
//     }
//     _loading.style.display = '';
//     // TODO info API에서 totalPage 받아와서, 거기까지만 요청하게 수정

//     await timeline.render();
//     _loading.style.display = 'none';
// });