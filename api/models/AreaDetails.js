module.exports={
    table_name:'areadetails',
    attributes :{
        id : {
            type: 'number',
            required: true,
        },
        co_ordinates:{
            type: "string"
        }
    },
    // save the co ordinate details 
    async storeDetails(options){
        let {co_ordinates} = options; 
        if(typeof co_ordinates == undefined) 
            return Promise.reject("Co ordinates Missing")
        else {
            let lastId = await AreaDetails.find({sort:'id desc'});
            let area_id= lastId.length ? lastId[0].id :0;
            return AreaDetails.create({"id":++area_id,"co_ordinates": co_ordinates})
            .then(resp =>{
                return Promise.resolve("Saved");
            })
            .catch(Err =>{
                return Promise.reject(Err);
            })
        }
    },
    // get the latest stored Co ordinate
     getLatestPoint(){
        return AreaDetails.find({sort :'id desc',limit :1})
        .then(resp =>{
            return Promise.resolve(resp);
        })
        .catch(Err =>{
            return Promise.reject(Err);
        })
    }
    
}
