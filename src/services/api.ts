import axios from 'axios';

export async function getComments(start: number, end: number) {
  return axios
    .get(
      `https://jsonplaceholder.typicode.com/comments?_start=${start}&_end=${end}`,
    )
    .then(res => res.data);
}
