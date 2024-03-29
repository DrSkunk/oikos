import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { resetBoard } from '../util/api';
import { parseAction } from '../util/gameLogic';
import modes from '../util/modes';
import Tile from '../atoms/Tile';

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 540px;
  margin-top: 10px;
`;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: modes.moveWorker, selectedTile: null, team: 1 };
  }

  onTileClick = (index, tile) => {
    // Toggle selected tile
    this.setState((state) => {
      if (state.mode === modes.moveWorker) {
        if (state.selectedTile === index) {
          return { selectedTile: null };
        } else if (state.selectedTile === null) {
          return { selectedTile: index };
        } else {
          parseAction(state, index, this.props.game, tile);
          return { selectedTile: null };
        }
      } else {
        parseAction(state, index, this.props.game, tile);
      }
    });
  };

  setMode = (newMode) => {
    if (newMode !== modes.moveWorker) {
      this.setState({ mode: newMode, selectedTile: null });
    } else {
      this.setState({ mode: newMode });
    }
  };

  handleChange = (event) => {
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
      <div>
        <label>
          Team
          <select value={team} onChange={this.handleChange}>
            <option value="1">Red</option>
            <option value="2">Green</option>
            <option value="3">Blue</option>
            <option value="4">Purple</option>
          </select>
        </label>

        <Button
          variant="secondary"
          onClick={() => this.setMode(modes.moveWorker)}
          disabled={mode === modes.moveWorker}
        >
          Move worker
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.setMode(modes.addLevel)}
          disabled={mode === modes.addLevel}
        >
          Add level
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.setMode(modes.removeLevel)}
          disabled={mode === modes.removeLevel}
        >
          remove level
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.setMode(modes.addWorker)}
          disabled={mode === modes.addWorker}
        >
          Add Worker
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.setMode(modes.removeWorker)}
          disabled={mode === modes.removeWorker}
        >
          Remove worker
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.setMode(modes.addRoof)}
          disabled={mode === modes.addRoof}
        >
          Add roof
        </Button>
        <Button
          variant="secondary"
          onClick={() => this.setMode(modes.removeRoof)}
          disabled={mode === modes.removeRoof}
        >
          Remove roof
        </Button>
        <Board>{tiles}</Board>
        <Button variant="secondary" onClick={resetBoard}>
          Reset board
        </Button>
      </div>
    );
  }
}
