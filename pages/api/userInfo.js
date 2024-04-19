/* eslint-disable */

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;
    try {
      // Fetch data from an external API or perform any other operation
      // For demonstration purposes, let's assume we're fetching from a mock API
      const response = await fetch(`https://gramsnap.com/api/ig/userInfoByUsername/${data}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the external API');
      }
      const responseData = await response.json();
      res.status(200).json(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
