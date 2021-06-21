<script>
	import Volume from './volume.svelte';
	import Screen from './screen.svelte';
	import JoyconLeft from './joyconLeft.svelte';
	import JoyconRight from './joyconRight.svelte';
</script>
<style>
.switch {
  position: relative;
  z-index: 1;
  margin: auto;
}

.body {
  position: relative;
  width: 20.125em;
  height: 11.75em;
  padding: 0.375em 0.5625em;
  background-repeat: no-repeat;
  background-position: 0 0, 0 0, 100% 0;
  background-size: 100%, 51%, 51%;
  background-image:
    linear-gradient(
      to bottom,
      rgba(56,58,61,0) 50%,
      rgba(56,58,61,1) 50%
    ),
    radial-gradient(
      circle at 0 0,
      rgba(56,58,61,0) 0.5em,
      rgba(56,58,61,1) 0.515625em
    ),
    radial-gradient(
      circle at 100% 0,
      rgba(56,58,61,0) 0.5em,
      rgba(56,58,61,1) 0.515625em
    );
  border-radius: 0.125em;
  box-shadow:
    inset 0 -1.25em 0.5em -1em rgba(0,0,0,0.5);
}

.body::before,
.body::after {
  content: '';
  position: absolute;
  display: block;
}

.body::before {
  top: 0;
  left: 0.4375em;
  width: calc(100% - 0.875em);
  height: 0.3125em;
  background-image:
    linear-gradient(
      to bottom,
      rgba(255,255,255,0),
      rgba(255,255,255,0.25),
      rgba(255,255,255,0)
    );
}

.body::after {
  top: 0.5625em;
  left: 0;
  width: 100%;
  height: calc(100% - 0.5625em);
  border-radius: 0 0 0.125em 0.125em;
  box-shadow:
    inset 0.0625em 0 rgba(255,255,255,0.08),
    inset -0.0625em 0 rgba(255,255,255,0.08);
}
</style>

<div class="switch">
	<div class="body">
		<Volume/>
		<Screen/>
	</div>
	<JoyconLeft/>
	<JoyconRight/>
</div>