import axios from "axios";
import Config from 'react-native-config';

class HttpRequest {
  get(city) {
    const url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
    const params = {
      query: `restaurants+in+${city}`,
      key: Config.REACT_APP_API_KEY
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
