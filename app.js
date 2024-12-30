let video = document.getElementById('videojs');
let btn = document.getElementById('btnVideo');

btn.addEventListener('click',function(){
    console.log(video.paused);
    if(!video.paused){
        document.getElementById('imgPause').classList.add('d-none');
        document.getElementById('imgPlay').classList.remove('d-none');
        video.pause();
    }else{
        document.getElementById('imgPlay').classList.add('d-none');
        document.getElementById('imgPause').classList.remove('d-none');
        video.play();
    }
});


let video_2 = document.getElementById('videojs-2');
let btn_2 = document.getElementById('btnVideo-2');

btn_2.addEventListener('click',function(){
    console.log(video_2.paused);
    if(!video_2.paused){
        document.getElementById('imgPause-2').classList.add('d-none');
        document.getElementById('imgPlay-2').classList.remove('d-none');
        video_2.pause();
    }else{
        document.getElementById('imgPlay-2').classList.add('d-none');
        document.getElementById('imgPause-2').classList.remove('d-none');
        video_2.play();
    }
});