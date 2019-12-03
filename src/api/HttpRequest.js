import axios from "axios";

class HttpRequest {
  get(city) {
    const url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
    const params = {
      query: `restaurants+in+${city}`,
      key: "AIzaSyBoPIVGK0QRgPWMO4vXnY1LWg-dS9d5Cbc"
    };

    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          reject(Error(error));
        });
    });
  }
}

export default new HttpRequest();
