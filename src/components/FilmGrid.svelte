<script>
    import FilmCard from './FilmCard.svelte';
    export let films = []; // Array of film objects
  </script>
  
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
  </style>
  
  <div class="grid">
    {#each films as film (film.id)}
      <FilmCard {film} />
    {/each}
  </div>