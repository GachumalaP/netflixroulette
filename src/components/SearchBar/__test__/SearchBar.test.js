import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../SearchBar';

const mockPush = jest.fn();

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        searchTerm: 'one',
    }),
    useLocation: () => ({
        pathname: '/search/one'
    }),
    useHistory: () => ({
        push: mockPush,    
    }),
}));

const filterMoviesBySearchTerm = jest.fn();
const fetchMovies = jest.fn();

describe('SearchBar', () => {

    it('should render input element', () => {
        render(<SearchBar
                filterMoviesBySearchTerm={ filterMoviesBySearchTerm }
                fetchMovies={fetchMovies}  />);
        const inputElement = screen.getByTitle('inputField');
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type in input', () => {
        render(<SearchBar
            filterMoviesBySearchTerm={ filterMoviesBySearchTerm }
            fetchMovies={fetchMovies}  />);
        const inputElement = screen.getByTitle('inputField');
        fireEvent.change(inputElement, { target: {value: "beauty"}});
        expect(inputElement.value).toBe("beauty");
    });

    describe('OnSearch', () => {
        it('should be able to push the search term to url when submitted', () => {
            render(<SearchBar
                filterMoviesBySearchTerm={ filterMoviesBySearchTerm }
                fetchMovies={fetchMovies}  />);
            const inputElement = screen.getByTitle('inputField');
            const btnElement = screen.getByRole("button", {name: /Search/i})
            fireEvent.change(inputElement, { target: {value: "beauty"}});
            fireEvent.click(btnElement);
            expect(mockPush).toBeCalledWith("/search/beauty");
        });

        it('should trigger props.filterMoviesBySearchTerm when submitted', () => {
            render(<SearchBar
                filterMoviesBySearchTerm={ filterMoviesBySearchTerm }
                fetchMovies={fetchMovies}  />);
            const inputElement = screen.getByTitle('inputField');
            const btnElement = screen.getByRole("button", {name: /Search/i})
            fireEvent.change(inputElement, { target: {value: "beauty"}});
            fireEvent.click(btnElement);
            expect(filterMoviesBySearchTerm).toHaveBeenCalledTimes(1);
        });

        it('should be able to change the url when the search term is empty', () => {
            render(<SearchBar
                filterMoviesBySearchTerm={ filterMoviesBySearchTerm }
                fetchMovies={fetchMovies}  />);
            const inputElement = screen.getByTitle('inputField');
            const btnElement = screen.getByRole("button", {name: /Search/i})
            fireEvent.change(inputElement, { target: {value: ""}});
            fireEvent.click(btnElement);
            expect(mockPush).toBeCalledWith("/search");
        });

        it('should trigger props.fetchMovies when submitted with empty search term', () => {
            render(<SearchBar
                filterMoviesBySearchTerm={ filterMoviesBySearchTerm }
                fetchMovies={fetchMovies}  />);
            const inputElement = screen.getByTitle('inputField');
            const btnElement = screen.getByRole("button", {name: /Search/i})
            fireEvent.change(inputElement, { target: {value: ""}});
            fireEvent.click(btnElement);
            expect(fetchMovies).toHaveBeenCalledTimes(1);
        });
    });
});