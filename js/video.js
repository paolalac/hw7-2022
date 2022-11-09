var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay=false;
	video.loop=false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video!");
	video.play();
	var volume=document.getElementById("slider").value;
	document.getElementById("volume").innerHTML=volume+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Stop video!");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	document.querySelector('video').playbackRate *= 0.9;
	var speed = document.querySelector('video').playbackRate;
	console.log("The video speed is: ", speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	document.querySelector('video').playbackRate *= 1.1;
	var speed = document.querySelector('video').playbackRate;
	console.log("The video speed is: ", speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	document.querySelector('video').currentTime += 10;
	var video_time = document.querySelector('video').currentTime;
	var video_duration = document.querySelector('video').duration;
	if (video_time >= video_duration) {
		document.querySelector('video').currentTime = 0;
	}
	console.log("The video is at: ", video_time);
	
});

document.querySelector("#mute").addEventListener("click", function() {
	
	if (document.querySelector('video').muted = false) {
		document.querySelector('video').muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}

	else {
		document.querySelector('video').muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	
});





