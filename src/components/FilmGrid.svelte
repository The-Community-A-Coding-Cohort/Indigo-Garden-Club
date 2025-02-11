<script lang="ts">
  import FilmCard from './FilmCard.svelte';
  import type { Film } from '../types';

  export let films: Film[] = [];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {#each films as film (film.id)}
    <FilmCard {film} />
  {/each}
</div>