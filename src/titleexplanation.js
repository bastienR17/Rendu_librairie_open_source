/**
 * Récupère le titre, l'explication, la date et l'URL de l'image depuis l'API NASA.
 *
 * @returns {Promise<{ title: string, explanation: string }>} Les informations de l'image.
 * @throws {Error} Si le titre, l'explication n'est pas trouvée dans la réponse de l'API NASA.
 */
const getTitleExplanation = async () => {
    try {
      const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT";
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data && data.title && data.explanation) {
        return { title: data.title, explanation: data.explanation};
      } else {
        throw new Error("Certaines informations de l'image sont manquantes dans la réponse de l'API NASA");
      }
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des informations de l'image : ${error.message}`);
    }
  };
  
  export default getTitleExplanation;
  