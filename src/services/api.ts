import axios from 'axios';

export async function getComments(start: number, end: number) {
  return axios
    .get(
      `https://jsonplaceholder.typicode.com/comments?_start=${start}&_end=${end}`,
    )
    .then(res => res.data);
}

export async function addComment(text: string) {
  const data = { data: text };

  return axios
    .post('test.steps.me/test/testAssignComment', data)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
}
