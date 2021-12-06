import * as FileSystem from 'expo-file-system';

export async function convertBase64(img) {
    return new Promise(async resolve => {
        await FileSystem.readAsStringAsync(img.uri, { encoding: 'base64' })
          .then(response => {
            let base64Img = "data:image/jpeg;base64," + response;
            return resolve(base64Img);
          })
          .catch(error => {
            return resolve("");
          });
      });
};
