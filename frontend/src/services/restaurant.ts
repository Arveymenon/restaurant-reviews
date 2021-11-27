import http from "./../http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  get(id: number) {
    return http.get(`?id=${id}`);
  }

  find(query: any, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  } 

  createReview(data: any) {
    return http.post("/review-new", data);
  }

  updateReview(data: any) {
    return http.put("/review-edit", data);
  }

  deleteReview(id: number, userId: any) {
    return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
  }

  getCuisines(id = 0) {
    return http.get(`/cuisines`);
  }

}

export default new RestaurantDataService();