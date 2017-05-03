(function() {
	var button = document.getElementById("doggo");
	button.addEventListener("click", getNewDoggo);
	var newImageSrc =
		"https://media.tenor.co/images/43b5490d17e8563845b2d5ec90f24d3b/tenor.gif";
	var img = document.getElementById("doggoimg");
	var pupperPics = [
		"http://2static.fjcdn.com/pictures/D_aa7b67_5706532.jpg",
		"http://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/13166758_1606789379636046_1408643305_n.jpg?ig_cache_key=MTI0ODUxODgzNDE5NjYyNzM5Ng%3D%3D.2",
		"http://imgur.com/jWEVUxH",
		"https://i.redd.it/hcspqfkibv5x.gif",
		"http://funnypictures2.fjcdn.com/funny_gifs/Animal_5c3a82_5880720.gif",
		"https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/8/20/10/anigif_enhanced-buzz-32136-1377010400-18.gif",
		"https://i.giphy.com/qdwvYNmqw1vEs.gif",
		"https://i.giphy.com/PS66xB5cPXKzS.gif",
		"http://i.imgur.com/SA51jA7.gif",
		"https://media.giphy.com/media/vf0vmxc6uswA8/giphy.gif",
		"http://1.bp.blogspot.com/-oeQLeOnvh2U/U9Z8XgVdgoI/AAAAAAAAEUQ/doakbVq9Tv0/s1600/boxer-jumps-on-trampoline-o.gif"
	];
	function getNewDoggo() {
		function getRandomIntInclusive(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		debugger;
		return (img.src = pupperPics);
	}
})();
