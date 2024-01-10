/**
 * Récupère la date depuis l'API NASA.
 *
 * @returns {Promise<{ date: YYYY-MM-DD, url: string }>} La date de l'image.
 * @throws {Error} Si la date n'est pas trouvée dans la réponse de l'API NASA.
 */
const getDate = async () => {
    try {
      const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT";
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data && data.date) {
        return data.date;
      } else {
        throw new Error("Aucune date trouvée dans la réponse de l'API NASA");
      }
    } catch (error) {
      throw new Error(`Erreur lors de la récupération de la date : ${error.message}`);
    }
  };
  
  export default getDate;
  