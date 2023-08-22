import City from "../models/City.js";

const controller = {
  getCities: async (req, res) => {
    
    let queries = {}

    if(req.query.name){
        queries.name = req.query.name
    }

    try {
      const cities = await City.find(queries);

      return res.status(200).json({
        success: true,
        cities
      });
    } catch (error) {
      console.error("Error fetching cities:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  },
  createCity: async (req, res) => {
    try{
      const newCity = await City.create(req.body);

      return res.status(201).json({
        success: true,
        message: 'city created'
      })
    } 
    catch (error){
      return res.status(500).json({
        success: false,
        message: 'Error'
      })
    }
  },
};

export default controller;
