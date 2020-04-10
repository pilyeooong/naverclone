var rankWrapper = document.querySelector('.navbar-rank'); // 부모박스
var rank = document.querySelectorAll('.rank-item'); // 컨텐츠
var totalRank = rank.length //rank-item의 갯수
var rankboxHeight = rankWrapper.clientHeight; // rankWrapper의 내부 높이를 픽셀로 반환 -> 17px
var rankIndex = 0;
var slider = document.querySelector('.rank'); // rank-item을 담고있는 박스

slider.style.height = rankboxHeight * totalRank + 'px';



showRanks();

function showRanks() {
    
    for(var i=0;i<rank.length;i++){
        slider.style.top = -(rankboxHeight * rankIndex) + 'px';    
    }
    rankIndex++;
    if (rankIndex === totalRank) {
        rankIndex = 0;
    }
    setTimeout(showRanks, 2500); 
}

var newsWrapper = document.querySelector('.newswrapper');
var news = document.querySelectorAll('.news-item');
var totalnews = news.length;
var newsboxHeight = newsWrapper.clientHeight;
var newsIndex = 0;
var newsslider = document.querySelector('.yeonhap-contents');

newsslider.style.height = newsboxHeight * totalnews + 'px';

showNews();

function showNews() {
    
    for(var i=0;i<news.length;i++){
        newsslider.style.top = -(newsboxHeight * newsIndex) + 'px';    
    }
    newsIndex++;
    if (newsIndex === totalnews) {
        newsIndex = 0;
    }
    setTimeout(showNews, 3000); 
}


var rankboxrange = document.querySelector('.navbar-rank')
var rankbox = document.querySelector('.rankbox')

rankboxrange.addEventListener('mouseover', function(){
    rankbox.style.display = 'block';
})

rankbox.addEventListener('mouseover', function(){
    rankbox.style.display = 'block';
})

rankbox.addEventListener('mouseout', function(){
    rankbox.style.display = 'none';
})















