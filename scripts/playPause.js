var audio = document.querySelector('audio')
var playpausebtn = document.querySelector("audio+img")
var count = 1
window.addEventListener('load',function(){
    playPause()
})
function playPause(){
    if(count==0){
        count=1
        playpausebtn.src = "./media/unmute.svg"
        audio.play()
    }else{
        count=0
        playpausebtn.src = "./media/mute.svg"
        audio.pause()
    }
}