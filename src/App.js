import React, { Component } from 'react';
import randomWords from 'random-words';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Room from './Room';

export default class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    let room = new URL(window.location).searchParams.get('room');
    if (!room) {
      room = randomWords(3).join('-');
      this.state.lobby = true;
    } else {
      room = room.replace(/[^\w\s]/gi, '');
      this.state.lobby = false;
    }

    this.state.room = room;
  }

  onRoomChange = (e) => {
    console.log(e.target.value);
    this.setState({ room: e.target.value });
  };

  startNewGame = () => {
    const newUrl =
      window.location.origin +
      window.location.pathname +
      '?room=' +
      this.state.room;

    window.history.replaceState(null, null, newUrl);
    this.setState({ lobby: false });
  };

  render() {
    const { room, lobby } = this.state;

    if (lobby) {
      return (
        <Container>
          <Row>
            <Col className="col-lg-4 offset-lg-3">
              <h1 className="header">Oikos</h1>
              <InputGroup>
                <FormControl
                  placeholder="room code"
                  aria-label="room code"
                  value={room}
                  onChange={this.onRoomChange}
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    onClick={this.startNewGame}
                  >
                    Go
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      );
    }

    return <Room room={room}></Room>;
  }
}
