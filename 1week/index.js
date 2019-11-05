var app = document.getElementById('app')
var loading = document.querySelector('._4emnV')
var dataJson = 'https://my-json-server.typicode.com/it-crafts/mockapi/timeline'
var imgData =[];
var viewImgHtml = ``;

 fetch(dataJson).then(function(response){
     //console.log(response)
     return response.json();
   }).then(function(myJson){
       imgData.push(...myJson)
    }).then(init)

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
