const _loading = document.querySelector('._4emnV');

const Timeline = function() {
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
    let totalPage = 1;
    const app = document.querySelector(selector); 

    const create = async function() {
        timelineController.ajaxMore();
        totalPage = await timelineModel.getTotalPage();
        onEvent();
    }

    const timelineController = (function() {
        const ajaxMore = async function() {
            const list = await timelineModel.getTimeline();
            let html = '';
            list.forEach(data => {
                html += template.replace(/{{ *(\w+) *}}/g, (m, key) => data[key] || '');
            })
            timelineView.append(html);
        }

        const scrollMore = async function(){
            // TODO 타임아웃 이벤트를 통해 성능튜닝을 하신 것 같습니다. 좋은 방법인 것 같아요.
            // if (timer) {
            //     clearTimeout(timer);
            // }   
            // timer = setTimeout(function() {
                // TODO 방법1 - 푸터의 시작점 - 살짝 위 (스크롤값 하드코딩)
                // TODO 방법2 - 해당영역의 시작점 + 해당영역의 세로사이즈 - 살짝 위 (스크롤값 하드코딩)
                // TODO 방법3 - 해당영역의 시작점 + 해당영역의 페이지사이즈 * (페이지 -1 ~ -0.5 정도 상대값)
                // TODO document.querySelector('footer')의 DOM탐색이 반복적으로 일어나고 있습니다 - 변수에 DOM객체를 캐싱 해주세요
                if(pageYOffset + document.scrollingElement.offsetHeight < document.querySelector('footer').offsetTop - 500) { return; }
                if('' === _loading.style.display) { return; }
                
                _loading.style.display = '';
                await timelineController.ajaxMore()
                if(page > totalPage) {
                    window.removeEventListener('scroll', scrollMore);
                }
                _loading.style.display = 'none';
            // }, 200);
        };

        return {
            ajaxMore: ajaxMore,
            scrollMore: scrollMore
        }
    }());

    const timelineModel = (function() {
        const getTimeline = async function() {
            const { data } = await axios(url + page++);
            const list = data.data.map(l => l.reduce((o, v, i) => (o[`src${i+1}`] = v, o), {}));
            return list;
        }

        const getTotalPage = async () => {
            const {data} = await axios.get(url+'info');
            return data.data.totalPage;
        };

        return {
            getTimeline: getTimeline,
            getTotalPage: getTotalPage
        }
    }());

    const timelineView = (function() {
        app.innerHTML = '';

        const render = function(html) {
            app.innerHTML = html;
        }

        const append = function(html) {
            app.innerHTML += html;
        }

        return {
            append: append
        }
    }());

    const onEvent = function() {
        window.addEventListener('scroll' , timelineController.scrollMore)
    }

    const offEvent = function() {
        window.removeEventListener('scroll', timelineController.scrollMore);
    }

    const destroy = function(){
        offEvent();
    }

    create();

    return {
        destroy : destroy
    }
};

const root = (async function() {
    // header
    // footer
    // gnb
    // lnb
    let content = new Timeline();

    document.querySelectorAll('.fx7hk > a').forEach(tabButton => {
        tabButton.addEventListener('click', async function(e) {
            if('' === _loading.style.display) { return; }
            _loading.style.display = '';
            content.destroy();
            // content = null;
            content = new Timeline();
            _loading.style.display = 'none';
        });
    });

}())





// FIXME totalPage를 info API에서 받고, page가 totalPage에 닿으면 이벤트 reomve 해주세요
// let timer; 


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