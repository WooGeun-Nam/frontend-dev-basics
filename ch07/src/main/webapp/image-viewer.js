imageViewer = {
	init: function() {
		$(imageViewer._init);
	},
	_init: function() {
		$('.buttons #btn-change').click(imageViewer._changeImage);
		$('.buttons #btn-slideshow').click(imageViewer._slideImage);
	},
	_slideImage: function(){
		if(!imageViewer._intervalId) {
			imageViewer._intervalId = setInterval(imageViewer._changeImage, 1000);
			$('.buttons #btn-slideshow').text("슬라이드쇼 끝");
		} else {
			clearInterval(imageViewer._intervalId);
			imageViewer._intervalId=null;
			$('.buttons #btn-slideshow').text("슬라이드쇼 시작");
		}
	},
	_changeImage: function() {
		var index = Math.floor(Math.random()*imageViewer._images.length);
		
		while($(".image-viewer img").attr("title")===imageViewer._images[index].name) {
			index = Math.floor(Math.random()*imageViewer._images.length);
		}
		
		// console.log(index);
		
		$(".image-viewer img").attr({
			src:"images/"+imageViewer._images[index].file,
			title:imageViewer._images[index].name
		});
	},
	_intervalId : null,
	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	},{
		name: '사막',
		file: 'Desert.jpg'
	},{
		name: '수국',
		file: 'Hydrangeas.jpg'
	},{
		name: '해파리',
		file: 'Jellyfish.jpg'
	},{
		name: '코알라',
		file: 'Koala.jpg'
	},{
		name: '풍경',
		file: 'Lighthouse.jpg'
	},{
		name: '펭귄',
		file: 'Penguins.jpg'
	},{
		name: '튤립',
		file: 'Tulips.jpg'
	}]
};