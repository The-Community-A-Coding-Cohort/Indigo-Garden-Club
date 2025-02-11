<script>
    let title = "";
    let description = "";
    let genre = "";
    let posterUrl = "";
    let videoUrl = "";
  
    let error = "";
    let success = "";
  
    async function handleSubmit(event) {
      event.preventDefault();
      
      // Check if user is authenticated (dummy check)
      const isAuthenticated = localStorage.getItem("authenticated") === "true";
      if (!isAuthenticated) {
        error = "You must be logged in to add a movie.";
        return;
      }
      
      const movie = { title, description, genre, posterUrl, videoUrl };
      try {
        const res = await fetch('/api/add-movie', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(movie)
        });
        const data = await res.json();
        if (res.ok) {
          success = "Movie added successfully!";
          error = "";
          // Clear form fields
          title = "";
          description = "";
          genre = "";
          posterUrl = "";
          videoUrl = "";
        } else {
          error = data.error || "Failed to add movie.";
          success = "";
        }
      } catch (err) {
        error = err.message;
        success = "";
      }
    }
  </script>
  
  <style>
    form {
      max-width: 500px;
      margin: 2rem auto;
      background: #222;
      padding: 1rem;
      border-radius: 4px;
      color: #fff;
    }
    input, textarea {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 0.5rem;
      background: #444;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #555;
    }
    .error {
      color: red;
    }
    .success {
      color: green;
    }
  </style>
  
  <form on:submit|preventDefault={handleSubmit}>
    <h2>Add a New Movie</h2>
    {#if error}
      <div class="error">{error}</div>
    {/if}
    {#if success}
      <div class="success">{success}</div>
    {/if}
    <input type="text" placeholder="Title" bind:value={title} required />
    <textarea placeholder="Description" bind:value={description} required></textarea>
    <input type="text" placeholder="Genre" bind:value={genre} required />
    <input type="url" placeholder="Poster URL" bind:value={posterUrl} required />
    <input type="url" placeholder="Video URL" bind:value={videoUrl} required />
    <button type="submit">Submit Movie</button>
  </form>