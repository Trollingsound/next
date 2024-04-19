/* eslint-disable */

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { data } = req.body;
      console.log("data comeing or not" ,data)
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
      fetch(`https://upload.uploadcare.com/from_url/?jsonerrors=1&pub_key=91416d8907fd041b2900&source_url=${data}&store=auto&source=url-tab`, requestOptions)
        .then((response) => response.json())
        .then((result) => res.status(200).json(result))
        .catch((error) => console.error(error));
      // res.status(200).json(`check ${data}`)

    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  