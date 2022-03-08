

const getImageUrl = (imageObj) => {

  const API_URL = "https://api.uduakessien.com"
  const image = {...imageObj.data.attributes.formats.medium}

  return `${API_URL}${image.url}`
}

export default getImageUrl