// TODO 서브루틴이 전역함수로 선언되어 있습니다 - 모듈패턴으로 리팩토링 해보세요
const test = (function(...args) {
    let _privateField;
    let publicField;

    const _privateMethod = function() {

    }
    const publicMethod = function() {

    }

    return {
        "publicMethod": publicMethod,
        "publicField": publicField
    }
}('1', '2', '3'))

// TODO 모듈 내부에서 재사용할 DOM 참조를 미리 캐싱 해두면 좋습니다 - 잘 하셨어요
var app = document.getElementById('app')
var loading = document.querySelector('._4emnV')
// TODO 모듈링시 API 주소값은 모듈 외부에서 파라미터로 전달받도록 해주세요 
var dataJson = 'https://my-json-server.typicode.com/it-crafts/mockapi/timeline'
// TODO 상태값을 사용할 경우, 모듈링 및 캡슐화하여 타 모듈에서 접근하여 오염되지 않도록 해주세요
var imgData =[];
var viewImgHtml = ``;

 fetch(dataJson).then(function(response){
     //console.log(response)
     return response.json();
   }).then(function(myJson){
        // FIXME 불필요한 디스트럭쳐링 같습니다 - 본 케이스엔 이슈 없어보이니, imgData = myJson 이렇게 해주세요
       imgData.push(...myJson)
    }).then(init)

// FIXME 필드명 src1, src2, src3이 하드코딩 되어 있습니다 - 아무 필드명이나 대응할 수 있도록 수정 해주세요 
// FIXME 템플릿이 하드코딩 되어 있습니다 - 임의의 템플릿을 대응할 수 있도록 구조변경 해주세요
function getData(){
    imgData.forEach(element => {
        viewImgHtml = viewImgHtml+ `
        <div class="Nnq7C weEfm">
            <div class="v1Nh3 kIKUG _bz0w">
                <a href="javascript:;">
                <div class="eLAPa">
                    <div class="KL4Bh">
                        <img class="FFVAD" decoding="auto" src="${element['src1']}">
                    </div>  
                    <div class="_9AhH0">
                    </div>
                </div>
                <div class="u7YqG">
                    <span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7">
                    </span>
                </div>
                </a>
            </div>
            <div class="v1Nh3 kIKUG _bz0w">
                <a href="javascript:;">
                <div class="eLAPa">
                    <div class="KL4Bh">
                        <img class="FFVAD" decoding="auto"  src="${element['src2']}">
                    </div>
                    <div class="_9AhH0">
                    </div>
                </div>
                <div class="u7YqG">
                    <span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7">
                    </span>
                </div>
                </a>
            </div>
            <div class="v1Nh3 kIKUG _bz0w">
                <a href="javascript:;">
                <div class="eLAPa">
                    <div class="KL4Bh">
                        <img class="FFVAD" decoding="auto" src="${element['src3']}">
                    </div>
                    <div class="_9AhH0">
                    </div>
                </div>
                <div class="u7YqG">
                    <span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7">
                    </span>
                </div>
                </a>
            </div>
        </div>
        `
    });
}

function viewImg(){
    loading.style.display="none"
    app.innerHTML = viewImgHtml
}

function init (){
    getData()
    viewImg()
}
