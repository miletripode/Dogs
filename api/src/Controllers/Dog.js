const { Dog, Temperament } = require('../db');
const axios = require('axios').default;
const { v4: uuidv4 } = require("uuid");
const {API_KEY} = process.env;

/*[ ] GET /dogs:
Obtener un listado de las primeras 8 razas de perro
Debe devolver solo los datos necesarios para la ruta principal
IMPORTANTE: Dentro de la Ruta Principal se deben mostrar tanto las razas de perros traidas
desde la API como así también las de la base de datos.*/

function getEightDogs(req, res){
    let dogsAPI = axios.get(` https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    let dogsDB = Dog.findAll()
    console.log(dogsDB)
    Promise.all([dogsAPI,dogsDB])
    .then((response) => {
        let [dogsApiResponse, dogsDbResponse] = response;
        return res.send(
            dogsApiResponse.data.concat(dogsDbResponse.data)
        )
    })
    .catch((err) => res.json({message: 'ups'}))  
}

/*[ ] GET /dogs?name="...":
Obtener un listado de las primeras 8 razas de perro que contengan la palabra ingresada 
como query parameter Si no existe ninguna raza de perro mostrar un mensaje adecuado*/
async function breedsIncludesWord(req, res){
    const {name} = req.query;
   
    let eightBreeds = await Dog.findAll({
        where: {
            name: name
        }
    })

    console.log(eightBreeds)

    if(eightBreeds.length > 0){
        res.json(eightBreeds)
    }else{
        res.json({ message: 'No se encontro ninguna raza de perro'})
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
async function breedDetail(req, res){
    const { idRaza } = req.params
    let breed;
    
    if( Number.isNaN(idRaza) ){
        breed = await Dog.findByPk(idE, { include: Temperament })
        if(breed){
            return res.send(breed)
        }
        else{
            return res.json({message: 'No se encontro en la base de datos'})
        }
    }else{
        let responseAxios = await axios.get(` https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        let breeds = responseAxios.data
        breed = breeds.filter(b => b.id == idRaza)
        if(breed){
            return res.send(breed)
        }
    }
    return res.json({message: 'No se encontro ninguna raza con el id mandado'})
}

/*[ ] POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de 
raza de perro por body.Crea una raza de perro en la base de datos*/
async function creatingBreed(req, res){
    
    const { name, height, weight, life_span, temperament} = req.body
    const breedCreated = await Dog.create({name, height, weight, life_span})
    
    temperament.toString().split(",").forEach(async (t) => {
        const aux = await Temperament.findOrCreate({
            where: {
                name: t
            },
        })
        await breedCreated.addTemperament(aux[0])
    })
    return res.send('ok')
}

module.exports = {
    getEightDogs,
    breedsIncludesWord,
    breedDetail,
    creatingBreed
}