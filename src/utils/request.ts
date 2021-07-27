import Axios from "axios";
interface requestType {
    url?: string;
    method?: string;
    data?: any;
    query?: any;
    headers?: any;
    timeout?: number;
}

const axios = Axios.create({
  timeout: 2000
});

axios.interceptors.request.use(
  (retques: requestType) => {
    return retques;
  }
);

export default axios;
