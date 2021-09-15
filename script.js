let profileMemoji = document.querySelector('.profileimage');
let profileMemojiPeace = document.querySelector('.profileimagehover');

profileMemoji.addEventListener('mouseover', function(event) {
	profileMemojiPeace.style.display = 'block';
	profileMemoji.style.display = 'none';

});


profileMemoji.addEventListener('mouseout', function(event) {
		profileMemojiPeace.style.display = 'none';
	profileMemoji.style.display = 'block';
})

