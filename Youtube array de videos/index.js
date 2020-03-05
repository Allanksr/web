      const scrollmenuvideos = document.getElementById('scrollmenuvideos')	 
	  var tempDom = ''
	  const arrayVideos = ['8p_ZUGEIA4I','ipXgWtcWtOg','p0nW4XP2fZE','a-XgoJSNx-k','wivhDxzWOb4']
	  var arrayPlayers = []
	  var eventsData = {}
	  const tag = document.createElement('script')
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)	  
	  arrayVideos.forEach(loadVideos)
	 
	function loadVideos(videoId, index, array){	 	
		tempDom = tempDom+'<iframe allowfullscreen="" frameborder="0" id="'+videoId+'" src="https://www.youtube.com/embed/'+videoId+'?enablejsapi=1"></iframe>'
		arrayPlayers.push(arrayVideos[index])	
		scrollmenuvideos.innerHTML = tempDom
	}
	 
	function onYouTubePlayerAPIReady() {
	   for (let i = 0; i < arrayVideos.length; i++) { 
			   arrayPlayers[i] = new YT.Player(arrayVideos[i], {
				events: {
				   height: '500',
				   width:  '500',
				'onReady': onReady
				}
			  });
	   
	   arrayEvents(arrayPlayers[i])
	   }
	  
	}

	function arrayEvents(player) {
		console.log('player :', player)	
			player.addEventListener('onStateChange', function(event) {	
				eventsData[player.a.id] = [event]			
				let keys = Object.keys(eventsData)		
				 for (let i = 0; i < keys.length; i++) { 
					 if(keys[i] == player.a.id){					
					  // console.log('VideoIsPlaying')			 
					 }else{	  
					  if (event.data == YT.PlayerState.PLAYING) {
						  eventsData[keys[i]][0].target.pauseVideo()
						}			 	
					 }
					 
				 }
			});
	}

	function onReady(event) {
		eventsData[event.target.a.id] = [event]
	}
