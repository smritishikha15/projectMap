const AreaDetails = require("../models/AreaDetails")
module.exports = {
    getRecentPoint,
    saveCoOrdinates
}
/**
 * 
 * @summary save the given co ordinates to the database 
 */
function saveCoOrdinates(req,response){
    req.body = typeof req.body != undefined ? req.body :{};
    return AreaDetails.storeDetails(req.body)
    .then(res =>{
        response.send(res)
    })
    .catch(err =>{
        response.send(err)
    })
}
/**
 * 
 * @summary get the recent set of points 
 */
function getRecentPoint(req,response){
    return AreaDetails.getLatestPoint()
    .then(res =>{
        response.send(res)
    })
    .catch(err =>{
        response.send(err)
    })
}