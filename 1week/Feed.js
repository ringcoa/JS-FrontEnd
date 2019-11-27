const Feed = (function(){

    const _feed = document.querySelector('#feed')
    const _url = 'https://my-json-server.typicode.com/it-crafts/mockapi/feed/'
    let _totalPage = 1;
    let _page =0;
    let _domTop = 0;
    let _domSize = 0;

    const create = async function(){
        const data = await getFeedInfoData()
        _totalPage = data.totalPage
        let datas = await getMoreFeedData()
        renderMoreFeed(await getMoreFeedData())
        const clientRect = _feed.getBoundingClientRect()
        _domTop = clientRect.top;
        _domSize = clientRect.height
        addEvent()
    }

    const destory = function(){
        removeEvent()
    }

    const init = ()=>{
        
    }

    const getFeedInfoData = async ()=>{
        const res = await fetch(_url +'info');
        const { data } = await res.json();
        return data; 
    }

    const getMoreFeedData = async()=>{
        const res = await fetch(_url +(_page+1));
        _page++
        const { data } = await res.json();
        console.log(data)
        return data; 
    }

    const renderMoreFeed = function(datas){
        let html = '';
        datas.forEach(data => {
            html += createHtml(data)
        });
        _feed.innerHTML += html
    }

    const createHtml = function({img, text, commnetCount, clipCount}) {
        return `<article class="M9sTE h0YNM SgTZ1 "><header class="Ppjfr UE9AK wdOqh"><div class="RR-M- h5uC0 mrq0Z" role="button" tabindex="0"><canvas class="CfWVH" height="126" width="126" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><span class="_2dbep " role="link" tabindex="0" style="width: 32px; height: 32px;"><img alt="twicetagram님의 프로필 사진" class="_6q-tv" src="https://scontent-icn1-1.cdninstagram.com/vp/60d5672c78325263e8a9b6d7bf4d8550/5E87F77A/t51.2885-19/s150x150/14350502_2130269970532564_1274547492301570048_a.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"></span></div><div class="o-MQd "><div class=" "><div class="e1e1d"><h2 class="BrX75"><a class="FPmhX notranslate nJAzx" title="twicetagram" href="javascript:;">twicetagram</a></h2></div></div><div class="M30cS"><div></div><div class="JF9hh"></div></div></div></header><div class="_97aPb "><div role="button" tabindex="0" class="ZyFrc"><div class="eLAPa kPFhm"><div class="KL4Bh" style="padding-bottom: 100%;"><img class="FFVAD" src=" https://raw.githubusercontent.com/it-crafts/mockapi/master/${img}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div></div></div><div class="eo2As "><section class="ltpMr Slqrh"><span class="fr66n"><button class="dCJp8 afkep"><span aria-label="좋아요" class="glyphsSpriteHeart__outline__24__grey_9 u-__7"></span></button></span><span class="_15y0l"><button class="dCJp8 afkep"><span aria-label="댓글 달기" class="glyphsSpriteComment__outline__24__grey_9 u-__7"></span></button></span><span class="_5e4p"><button class="dCJp8 afkep"><span aria-label="게시물 공유" class="glyphsSpriteDirect__outline__24__grey_9 u-__7"></span></button></span><span class="wmtNn"><button class="dCJp8 afkep"><span aria-label="저장" class="glyphsSpriteSave__outline__24__grey_9 u-__7"></span></button></span></section><section class="EDfFK ygqzn"><div class=" Igw0E IwRSH eGOV_ ybXk5 vwCYk "><div class="Nm9Fw"><a class="zV_Nj" href="javascript:;">좋아요 <span>${clipCount}</span>개</a></div></div></section><div class="KlCQn EtaWk"><ul class="k59kT"><div role="button" class="ZyFrc"><li class="gElp9 " role="menuitem"><div class="P9YgZ"><div class="C7I1f X7jCj"><div class="C4VMK"><h2 class="_6lAjh"><a class="FPmhX notranslate TlrDj" title="twicetagram" href="javascript:;">twicetagram</a></h2><span><span>${text}</span></span></div></div></div></li></div><li class="lnrre"><button class="Z4IfV sqdOP yWX7d y3zKF " type="button">댓글 <span>${commnetCount}</span>개 모두 보기</button></li></ul></div><div class="k_Q0X NnvRN"><a class="c-Yi7" href="javascript:;"><time class="_1o9PC Nzb55" datetime="2019-11-22T14:05:19.000Z" title="2019년 11월 22일">13시간 전</time></a></div><section class="sH9wk _JgwE eJg28"><div class="RxpZH"><form class="X7cDz" method="POST"><textarea aria-label="댓글 달기..." placeholder="댓글 달기..." class="Ypffh" autocomplete="off" autocorrect="off" style="height: 18px;"></textarea><button class="sqdOP yWX7d y3zKF " disabled="" type="submit">게시</button></form></div></section></div><div class="MEAGs"><button class="dCJp8 afkep"><span aria-label="옵션 더 보기" class="glyphsSpriteMore_horizontal__outline__24__grey_9 u-__7"></span></button></div></article>`
        
    }

    const addEvent =()=>{
        window.addEventListener('scroll' , handler)
    }
    const removeEvent =()=>{
        window.removeEventListener('scroll' , handler)
    }

    const handler = async function(e) {
        if(pageXOffset + document.body.offsetHeight <= _domTop + _domSize * (_page - 0.5) ){
            return
        }


        renderMoreFeed(await getMoreFeedData())
    }

    create()
    return {
        destory : destory,
        getMoreFeedData : getMoreFeedData
    }
})

