import gossipService from "../service/gossipService.js"
import unifiedResponse from "../utils/unifiedResponse.js";

export const getGossipsByFilter = async (req, res, next) => {
    try{
        const gossipRes = await gossipService.getGossipsByFilter(req.body);
        console.log("gossipRes",gossipRes);
        return unifiedResponse(res, 201, gossipRes, "success");
    }catch(err){
        next(err);
    }
}