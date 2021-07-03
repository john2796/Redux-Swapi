import React from "react";
import { connect } from "react-redux";
import { getData } from "../store/actions/index";
import CharacterList from "../components/CharacterList";
import { Button } from "reactstrap";

const URL = `https://swapi.co/api/people/`;
class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData(URL);
  }

  nextPage = e => {
    e.preventDefault();
    this.props.getData(this.props.next);
  };

  previousPage = e => {
    e.preventDefault();
    this.props.getData(this.props.prev);
  };

  render() {
    const { loading, next, prev, char } = this.props;

    return (
      <div className="CharactersList_wrapper">
        <h1>Starwars</h1>
        {loading && <h2>loading data...</h2>}
        <Button
          disabled={!prev ? true : null}
          color="info"
          onClick={this.previousPage}
        >
          Prev
        </Button>
        <Button
          disabled={!next ? true : null}
          color="info"
          onClick={this.nextPage}
        >
          Next{" "}
        </Button>

        <CharacterList characters={char} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  char: state.charsReducer.char,
  next: state.charsReducer.next,
  prev: state.charsReducer.prev,
  loading: state.charsReducer.loading
});

export default connect(
  mapStateToProps,
  {
    getData
  }
)(CharacterListView);
