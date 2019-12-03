import HttpRequest from "./HttpRequest";

class RestaurantsService {
  getRestaurants(city) {
    return HttpRequest.get(city);
  }
}

export default new RestaurantsService();
