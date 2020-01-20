const Dev = require("../models/Dev");

const { parseStringAsArray } = require("../utils/parseStringToArray");

const index = async (req, res) => {
  // buscar todos os devs no raio de 10km
  // Filtrar por tecnologias
  const { latitude, longitude, techs } = req.query;
  const techsToArr = parseStringAsArray(techs);
  const devs = await Dev.find({
    techs: {
      $in: techsToArr
    },
    location: {
      $near: {
        $geometry: { type: "Point", coordinates: [longitude, latitude] },
        $maxDistance: 10000
      }
    }
  });
  res.json(devs);
};

module.exports = {
  index
};
