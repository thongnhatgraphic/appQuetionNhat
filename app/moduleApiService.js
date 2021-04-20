import axios from 'axios';

class ApiService {
  constructor() {
    const instance = axios.create();
    this.instance = instance;
  }

  handleSuccess(res) {
    return res;
  }

  handleFaild(err) {
    return err;
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, id) {
    return this.instance.post(url, id);
  }

  delete(url, id) {
    return this.instance.delete(`${url}/${id}`);
  }

  put(url, id, data) {
    return this.instance.put(`${url}/${id}`, data);
  }
}

export default new ApiService();
