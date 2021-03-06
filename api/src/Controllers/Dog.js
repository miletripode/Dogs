const { Dog, Temperament } = require('../db');
const axios = require('axios').default;
const {API_KEY} = process.env;
const dogsApiUrl = ` https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
const dogsApiName = `https://api.thedogapi.com/v1/breeds/search?api_key=${API_KEY}`

/*[ ] GET /dogs:
Obtener un listado de las primeras 8 razas de perro
Debe devolver solo los datos necesarios para la ruta principal
IMPORTANTE: Dentro de la Ruta Principal se deben mostrar tanto las razas de perros traidas
desde la API como así también las de la base de datos.*/

const getDogs = async (req, res, next) => {
    try{ 
        let apiResponse = await axios(dogsApiUrl)
        let dogsAPI = apiResponse.data.map(d => {
            return{
                id: d.id,
                img: d.image.url,
                name: d.name,
                temperament: d.temperament,
                weight: d.weight.metric
            }
        });
        let dogsDB = await Dog.findAll({ 
            attributes: ["id","img","name"],
            include: Temperament
        });
        res.send(dogsAPI.concat(dogsDB))
    }
    catch(e){
        next(e)
    }
}

/*[ ] GET /dogs?name="...":
Obtener un listado de las primeras 8 razas de perro que contengan la palabra ingresada 
como query parameter Si no existe ninguna raza de perro mostrar un mensaje adecuado*/
const breedsIncludesWord = async(req, res,next) => {
    try{
        let name = req.query.name;

        let eightBreeds = await Dog.findAll({ 
            where: { name: name },
            attributes: ["img","name"],
            include: Temperament
        })

        if(eightBreeds.length === 0){
            let responseAxios = await axios.get(`${dogsApiName}&name=${name}`)
            let eight = responseAxios.data.map(b => {
                return {
                    name: b.name
                }
            });
            if(eight.length > 0){
                res.send(eight)
            }
            else{
                res.json({ message: 'No se encontro ninguna raza de perro'})
            }
        }
    }
    catch(e){
        next(e)
    }
}

/*[ ] GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados
[ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
[ ] Altura
[ ] Peso
[ ] Años de vida*/
const breedDetail = async(req, res, next) => {
    try {
    const  id  = req.params.idRaza
    
    if( isNaN(id) ){
        let breedDB = await Dog.findOne({
            where: { id: id},
            attributes: ['id','img', 'name', 'height', 'weight', 'life_span'],
            include: {
                model: Temperament,
                attributes: ['name']
            }
        })
        if(breedDB){
            return res.send(Object.values(breedDB))
        }
    }else{
        let responseAxios = await axios.get(dogsApiUrl)
        let breed = responseAxios.data.find(b => b.id == id)
        if(breed){
            breed = {
                id: id,
                img: breed.image.url,
                name: breed.name,
                height: breed.height.metric,
                weight: breed.weight.metric,
                life_span: breed.life_span,
                temperament: breed.temperament
            }
            return res.send(Object.values(breed))
        }
    }
    return res.json({message: 'No se encontro ninguna raza con el id mandado'})
    }
    catch(e){
        next(e)
    }
}

/*[ ] POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de 
raza de perro por body.Crea una raza de perro en la base de datos*/
const creatingBreed = async(req, res, next) => {
    try{
    const { img, name, height, weight, life_span, temperament} = req.body
    const breedCreated = await Dog.create({img, name, height, weight, life_span})
    
    temperament.toString().split(",").forEach(async (t) => {
        const aux = await Temperament.findOrCreate({
            where: {
                name: t
            },
        })
        await breedCreated.addTemperament(aux[0])
    })
        return res.send(breedCreated)
    }
    catch(e){
        next(e) 
    }
}

module.exports = {
    getDogs,
    breedsIncludesWord,
    breedDetail,
    creatingBreed
}