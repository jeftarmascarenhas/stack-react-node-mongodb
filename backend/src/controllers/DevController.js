const axios = require("axios");

const { parseStringAsArray } = require("../utils/parseStringToArray");
const Dev = require("../models/Dev");
// index, show, store, upadte, destroy are methods this controller

const index = async (req, res) => {
  const devs = await Dev.find();
  return res.json(devs);
};

const store = async (req, res) => {
  const { github_username, techs, latitude, longitude } = req.body;

  let dev = await Dev.findOne({ github_username });

  if (!dev) {
    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );
    const { name = login, bio, avatar_url } = apiResponse.data;
    const techsArr = parseStringAsArray(techs);
    const location = {
      type: "Point",
      coordinates: [latitude, longitude]
    };
    dev = await Dev.create({
      github_username,
      name,
      bio,
      avatar_url,
      techs: techsArr,
      location
    });
  }
  return res.json(dev);
};

module.exports = {
  index,
  store
};
