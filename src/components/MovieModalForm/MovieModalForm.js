import React, {useState} from 'react';
import { connect } from 'react-redux';
import '../MovieModal/MovieModal.css';
import './MovieModalForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { editMovie, postMovie } from '../../redux/movie/movieActions';

const MovieModalForm = ( props ) => {

    const [isSelectGenreOpen, setisSelectGenreOpen] = useState(false);

    const renderClickSelectGenre = () => {
      setisSelectGenreOpen(!isSelectGenreOpen);
    }

    var initialValues = {
      title:'',
      release_date:'',
      poster_path:'',
      vote_average: 0,
      runtime: 0,
      overview:'',
      genres: []
    }

    const schema = Yup.object({
      title: Yup.string().required('Movie title is required'),
      poster_path: Yup.string().required('*Movie url is required'),
      overview: Yup.string().required('overview is required'),
      runtime: Yup.number().required(),
      genres: Yup.array().of(Yup.string()).required(),

    })

    const onSubmit = (values) => {
      if(props.selectedMovie) {
        props.editMovie(values)
      }
      else {
        props.postMovie(values)
      }
    }   

    return (
      <Formik 
          initialValues={props.selectedMovie ? props.selectedMovie : initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
          >
            <Form>
              <div className="movie-form">
              <div className="row">
                <div className="col">
                <div className="form-group">
                    <label>Movie Name</label>
                    <Field type="text" name="title"/>
                    <ErrorMessage name="title" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Release Date</label>
                    <Field type="date" name="release_date"/>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Movie Url</label>
                    <Field type="text" name="poster_path" placeholder="http://" />
                    <ErrorMessage name="poster_path" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Rating</label>
                    <Field type="number" name="vote_average" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Genre</label>
                    <div className="select-genre-container">
                      <div 
                        className="select-genre"
                        onClick={renderClickSelectGenre}
                      >
                        <div className="select-genre-icon"> {`${isSelectGenreOpen === true ? '-' : '+'}`} </div>
                      </div>
                      <div 
                        role="group"
                        className={`select-genre-options ${isSelectGenreOpen === true  ? 'display-grid' 
                        : 'display-none'}`}>
                          <label>
                            <Field type="checkbox" name="genres" value="comedy"/> Comedy
                          </label>
                          <label>
                            <Field type="checkbox" name="genres" value="romance"/> Romance
                          </label>
                          <label>
                            <Field type="checkbox" name="genres"  value="drama"/> Drama
                          </label>
                          <label>
                            <Field type="checkbox" name="genres"  value="action" /> Action
                          </label>
                      </div>
                    </div>
                    <ErrorMessage name="genres"/>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Runtime</label>
                    <Field type="number" name="runtime"/>
                    <ErrorMessage name="runtime"/>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Overview</label>
                    <Field component="textarea" name="overview"/>
                    <ErrorMessage name="overview" />
                  </div>
                </div>
              </div>
              <div className="modal-form-buttons">
                <div className="col">
                  <div className="form-group">
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </div>
          </div>
        </Form>
      </Formik>
        
    );
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.movie.selectedMovie,
    movie: state.movie.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postMovie: (movie) => dispatch(postMovie(movie)),
    editMovie: (movie) => dispatch(editMovie(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieModalForm);