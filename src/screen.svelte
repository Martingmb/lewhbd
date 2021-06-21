<script>
  import { fade } from 'svelte/transition';
  import VPlayer from './videoPlayer.svelte';
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
	import { writableArray, videoEnded, videoScene } from './store.js';
	let easterEgg = false;
  let checkVideoEnded = false;
	const konamiCheatCode = ['arrowUp', 'arrowUp', 'arrowDown', 'arrowDown', 'arrowLeft', 'arrowRight', 'arrowLeft', 'arrowRight', 'buttonB', 'buttonA'];
	const checkCheatCode = (keyCodesArray) => JSON.stringify(keyCodesArray) == JSON.stringify(konamiCheatCode);
	const happyBirthday = (keyCodesArray) => {
    if(checkCheatCode(keyCodesArray)) {
      easterEgg = checkCheatCode(keyCodesArray);
      videoScene.set(true);
    }
	};
	const unsubscribe = writableArray.subscribe((currentValue) => {happyBirthday(currentValue)});
  const unsubscribeVideo = videoEnded.subscribe((currentValue) => {
    checkVideoEnded = currentValue;
    });
   let controlsLayout = [
    'previousFrame',
    'playpause',
    'stop',
    'nextFrame',
    'progress',
    'frame',
    'loop',
    'spacer',
    'background',
    'snapshot',
    'zoom',
    'info',
  ];
  $: if(checkVideoEnded) {
    requestAnimationFrame(() => {window.scrollTo(0,300)});
  }
</script>

<style>
	.screen {
		display: flex;
		box-sizing: content-box;
		position: relative;
		width: 16em;
		height: 9em;
		color: #fff;
		font-family: "Montserrat", sans-serif;
		background-color: #e60012;
		border: 1em solid #000;
		border-left-width: 1.5em;
		border-right-width: 1.5em;
		border-radius: 0.375em;
	}
.logo {
  margin: auto;
  text-transform: uppercase;
}

.logo h1 {
  font-size: 1.0625em;
  letter-spacing: 0.125em;
}

.logo h1 span {
  display: block;
  font-size: 55%;
  letter-spacing: 0.40625em;
}

.message {
  color: black;
}

.icon {
  height: 3.3125em;
  margin-bottom: 0.4375em;
  text-align: center;
  animation: logo-icon 2s linear infinite;
}

.icon-part {
  position: relative;
  height: 100%;
  display: inline-block;
  margin: 0 0.03125em;
}

.icon-part.left {
  width: 1.59375em;
  border: 0.25em solid #fff;
  border-radius: 0.8125em 0 0 0.8125em;
}

.icon-part.right {
  width: 1.4375em;
  background-color: #fff;
  border-radius: 0 0.8125em 0.8125em 0;
  animation: logo-right 2s linear infinite;
}

.icon-part::before {
  content: '';
  position: absolute;
  left: 50%;
  display: block;
  width: 0.65625em;
  height: 0.65625em;
  transform: translateX(-50%);
  border-radius: 50%;
}

.icon-part.left::before {
  top: 0.46875em;
  background-color: #fff;
}

.icon-part.right::before {
  top: 1.5em;
  background-color: #e60012;
}

@keyframes logo-right {
  0% { transform: translateY(-40%); }
  25% { transform: translateY(-50%); }
  30% { transform: translateY(0); }
  70% { transform: translateY(0); }
  100% { transform: translateY(-40%); }
}

@keyframes logo-icon {
  0% { transform: translateY(0); }
  30% { transform: translateY(0); }
  35% { transform: translateY(10%); }
  40% { transform: translateY(0); }
  100% { transform: translateY(0); }
}
</style>



<div class="screen">
	{#if !easterEgg}
   <div class="logo">
       <div class="icon">
         <div class="icon-part left"></div>
         <div class="icon-part right"></div>
      </div>
      <h1><span>Nintendo</span>Switch</h1>
   </div>
	{:else if !checkVideoEnded}
	  <VPlayer/>
  {:else}
  <div class="logo">
    <LottiePlayer
      src="https://assets7.lottiefiles.com/private_files/lf30_rjuv1b.json"
      autoplay="{true}"
      loop="{true}"
      controls="{false}"
      renderer="svg"
      background="transparent"
      height="{0}"
      width="{500}"
      controlsLayout="{controlsLayout}"
    />
  </div>
	{/if}
</div>

{#if checkVideoEnded}
  <div transition:fade>
    <h1 class="message"><span>Happy </span>Birthday!</h1>
    <p class="message">To an incredible individual with amazing ideals and a kind heart.</p>
    <p class="message">It has been a pleasure knowing more of you. Hope that you have a good time and a great day.</p>
    <p class="message">-MG</p>
  </div>
{/if}