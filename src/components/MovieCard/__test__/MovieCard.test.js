import { render, screen } from '@testing-library/react';
import { MovieCard } from '../MovieCard';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

const MockMovieCard = () => {
    return(
        <Provider store={store}>
            <MovieCard movie={mockMovie} />
        </Provider>
    );
}

const mockMovie = {
    id: 337167,
    title: 'Fifty Shades Freeddd',
    tagline: 'Don\'t miss the climax',
    vote_average: 6.1,
    vote_count: 1195,
    release_date: '2018-02-07',
    poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    budget: 55000000,
    revenue: 136906000,
    genres: [
      'Drama',
      'Romance'
    ],
    runtime: 106
  }

describe('Movie card', () => {
    it('should render movie card', async() => {
        render(<MockMovieCard />);
        const MovieCardDivElement = await screen.findByTestId("movie-item-337167");
        expect(MovieCardDivElement).toBeInTheDocument();
    });

    // it("should render multiple movie cards", async() => {
    //     render(<MockMovieCard />);
    //     const MovieCardDivElements = await screen.findAllByTestId(/movie-item/i);
    //     expect(MovieCardDivElements.length).toBe(1);
    // });
})