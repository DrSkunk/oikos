import React, { Component } from 'react';
import styled from 'styled-components';
import { parseAction } from '../util/gameLogic';
import modes from '../util/modes';
import Tile from '../atoms/Tile';

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 500px;
`;

export default class Game extends Component {
  constructor(props) {
    super(props);
    console.log('Game');
    this.state = { mode: modes.moveWorker, selectedTile: null };
  }

  onTileClick = (index, tile) => {
    console.log('Click', index, tile);

    // Toggle selected tile
    this.setState(state => {
      if (state.mode === modes.moveWorker) {
        if (state.selectedTile === index) {
          return { selectedTile: null };
        }
        return { selectedTile: index };
      }
    });

    this.setState(state => {
      const newState = parseAction(state, index, tile);
      return newState;
    });
  };

  setMode = newMode => {
    console.log('newMode', newMode);
    if (newMode !== modes.moveWorker) {
      this.setState({ mode: newMode, selectedTile: null });
    } else {
      this.setState({ mode: newMode });
    }
  };

  handleChange = event => {
    const team = parseInt(event.target.value);
    this.setState({ team });
  };

  render() {
    const { game } = this.props;
    const { mode, team, selectedTile } = this.state;
    const tiles = Object.values(game.board).map((tile, i) => (
      <Tile
        key={'tile' + i}
        level={tile.level}
        roof={tile.roof}
        player={tile.player}
        onClick={() => {
          this.onTileClick(i, tile);
        }}
        selected={i === selectedTile}
      />
    ));
    return (
      <Wrapper>
        <label>
          Team
          <select value={team} onChange={this.handleChange}>
            <option value="0">Red</option>
            <option value="1">Green</option>
            <option value="2">Blue</option>
            <option value="3">Purple</option>
          </select>
        </label>

        <button
          onClick={() => this.setMode(modes.moveWorker)}
          disabled={mode === modes.moveWorker}
        >
          Move worker
        </button>
        <button
          onClick={() => this.setMode(modes.addLevel)}
          disabled={mode === modes.addLevel}
        >
          Add level
        </button>
        <button
          onClick={() => this.setMode(modes.removeLevel)}
          disabled={mode === modes.removeLevel}
        >
          remove level
        </button>
        <button
          onClick={() => this.setMode(modes.addWorker)}
          disabled={mode === modes.addWorker}
        >
          Add Worker
        </button>
        <button
          onClick={() => this.setMode(modes.removeWorker)}
          disabled={mode === modes.removeWorker}
        >
          Remove worker
        </button>
        <button
          onClick={() => this.setMode(modes.addRoof)}
          disabled={mode === modes.addRoof}
        >
          Add roof
        </button>
        <button
          onClick={() => this.setMode(modes.removeRoof)}
          disabled={mode === modes.removeRoof}
        >
          Remove roof
        </button>
        <Board>{tiles}</Board>
      </Wrapper>
    );
  }
}
