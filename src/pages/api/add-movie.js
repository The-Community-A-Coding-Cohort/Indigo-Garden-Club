import { addMovie } from '../../data/moviesStore.js';

export async function post({ request }) {
  try {
    const movie = await request.json();
    // Simple validation: require title and poster URL
    if (!movie.title || !movie.posterUrl) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields (title and posterUrl).' }),
        { status: 400 }
      );
    }
    // Generate an id if not provided
    if (!movie.id) {
      movie.id = Date.now().toString();
    }
    addMovie(movie);
    return new Response(JSON.stringify({ success: true, movie }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}