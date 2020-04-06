import axios from 'axios';

const baseUrl = process.env.REACT_APP_ENDPOINT;
const gamesEndpoint = baseUrl + '/games/';

export function createGame(id) {
  return axios.post(gamesEndpoint, {
    data: {
      type: 'game',
      id,
    },
  });
}

export function updateTile(id, tileIndex, newValue) {
  return axios.patch(gamesEndpoint + id, {
    data: {
      type: 'game',
      id,
      attributes: {
        board: {
          [tileIndex]: newValue,
        },
      },
    },
  });
}
