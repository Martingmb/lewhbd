<style>
	.volume {
  position: absolute;
  bottom: 100%;
  left: 2.625em;
  width: 1.6875em;
  height: 0.03125em;
  background-color: #555;
}

.volume::before,
.volume::after {
  content: '';
  position: absolute;
  bottom: 0;
  display: block;
  width: 36%;
  height: 0.0625em;
  background-color: #555;
  border-radius: 0.0625em 0.0625em 0 0;
  box-shadow: inset 0 0.03125em 0.03125em #333;
}

.volume::before {
  left: 0;
}

.volume::after {
  right: 0;
}
</style>

<div class="volume">
</div>