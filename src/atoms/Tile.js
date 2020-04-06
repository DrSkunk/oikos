import React, { Component } from 'react';
import styled from 'styled-components';
const Base = styled.div`
  text-align: center;
  /* border: 1px solid black; */
  background-color: #ddd;
  border: 1px solid #ddd;
  font-size: 0.7em;
  text-transform: uppercase;
  /* padding: 5px; */
  cursor: pointer;
  &:hover {
    /* color: black;
    background-color: #ccc; */
    border: 1px solid black;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 100px;
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
  fill: beige;
  stroke: #000000;
  stroke-width: 2.5px;
`;


const Selected = styled(Base)`
  background-color: green;
`;
export default class Tile extends Component {
  render() {
    const { level, roof, player, selected, onClick } = this.props;
    if (selected) {
      return (
        <Selected onClick={onClick}>
          {JSON.stringify(this.props, null, 2)}
        </Selected>
      );
    }
    // return <Base onClick={onClick}>{JSON.stringify(this.props, null, 2)}</Base>;
    return (
      <Base onClick={onClick}>
        <svg width="100" height="100">
          {level >= 1?<Level1 width="100" height="100" />:null}
          {level >= 2?<Level2 width="80" height="80" x="10" y="10" />:null}
          {level >= 3?<Level3 points="20,62.4 20,37.55 37.534,20 62.4,20 80,37.55 80,62.4 62.4,80 37.55,80" />:null}
          {roof?<Roof cx="50" cy="50" r="25"/>:null}
          {player?<Player cx="50" cy="50" r="20"/>:null}
        </svg>
      </Base>
    );
  }
}
