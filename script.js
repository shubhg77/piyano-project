const allkeys = document.querySelectorAll(".piyano .key");
// console.log(allkeys);
allkeys .forEach((key, i) => {
    // console.log(key,i);
    key.onclick=()=>{
        // alert("hii shubh you are playing piano");
        const music_url="musickeys/key"+(i+1)+".mp3";
        console.log(music_url);
        const audio=new Audio(music_url);
        audio.play();
    }
});
