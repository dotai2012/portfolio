import axios from 'axios';

import { getUser } from './localStorage';

const { token } = getUser();

class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    const data = new FormData();
    data.append('typeOption', 'upload_image');
    data.append('file', this.loader.file);

    return new Promise((resolve, reject) => {
      axios({
        url: '/api/project/uploadadapter',
        method: 'post',
        data,
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        const resData = res.data;
        resData.default = resData.url;
        resolve(resData);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }
}

export default UploadAdapter;
