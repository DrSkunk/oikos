import axios from 'axios';

export function createGame(id) {
  return axios.post('http://localhost:8080/games', {
    data: {
      type: 'game',
      id
    }
  });
}

export function updateTile(id, tileIndex, newValue) {
  return axios.patch('http://localhost:8080/games/' + id, {
    data: {
      type: 'game',
      id
    }
  });
}
