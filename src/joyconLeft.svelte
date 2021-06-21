<script>
	import { writableArray } from './store.js';
	
	const addToArray = (keyCode) => {
		$writableArray = [...$writableArray, keyCode];
	};
	
	const handleClick = (keyCode) => {
		addToArray(keyCode)
	}
</script>

<style>
	.joy-con {
  position: absolute;
  top: 0;
  width: 3.8125em;
  height: 100%;
  background-color: #83868d;
  backface-visibility: hidden;
  border: 0;
}

.joy-con.left {
  right: calc(100% + 0.03125em);
  border-radius: 2.5em 0.25em 0.125em 2.5em;
  box-shadow:
    inset 0.125em -0.125em 0.375em rgba(0,0,0,0.5),
    inset -0.3125em 0 0.0625em -0.25em rgba(0,0,0,0.25),
    inset 0.375em 0.5625em 0.5em -0.25em #83868d,
    0.40625em 0.25em 0 -0.375em #222;
}

.joy-con.left::before {
  content: '';
  position: absolute;
  top: 0.125em;
  left: 0.0625em;
  display: block;
  width: calc(100% - 0.0625em);
  height: 50%;
  border-radius: 2.5em 0.25em 0 0;
  box-shadow: inset 0.125em 0.3125em 0.125em -0.25em rgba(255,255,255,0.75);
  filter: blur(0.0625em);
}
	
.button-group {
  position: absolute;
  left: 50%;
  width: 45%;
  padding-bottom: 45%;
  transform: translateX(-50%);
}

.left .button-group {
  top: 5.375em;
  margin-left: 2.5%;
}

.button {
  position: absolute;
  width: 0.75em;
  height: 0.75em;
  margin: -0.375em;
  color: rgba(255,255,255,0.6);
  background-color: #49494b;
  border-radius: 100%;
  box-shadow:
    inset 0 -0.0625em 0.125em rgba(0,0,0,0.75),
    inset 0 0.125em 0.125em -0.0625em rgba(255,255,255,0.4),
    0 0 0.03125em 0.0625em rgba(0,0,0,0.6),
    0 0.0625em 0.25em 0.03125em rgba(0,0,0,0.5);
  cursor: pointer;
}

.button:active {
  box-shadow:
    inset 0 -0.0625em 0.125em rgba(0,0,0,0.75),
    inset 0 0.125em 0.125em -0.0625em rgba(255,255,255,0.4),
    0 0 0.03125em 0.0625em rgba(0,0,0,0.6);
}

.button:nth-child(1) {
  top: 0;
  left: 50%;
}

.button:nth-child(2) {
  top: 50%;
  right: 0;
}

.button:nth-child(3) {
  bottom: 0;
  left: 50%;
}

.button:nth-child(4) {
  top: 50%;
  left: 0;
}

.button.arrow::before,
.button.arrow::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.125em solid transparent;
  border-bottom: 0.25em solid rgba(255,255,255,0.1);
  border-top: none;
}

.button.arrow::after {
  top: calc(50% - 0.03125em);
  border-bottom: 0.25em solid #272b2d;
}

.button.arrow.right::before,
.button.arrow.right::after {
  margin-left: 0.03125em;
  transform: translate(-50%, -50%) rotate(90deg);
}

.button.arrow.down::before,
.button.arrow.down::after {
  margin-top: 0.03125em;
  transform: translate(-50%, -50%) rotate(180deg);
}

.button.arrow.left::before,
.button.arrow.left::after {
  margin-left: -0.03125em;
  transform: translate(-50%, -50%) rotate(270deg);
}

.stick {
  position: absolute;
  left: 50%;
  width: 1.75em;
  height: 1.75em;
  margin: -0.375em;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.6);
  background-color: #49494b;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0.0625em 100%, 100% 0.0625em, 100%;
  background-image:
    linear-gradient(
      to bottom,
      #222,
      #111
    ),
    linear-gradient(
      to bottom,
      #222,
      #333
    ),
    linear-gradient(
      to bottom,
      #666,
      #111
    );
  border-radius: 100%;
  box-shadow:
    inset 0 -0.0625em 0.125em rgba(0,0,0,0.75),
    inset 0 0.125em 0.125em -0.03125em rgba(0,0,0,0.2),
    inset 0 0.1875em 0.125em -0.0625em rgba(255,255,255,0.3),
    0 0 0.09375em 0.0625em rgba(0,0,0,0.75),
    0 0.375em 1em 0.0625em rgba(0,0,0,0.4);
  cursor: pointer;
}

.stick:active {
  box-shadow:
    inset 0 -0.0625em 0.125em rgba(0,0,0,0.75),
    inset 0 0.125em 0.125em -0.03125em rgba(0,0,0,0.2),
    inset 0 0.1875em 0.125em -0.0625em rgba(255,255,255,0.3),
    0 0 0.09375em 0.0625em rgba(0,0,0,0.75),
    0 0.375em 0.75em 0.0625em rgba(0,0,0,0.4);
}

