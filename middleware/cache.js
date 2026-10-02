const cache = {};
function setCache(key, data) {
    cache[key] = {
        data: data,
        createdAt: Date.now()
    };
}
function cacheMiddleware(req,res,next){
    const key = req.url;
    const value = cache[key];
    if(value && Date.now() - value.createdAt < 60000){
        res.set('X-Cache','HIT');
        return res.json(value.data);
    }
    res.set('X-Cache','MISS');
    next();
}
function cacheMiddlewareForId(req,res,next){
    const key = `product_${req.params.id}`;
    const value = cache[key];
    if(value && Date.now() - value.createdAt < 60000){
        res.set('X-Cache','HIT');
        return res.json(value.data);
    }
    res.set('X-Cache','MISS');
    next();
}
module.exports = { cacheMiddleware, cacheMiddlewareForId, setCache };