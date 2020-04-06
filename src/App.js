import React, { Component } from 'react';
import shortId from 'shortid';
import styled from 'styled-components';
import firebase from './util/firebase';
import Game from './components/Game';
import { createGame } from './util/api';

const Wrapper = styled.div`
  width: 540px;
  margin: 0 auto;
`;

function startNewGame(refresh = false, gameId = null) {
  if (!gameId) {
    gameId = shortId();
  }
  const newUrl =
    window.location.origin + window.location.pathname + '?gameId=' + gameId;
  if (refresh) {
    window.history.pushState(null, null, newUrl);
  } else {
    window.history.replaceState(null, null, newUrl);
  }
}
export default class App extends Component {
  constructor(props) {
    super(props);
    let gameId = new URL(window.location).searchParams.get('gameId');
    if (gameId === null) {
      gameId = shortId();
      startNewGame(false, gameId);
    }
    const safeGameId = gameId.replace(/[^\w\s]/gi, '');
    if (gameId !== safeGameId) {
      startNewGame(false, safeGameId);
    }
    firebase.gameId = gameId;

    this.state = { loading: true, gameId };
  }

  componentDidMount() {
    this.updateListener = firebase.ref.on('value', (data) => {
      const game = data.val();
      if (game === null) {
        createGame(this.state.gameId).catch((error) => {
          this.setState({ error: true });
        });
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
        <button
          onClick={() => {
            startNewGame(true);
          }}
        >
          Start nieuw spel
        </button>
      </Wrapper>
    );
  }
}
