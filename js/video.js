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
	

	document.getElementById("volume").innerHTML = video.volume * 100 + "%";

	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Stop video!");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	var speed = video.playbackRate;
	console.log("The video speed is: ", speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=0.9;
	var speed = video.playbackRate;
	console.log("The video speed is: ", speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	var video_time = video.currentTime;
	var video_duration = video.duration;
	if (video_time >= video_duration) {
		video.currentTime = 0;
	}
	console.log("The video is at: ", video_time);
	
});

document.querySelector("#mute").addEventListener("click", function() {
	
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML = "Unmute";
	}

	else {
		video.muted = false;
		this.innerHTML = "Mute";
	}
	
});


document.querySelector("#slider").oninput = function() {
	video.volume = document.querySelector("#slider").value/100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";

}

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");

	console.log("Style changed to Old School");
	
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");

	console.log("Style changed to Original");

});









