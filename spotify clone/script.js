console.log('welcome to spotify');
let songIndex=0;

let rangeProgress=document.querySelector('#rangeProgress');  //the range bar is trgetted.
let audioElement=new Audio('songs/1.mp3');   //here Audio id the class which play the song,this the sing is stored in the variable.
let masterPlay=document.querySelector('#masterPlay');  //the play/pause button has been targetted.
let gif=document.querySelector('#gif');

let songName_array=Array.from(document.getElementsByClassName('songName'))  //The entire songName class is trgetted and converted into the array.
let songNameTrack=document.getElementById('songNameTrack')








let songs=[       //the songs are stored in the list in the format of objects.
    {songName:"Salam-e-Ishq",FilePath:"songs/1.mp3",Coverpath:"covers/1.jpg"},
    {songName:"Huma-Huma",FilePath:"songs/2.mp3",Coverpath:"covers/2.jpg"},
    {songName:"Invisible",FilePath:"songs/3.mp3",Coverpath:"covers/3.jpg"},
    {songName:"Different-Heaven",FilePath:"songs/4.mp3",Coverpath:"covers/4.jpg"},
    {songName:"Tonight-Heros",FilePath:"songs/5.mp3",Coverpath:"covers/5.jpg"},
    {songName:"Rabba-Salam",FilePath:"songs/6.mp3",Coverpath:"covers/6.jpg"},
    {songName:"Skhiyan",FilePath:"songs/7.mp3",Coverpath:"covers/7.jpg"},
    {songName:"Bhula-dhena",FilePath:"songs/8.mp3",Coverpath:"covers/8.jpg"},
    {songName:"Tuamri-kasam",FilePath:"songs/9.mp3",Coverpath:"covers/9.jpg"},
    {songName:"Hma-may-pyaar",FilePath:"songs/10.mp3",Coverpath:"covers/10.jpg"},
]


//accesing the elements by using the songname_array.
songName_array.forEach((element,i)=>{    //here the element is considered as the element i the songName _list ie:all of the songname classes.  // i stands for index.
// console.log(element)
// console.log(`the index position is ${i}`);   //by using the index position,the dta from the objects of list is obtained.
document.getElementsByClassName('coverImage')[i].src=songs[i].Coverpath;  //the classes are iterated.
document.getElementsByClassName('songName')[i].innerText=songs[i].songName;  // ''



})

//adding event listener
//handling play/pause
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime <=0){    //if suppose the play button is clicked,if the audio must be either paused or at the starting stage.
    audioElement.play();  //the song would be played,now the icon should be turn into pause
    masterPlay.classList.add('fa-pause')     //by default the music bar will be on paused,if it is clicked,then it should turned to the pause button
    masterPlay.classList.remove('fa-play')    // so the play button is removed
    gif.style.opacity=1;
    console.log('play button is clicked');
}
else{
    audioElement.pause();  //the song would be played,now the icon should be turn into pause
    masterPlay.classList.remove('fa-pause')     //by default the music bar will be on paused,if it is clicked,then it should turned to the pause button
    masterPlay.classList.add('fa-play')
    gif.style.opacity=0;
    console.log('pause button is clicked');
}
})

// audio timeUpdate for the song
audioElement.addEventListener('timeupdate',()=>{      //adding event for the time update of teb audio.

    // console.log('timeupdate')
    // console.log(audioElement.duration)
    // console.log(audioElement.currentTime)
    //updating seekbar;
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);  //the time has been calculated.
    rangeProgress.value=progress;  //the seekbar has been worked based upon the value;
})

//Eventlistener,when we click the seek bar to chnge the time duration.
rangeProgress.addEventListener('click',()=>{
    //we need to relocate to tye current time.
    // formula : percentage(valur of seekbar) = (CT/D)*100
    //CT=(P*D)/100;
    audioElement.currentTime=parseInt(rangeProgress.value*audioElement.duration)/100;  //The current time has been updagted,whenever we touch the seekbar.
})




//----------------------------------//


const makeSongPlay=(()=>{   //this functio is used to stop all the elements,after the particular element will be activated.
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.add('fa-play')
       element.classList.remove('fa-pause')
    })
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{    //the array is iterated by using the forEach loop.
element.addEventListener('click',(e)=>{   //the each class is iterated as the element.
// console.log(e)
if(audioElement.paused || audioElement.currentTime <=0){
songIndex=parseInt(e.target.id)
makeSongPlay()    //this function is used to stop all other remaining songs.
e.target.classList.remove('fa-play')
e.target.classList.add('fa-pause')
audioElement.src=`songs/${songIndex+1}.mp3`  //first we have to choose the audio file.
audioElement.currentTime=0;
audioElement.play();
songNameTrack.innerText=songs[songIndex].songName 
masterPlay.classList.add('fa-pause')     //by default the music bar will be on paused,if it is clicked,then it should turned to the pause button
masterPlay.classList.remove('fa-play') 
}
else
{
    e.target.classList.add('fa-play')
    e.target.classList.remove('fa-pause')
    audioElement.pause();

}
})
})



//adding the event to the previous and next element.
document.getElementById('forward').addEventListener('click',()=>{
    if(songIndex>=9)
    songIndex=0
else
songIndex+=1

audioElement.src=`songs/${songIndex+1}.mp3`
audioElement.play();
audioElement.currentTime=0;
gif.style.opacity=1;
songNameTrack.innerText=songs[songIndex].songName 
masterPlay.classList.add('fa-pause')     //by default the music bar will be on paused,if it is clicked,then it should turned to the pause button
masterPlay.classList.remove('fa-play') 
})

document.getElementById('backward').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex=9
else
songIndex-=1

audioElement.src=`songs/${songIndex+1}.mp3`
audioElement.play();
audioElement.currentTime=0;
gif.style.opacity=1;
songNameTrack.innerText=songs[songIndex].songName   //the sog name is targrted for the respective index and showed it near the gif.
masterPlay.classList.add('fa-pause')     //by default the music bar will be on paused,if it is clicked,then it should turned to the pause button
masterPlay.classList.remove('fa-play') 
})

