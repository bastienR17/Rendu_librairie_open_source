/**
 * Récupère l'URL de l'image depuis l'API NASA.
 *
 * @returns {Promise<string>} L'URL de l'image.
 * @throws {Error} Si l'URL d'image n'est pas trouvée dans la réponse de l'API NASA.
 */
const img = async () => {
    try {
      const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT";
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data && data.url) {
        return data.url;
      } else {
        throw new Error("Aucune URL d'image trouvée dans la réponse de l'API NASA");
      }
    } catch (error) {
      throw new Error(`Erreur lors de la récupération de l'URL de l'image : ${error.message}`);
    }
  };
  
  export default img;