import React from 'react';

const MovieCard = ({
  movie: {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
    imdb_id,
  },
}) => {
  // Detect if the movie is likely an anime
  const isAnime = original_language === 'ja';

  // MKVCinema piracy site for movies/series
  const piracySite = {
    name: 'MKVCinema',
    url: `https://mkvcinemas.com/search/${encodeURIComponent(title)}`,
  };

  // Redirect URL for anime
  const animeUrl = `https://hianime.to/search?keyword=${encodeURIComponent(title)}`;

  // YouTube trailer URL
  const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' trailer')}`;

  // IMDb URL (use imdb_id if available, else fallback to search)
  const imdbUrl = imdb_id
    ? `https://www.imdb.com/title/${imdb_id}/`
    : `https://www.imdb.com/find?q=${encodeURIComponent(title)}`;

  return (
    <div
      className="movie-card transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
    >
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `/no-movie.png`}
        alt={title}
        className="w-full h-auto"
      />

      <div className="mt-4 px-3 pb-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="content flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-2">
          <a
            href={imdbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rating flex items-center gap-1 hover:text-red-600 transition-colors duration-200"
            title="View on IMDb"
          >
            <img src="star.svg" alt="Star Icon" className="w-4 h-4" />
            <p>{vote_average ? vote_average.toFixed(1) : 'NA'}</p>
          </a>

          <span>•</span>

          <p className="lang uppercase">{original_language}</p>

          <span>•</span>

          <p className="year">
            {release_date ? release_date.split('-')[0] : 'N/A'}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {isAnime ? (
            // Anime: Watch Anime button
            <a
              href={animeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors duration-300"
            >
              🎬 Watch Anime
            </a>
          ) : (
            // Movies/Series: MKVCinema button
            <a
              href={piracySite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors duration-300"
            >
              🎬 Watch Movie/Series
            </a>
          )}

          {/* Trailer Button */}
          <a
            href={trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-300"
          >
            ▶ Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;