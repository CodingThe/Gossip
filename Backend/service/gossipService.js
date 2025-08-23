import Gossip from "../models/Gossip.js";
import ApiError from "../utils/ApiError.js";

export const getGossipsByFilter = async (req) => {
  try {
    const { usernameFilter, contentFilter, likesOrder } = req;
    const pipeline = [
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "userData",
        },
      },
      {
        $unwind: "$userData",
      },
    ];

    const match = {};

    if (usernameFilter) {
      match["userData.username"] = {
        $regex: usernameFilter,
        $options: "i",
      };
    }

    if (contentFilter) {
      match["message"] = {
        $regex: contentFilter,
        $options: "i",
      };
    }

    if (Object.keys(match).length) {
      pipeline.push({ $match: match });
    }

    if (likesOrder) {
      pipeline.push({ $sort: { likes: likesOrder == "asc" ? 1 : -1 } });
    }

    const res = await Gossip.aggregate(pipeline);

    return {res};
  } catch (err) {
    throw new ApiError(500, err.message);
  }
};

const gossipService = {
    getGossipsByFilter
}

export default gossipService;
