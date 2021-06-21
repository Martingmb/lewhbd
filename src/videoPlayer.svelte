<script>
	import { lastButtonPressed, videoEnded, videoScene } from './store.js';
	import { onMount, afterUpdate, beforeUpdate } from 'svelte';
	let video; 
	let videoSceneEnable;
	onMount(() => {
		video = document.getElementById("video")
		console.log(video, 'test');
	});
	beforeUpdate(() => {
		console.log('the component is about to update');
		lastButtonPressed.set('noButton');
	});
	const unsubscribeVideoScene = videoScene.subscribe((currentValue) => {
		videoSceneEnable = currentValue;
	})
	const videoControl = (button) => {
		$: if(videoSceneEnable && video != undefined) {
			switch (button) {
				case 'buttonA': 
					video.play();
					break;
				case 'buttonB': 
					video.pause();
					break;
			}
		}
	};
	
	const unsubscribe = lastButtonPressed.subscribe(button => {
		videoControl(button);
	});
	
	const handleVideoEnded = () => {
		videoEnded.set(true);
	};
</script> 

<video id='video' preload='none' poster="/images/bongo.jpg" on:ended={handleVideoEnded}>
    <source id='mp4' src="/video/hbd.mp4" type='video/mp4' />
</video>