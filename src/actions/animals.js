import axios from 'axios';
import url from 'url';

export function fetchAnimals() {
    return (dispatch) => {
      dispatch({ type: 'START_STORE_REQUEST' });
      axios.get(`${url}/animals`)
        .then(res => {
          const animals = res.data
          dispatch({ type: 'STORE_ANIMALS', animals })
        })
    };
}

export function addAnimal(animaldata) {
  return async (dispatch) => {
    dispatch({type: 'START_ADD_ANIMAL'})
    const response = await axios.post(`${url}/animals`, {
      name: animaldata.name,
      gender: animaldata.gender,
      species: animaldata.species,
      breed: animaldata.breed,
      bio: animaldata.bio,
      image: animaldata.image
    }, { withCredentials: true }
    )
    const animal = response.data
    dispatch({ type: 'ADD_ANIMAL', animal })
  }
}

export function updateAnimal(animaldata, animalID) {
  return async (dispatch) => {
    dispatch({ type: 'START_ADD_ANIMAL'})
    const response = await axios.put(`${url}/animals/${animalID}`, {
      id: animalID,
      name: animaldata.name,
      gender: animaldata.gender,
      species: animaldata.species,
      breed: animaldata.breed,
      bio: animaldata.bio
    }, { withCredentials: true })
    const animal = response.data
    dispatch({ type: 'UPDATE_ANIMAL', animal: animal })
  }
}

export function removeAnimal(animalID) {
  return async (dispatch) => {
    dispatch({ type: 'START_DESTROY' })
    const response = await axios.delete(`${url}/animals/${animalID}`, {
      withCredentials: true
    })
    const animal = response.data
    dispatch({ type: 'REMOVE_ANIMAL', animal })
  }
}
