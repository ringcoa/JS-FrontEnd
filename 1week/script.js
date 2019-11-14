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
        // TODO 버튼 누를 때는 1페이지로 새로 요청을 해야 함
        if('' === _loading.style.display) {
            page = 1;
        }
        _loading.style.display = '';
        await timeline.render();
        _loading.style.display = 'none';
    });
});

let timer; 
window.addEventListener('scroll' , function(){

    if (timer) {
        clearTimeout(timer);
    }   
    timer = setTimeout(function() {
        if(app.offsetHeight < window.scrollY   ) {
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