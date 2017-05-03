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
		"http://funnypictures2.fjcdn.com/funny_gifs/Animal_5c3a82_5880720.gif"
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
