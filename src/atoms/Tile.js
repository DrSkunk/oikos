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
  width: 19%;
  height: 19%;
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
    return <Base onClick={onClick}>{JSON.stringify(this.props, null, 2)}</Base>;
  }
}
