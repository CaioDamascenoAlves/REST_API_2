const crypto = require('crypto');
const axios = require('axios');
const postsService = require('../service/postsService');

const generate = function () {
    return crypto.randomBytes(20).toString('hex');
};
const request  = function(url, method, data){
    return axios({ url, method, data });
};
test('Should get posts', async function () {
    const post1 = {title: generate(), content: generate()};
   
    const posts = response.data;
    await postsService.deletePost(post1.id);
 });
