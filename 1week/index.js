/*
1. 템플릿엔진 모듈
2. 컴포넌트


*/
const timelineComponent =`<div class="Nnq7C weEfm"><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa">
<div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{src1}}" style="object-fit: cover;"></div>
<div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
<div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{  src2 }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
<div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div>
<div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
<div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{ src3  }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
<div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div></div>`

// TODO 서브루틴이 전역함수로 선언되어 있습니다 - 모듈패턴으로 리팩토링 해보세요
const templateEngine = (function(jsonData , timeline) {
    var _app = document.getElementById('app')
    var _loading = document.querySelector('._4emnV')
    var _viewTab = document.querySelector('._9VEo1')
    var _imgData =[];
    var _viewImgHtml = timeline;
  
    

    (async function() {
        const res = await fetch(jsonData);
        _imgData = (await res.json());
       
        
    }());

    const getData = ()=>{
        console.log('gg')
    }

    return{
        testing : function(){
            console.log(_viewImgHtml)
        }   
    }


    // function getData(){
    //     imgData.forEach(element => {
    //         viewImgHtml = viewImgHtml+
    //     });
    // }

    
}('https://my-json-server.typicode.com/it-crafts/mockapi/timeline',timelineComponent))

//html += template.replace(/{{ *(\w+) *}}/g, (m, key) => data['key'] || '');


// const 타임라인컴포넌트 = (function(...args) {
//     let _privateField;
//     let publicField;

//     const _privateMethod = function() {

//     }
//     const publicMethod = function() {

//     }

//     return {
//         "publicMethod": publicMethod,
//         "publicField": publicField 
//     }
// }('1', '2', '3'))



// TODO 상태값을 사용할 경우, 모듈링 및 캡슐화하여 타 모듈에서 접근하여 오염되지 않도록 해주세요



// FIXME 필드명 src1, src2, src3이 하드코딩 되어 있습니다 - 아무 필드명이나 대응할 수 있도록 수정 해주세요 
// FIXME 템플릿이 하드코딩 되어 있습니다 - 임의의 템플릿을 대응할 수 있도록 구조변경 해주세요
view = {
    timeline:[]
}



function viewImg(){
    loading.style.display="none"
    app.innerHTML = viewImgHtml
}

function init (){
    getData()
    viewImg()
}