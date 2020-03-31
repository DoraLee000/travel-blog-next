// https://nextjs.org/docs/api-routes/introduction
import fetch from 'isomorphic-fetch';

const settings = {
  headers: {
      Accept: 'application/json',
  }
};
export default async (req, res) => {
    const { page } = req.query;
    const response = await fetch(`https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=${page}`, settings);
    const data = await response.json();
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data));
  }