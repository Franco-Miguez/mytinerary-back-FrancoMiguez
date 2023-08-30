import City from "../models/City.js";

const controller = {
  getCities: async (req, res) => {
    let queries = {}
    if(req.query.city){
     queries.city = new RegExp(`^${req.query.city}`,'i')
    }

    try {
      const cities = await City.find(queries);

      if(cities.length > 0){
        return res.status(200).json({
          success: true,
          cities
        });
      }
      return res.status(404).json({
        success : false,
        message : "The search does not exist"
      })
    } catch (error) {
      console.error("Error fetching cities:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  },
  getCityById: async (req, res) =>{
    try {
      const city = await City.findById(req.params.id)

      if (city){
        return res.status(200).json({
          success:true,
          city
        })
      }
      return res.status(404).json({
        success:false,
        message: "That city has not been found"
      })


    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      })
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
