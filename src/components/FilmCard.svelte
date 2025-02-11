<script lang="ts">
  import type { Film } from '../types';
  export let film: Film;
</script>

<div class="card w-72 bg-neutral shadow-xl hover:scale-105 transition-all">
  <figure>
    <img src={film.posterUrl} alt={film.title} class="rounded-t-lg" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{film.title}</h2>
    <p>{film.genre}</p>
    <div class="card-actions justify-end">
      <a href={`/films/${film.id}`} class="btn btn-outline">Watch</a>
    </div>
  </div>
</div>