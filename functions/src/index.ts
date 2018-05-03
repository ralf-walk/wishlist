import * as functions from 'firebase-functions';
import * as urlMetadata from 'url-metadata';
import * as request from 'request';

class Response {
  ogUrl: String;
  ogTitle: String;
  ogDescription: String;
  ogImage: String;
  ogImageRaw;
}

const getRawImageBase64 = async function (imageUrl: String) {
  return await new Promise((resolve, reject) => {
    request(imageUrl, (error, response, body) => {
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      if (body) {
        const b64 = Buffer.from(body).toString('base64');
        console.log(b64);
        resolve(b64);
      } else {
        reject(error);
      }
    });
  })
};

const getOgData = async function (url: String) {
  const response = new Response();
  const metadata = await urlMetadata(url);

  response.ogUrl = metadata['og:url'];
  response.ogTitle = metadata['og:title'];
  response.ogDescription = metadata['og:description'];

  const imageUrl = metadata['og:image'];
  if (imageUrl) {
    const image = await getRawImageBase64(imageUrl);
    response.ogImageRaw = image;
  }
  return metadata['og:image'];

};

export const helloWorld = functions.https.onRequest(async (req, res) => {
  return await getOgData('https://www.ebay.de/itm/EL-FUEGO-Gasgrill-MONTANA-Grill-Grillwagen-fahrbar-AY322-2x-5-5-kW-NEU/192466388235?_trkparms=%26rpp_cid%3D5ab230bf818a542f29a76c9f%26rpp_icid%3D5abcbc49621dc253657afcb5');
});
