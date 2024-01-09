     /**
     * Récupéré depuis l'API NASA les 855 photo du rover.
     *
     *
     * @returns {Promise<string>} L'URL de l'image.
     * @throws {Error} Si l'URL d'image n'est pas trouvée dans la réponse de l'API NASA.
      */
     const apiKey = '1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT';
     const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + apiKey;

     // Fonction pour récupérer les photos
     async function getPhotos() {
         try {
             const response = await fetch(apiUrl);
             const data = await response.json();

             // Faites quelque chose avec les photos récupérées (par exemple, les afficher dans la console)
             console.log(data.photos || []);

         } catch (error) {
             console.error('Erreur lors de la récupération des photos:', error);
         }
     }

     export default getPhotos;
