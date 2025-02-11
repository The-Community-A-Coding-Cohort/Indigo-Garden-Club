<script>
  export let film = {
    id: '',
    title: '',
    posterUrl: '',
    genre: ''
  };
</script>

<style>
  .film-card {
    background: #121212;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.05);
  }
  
  .film-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(255, 255, 255, 0.15);
  }
  
  img {
    width: 100%;
    border-radius: 6px;
  }
  
  .title {
    margin-top: 0.75rem;
    font-size: 1.1rem;
    color: #fff;
  }
</style>

<a href={`/films/${film.id}`} class="film-card">
  <img src={film.posterUrl} alt={film.title} />
  <div class="title">{film.title}</div>
</a>