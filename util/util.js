/**
<<<<<<< HEAD
 * Created by Weil on 2017/7/10.
=======
 * Created by Weil on 2017/7/7.
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8
 */
const fs = require('fs');

module.exports = {
  readJson: (jsonPath) => {
    let jsonStr = fs.readFileSync(jsonPath, 'utf-8');
    return JSON.parse(jsonStr);
  }
};
