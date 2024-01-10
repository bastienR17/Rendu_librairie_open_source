import getTitleExplanationInfo from '../src/titleexplanation.js';

describe('getTitleExplanationInfo()', () => {
  it('should fetch data from a valid API link', () => {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT';
    return getTitleExplanationInfo(apiUrl).then(data => {
      expect(data.title).toBeDefined();
      expect(data.explanation).toBeDefined();
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
