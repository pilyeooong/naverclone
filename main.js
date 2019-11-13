var rankWrapper = document.querySelector('.navbar-rank');
var rank = document.querySelectorAll('.rank-item');
var totalRank = rank.length;
var rankboxHeight = rankWrapper.clientHeight;
var rankIndex = 0;
var slider = document.querySelector('.rank');

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

rankbox.addEventListener('mouseout', function(){
    rankbox.style.display = 'none';
})