.stick::before,
.stick::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 75%;
  height: 75%;
  transform: translate(-50%,-50%);
  background-repeat: no-repeat;
  background-position: center;
  background-image:
    linear-gradient(
      to bottom,
      #666,
      #222
    );
  border-radius: 50%;
  box-shadow: inset 0 0 0.125em rgba(255,255,255,0.08);
}

.stick::before {
  width: 85%;
  height: 85%;
  background-size: 0.0625em 100%, 100% 0.0625em, 100%;
  background-image:
    linear-gradient(
      to bottom,
      #444,
      #111
    ),
    linear-gradient(
      to bottom,
      #222,
      #333
    ),
    linear-gradient(
      to bottom,
      #222,
      #666
    );
  box-shadow: none;
}

.left .stick {
  top: 2.5em;
  margin-left: 2.5%;
}

.select {
  position: absolute;
  background-color: #49494b;
  cursor: pointer;
}

.select {
  top: 1.125em;
  right: 0.375em;
  width: 0.625em;
  height: 0.1875em;
  border-radius: 0.03125em;
  box-shadow:
    inset 0 -0.03125em 0.0625em rgba(0,0,0,0.5),
    inset 0 0.03125em rgba(255,255,255,0.2),
    0 0 0.03125em 0.03125em rgba(0,0,0,0.6),
    0 0.09375em 0.125em -0.03125em rgba(0,0,0,0.4);
}

.select:active {
  box-shadow:
    inset 0 -0.03125em 0.0625em rgba(0,0,0,0.5),
    inset 0 0.03125em rgba(255,255,255,0.2),
    0 0 0.03125em 0.03125em rgba(0,0,0,0.6),
    0 0.09375em 0.125em -0.03125em rgba(0,0,0,0.15);
}
	
.capture {
  position: absolute;
  bottom: 2.875em;
  right: 0.8125em;
  width: 0.6875em;
  height: 0.6875em;
  background-color: #444;
  border-radius: 0.09375em;
  box-shadow:
    inset 0 0.25em 0.5em -0.0625em rgba(255,255,255,0.1),
    inset 0 0.015625em 0.03125em -0.015625em rgba(255,255,255,0.5),
    inset 0 0 0.03125em rgba(0,0,0,1),
    0 0.015625em 0 0.03125em rgba(0,0,0,0.75);
  cursor: pointer;
}

.capture::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  Height: 70%;
  transform: translate(-50%,-50%);
  background-color: #3b3f40;
  border-radius: 50%;
  box-shadow:
    inset 0 0.0625em 0.0625em -0.03125em rgba(0,0,0,0.75),
    inset 0 -0.03125em 0.03125em -0.03125em rgba(255,255,255,0.5);
}

.capture:active {
  box-shadow:
    inset 0 0.25em 0.5em -0.0625em rgba(255,255,255,0.1),
    inset 0 0.015625em 0.03125em -0.015625em rgba(255,255,255,0.5),
    inset 0 0 0.03125em rgba(0,0,0,1),
    0 0.015625em 0 0.03125em rgba(0,0,0,0.5);
}
	
.shoulder {
  position: absolute;
  z-index: -1;
  top: -0.125em;
  display: block;
  width: 5.5em;
  height: 2.5em;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100%;
  border-radius: 5em 5em 0 0;
  cursor: pointer;
}

.shoulder.l {
  left: -0.125em;
  background-image:
    radial-gradient(
      circle at 3em 0.125em,
      rgba(15,15,15,1) 0.125em,
      rgba(15,15,15,0) 0.15125em
    ),
    radial-gradient(
      circle at 0.34375em 1.5em,
      rgba(15,15,15,1) 0.125em,
      rgba(15,15,15,0) 0.15125em
    ),
    radial-gradient(
      circle at 0.875em -0.625em,
      rgba(68,68,68,1) 1.75em,
      rgba(15,15,15,1) 2.15625em,
      rgba(15,15,15,0) 2.1875em
    );
}

.shoulder.l:active {
  top: -0.0625em;
  left: -0.0625em;
}

</style>

<div class="joy-con left">
    <div class="button-group">
      <div class="button arrow up" on:click={() => {handleClick('arrowUp')}}></div>
      <div class="button arrow right" on:click={() => {handleClick('arrowRight')}}></div>
      <div class="button arrow down" on:click={() => {handleClick('arrowDown')}}></div>
      <div class="button arrow left" on:click={() => {handleClick('arrowLeft')}}></div>
    </div>
    
    <div class="stick"></div>
    <div class="select"></div>
    <div class="capture"></div>
    <div class="shoulder l"></div>
  </div>