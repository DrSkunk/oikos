import React, { Component } from 'react';
import styled from 'styled-components';
const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border: 1px solid transparent;
  ${props => props.selected?"outline: 5px solid yellow;":""}
  
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;

const Level1 = styled.rect`
  fill: red;
`;

const Level2 = styled.rect`
  fill: green;
`;

const Level3 = styled.polygon`
  fill: gray;
  stroke: #000000;
  stroke-width: 2.5px;
`;

const Roof = styled.circle`
  fill: blue;
  stroke: #000000;
  stroke-width: 2.5px;
`;

const Player = styled.circle`
  fill: ${props=>playerColor[props.player]};
  stroke: #000000;
  stroke-width: 2.5px;
`;

const playerColor={
  1: "red",
  2: "green",
  3: "blue",
  4: "purple"
}

export default class Tile extends Component {
  render() {
    const { level, roof, player, selected, onClick } = this.props;

    return (
      <Base onClick={onClick} selected={selected}>
        <svg width="100" height="100">
          {level >= 1?<Level1 width="100" height="100" />:null}
          {level >= 2?<Level2 width="80" height="80" x="10" y="10" />:null}
          {level >= 3?<Level3 points="20,62.4 20,37.55 37.534,20 62.4,20 80,37.55 80,62.4 62.4,80 37.55,80" />:null}
          {roof?<Roof cx="50" cy="50" r="25"/>:null}
          {player?<Player cx="50" cy="50" r="20" player={player}/>:null}
        </svg>
      </Base>
    );
  }
}
