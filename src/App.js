import React, { Component } from 'react';
import shortId from 'shortid';
import firebase from './util/firebase';
import Game from './components/Game';
import { createGame } from './util/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    let gameId = new URL(window.location).searchParams.get('gameId');
    if (gameId === null) {
      console.log(gameId);
      gameId = shortId();
      const newUrl = window.location.origin + '?gameId=' + gameId;
      window.history.replaceState(null, null, newUrl);
    }

    this.ref = firebase.db.ref('games').child(gameId);

    this.state = { loading: true, gameId };
  }

  componentDidMount() {
    this.updateListener = this.ref.on('value', data => {
      const game = data.val();
      console.log('game', game);

      if (game === null) {
        createGame(this.state.gameId).catch(error => {
          this.setState({ error: true });
        });
      } else {
        this.setState({
          game,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    // if (this.ref) {
    //   console.log('this/.ref', this.ref);
    //   this.ref.removeEventListener(this.updateListener);
    //  }
  }

  render() {
    const { loading, error, game } = this.state;
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
      <div>
        <Game game={game} />
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}
