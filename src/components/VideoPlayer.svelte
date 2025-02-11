<script>
    export let src = '';
    let videoElement;
    
    function play() {
      videoElement.play();
    }
    
    function pause() {
      videoElement.pause();
    }
    
    function handleTimeUpdate() {
      // Additional logic for scrub bars or subtitles could be added here.
    }
  </script>
  
  <style>
    .video-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: auto;
      background: #000;
    }
    video {
      width: 100%;
    }
    .controls {
      display: flex;
      justify-content: center;
      gap: 1rem;
      background: #333;
      padding: 0.5rem;
    }
    button {
      background: #444;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
    button:hover {
      background: #555;
    }
  </style>
  
  <div class="video-container">
    <video bind:this={videoElement} src={src} on:timeupdate={handleTimeUpdate} controls={false}></video>
    <div class="controls">
      <button on:click={play}>Play</button>
      <button on:click={pause}>Pause</button>
      <!-- Additional controls (scrub, volume, subtitles) can be added here -->
    </div>
  </div>