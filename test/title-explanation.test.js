import getTitleExplanationInfo from '../src/titleexplanation.js';

describe('getTitleExplanationInfo()', () => {
  it('should fetch data from a valid API link', () => {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT';
    return getTitleExplanationInfo(apiUrl).then(data => {
      expect(data.title).toBe("Thor's Helmet"); // Adjust the expected title accordingly
      expect(data.explanation).toBe("Thor not only has his own day (Thursday), but a helmet in the heavens.  Popularly called Thor's Helmet, NGC 2359 is a hat-shaped cosmic cloud with wing-like appendages. Heroically sized even for a Norse god, Thor's Helmet is about 30 light-years across. In fact, the cosmic head-covering is more like an interstellar bubble, blown with a fast wind from the bright, massive star near the bubble's center. Known as a Wolf-Rayet star, the central star is an extremely hot giant thought to be in a brief, pre-supernova stage of evolution. NGC 2359 is located about 15,000 light-years away toward the constellation of the Great Overdog. This remarkably sharp image is a mixed cocktail of data from  narrowband filters, capturing not only natural looking stars but details of the nebula's filamentary structures. The star in the center of Thor's Helmet is expected to explode in a spectacular supernova sometime within the next few thousand years."); // Adjust the expected explanation accordingly
      
    });
  });

  it('should handle errors for an invalid API link', async () => {
    const invalidApiUrl = 'https://example.com/api/invalid';
    try {
      await getTitleExplanationInfo(invalidApiUrl);
    } catch (error) {
      expect(error.message).toContain('Erreur lors de la récupération des informations de l\'image');
    }
  });
});
