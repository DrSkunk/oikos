import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from './util/firebase';
import Game from './components/Game';
import { createGame } from './util/api';

const Wrapper = styled.div`
  width: 540px;
  margin: 0 auto;
`;

export default class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    firebase.gameId = this.props.room;

    console.log(firebase, this.props.room);

    this.state = { loading: true };
  }

  componentDidMount() {
    this.updateListener = firebase.ref.on('value', (data) => {
      const game = data.val();
      if (game === null) {
        try {
          createGame(this.state.gameId);
        } catch (error) {
          this.setState({ error: true });
        }
      } else {
        this.setState({
          game,
          loading: false,
        });
      }
    });
  }

  render() {
    const { loading, error, game, gameId } = this.state;
    if (error) {
      return (
        <div>
          An error occured, please refresh page to try again. If this persists,
          contact <a href="https://sebastiaanjansen.be/contact">Sebastiaan</a>.
        </div>
      );
    }
    if (loading) {
      return <div>Loading....</div>;
    }
    return (
      <Wrapper>
        <Game game={game} gameId={gameId} />
      </Wrapper>
    );
  }
}
