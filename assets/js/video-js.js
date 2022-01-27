//main banner js st
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");
function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}
circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});
//main banner js st


//*****about us st iframe ST*****
// on preview show
$('#videodemo-popup').on('show.bs.modal', function (e) {
	var idVideo = $(e.relatedTarget).data('id');
	$('#videodemo-popup .modal-body').html('<iframe class="video-iframe" src="https://www.youtube.com/embed/4zwUwe2DFrQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });
  //on close remove
  $('#videodemo-popup').on('hidden.bs.modal', function () {
	 $('#videodemo-popup .modal-body').empty();
  });
//*****about us st iframe END*****