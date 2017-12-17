/**
 * Created by Weil on 2017/6/24.
 */
module.exports = async (ctx, next) => {
<<<<<<< HEAD
  let ContentType = ctx.headers['content-type'] || ''; // 有可能是undefined
  if ( ContentType.toLowerCase() === 'application/json' ) {
    // 如果是API请求就延迟
=======
  if (ctx.path.includes('/api/')) {
>>>>>>> 0a25f268b839e3c14f827d2e8fb9f39ad7252ac8
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  await next();
};
