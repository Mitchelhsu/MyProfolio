$(function() {
    $(".trigger_popup_fricc").on('click', function(){
        $('.hover_bkgr_fricc').show();
     });
     $('.hover_bkgr_fricc').on('click', function(){
         $('.hover_bkgr_fricc').hide();
     });
     $('.popupCloseButton').on('click', function(){
         $('.hover_bkgr_fricc').hide();
     });
});

let player;
let currentPlay = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: playList[currentPlay],
        playerVars: {
            autoplay: 0,
            controls: 1,
            start: playTime[currentPlay][0],
            end: playTime[currentPlay][1],
            iv_load_policy: 3
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    $('h2').text(player.getVideoData().title);
    $('#playButton').on('click', function() {
        player.playVideo();
    });
}

function onPlayerStateChange(event) {
    if(Math.floor(player.getCurrentTime()) == playTime[currentPlay][1]) {
        if(currentPlay < playList.length - 1) {
            currentPlay++;
            player.loadVideoById({
                videoId: playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1],
                suggestedQuality: "large"
            });
        } else {
            currentPlay=0;
            player.cueVideoById({
                videoId:playList[currentPlay],
                startSeconds:playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestedQuality:"large"
            });
        }
    }
    $('h2').text(player.getVideoData().title);
}
