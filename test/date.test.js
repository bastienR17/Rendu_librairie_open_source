import getDate from '../src/date.js';

describe('getDate()', () => {
  it('should fetch data from a valid API link', () => {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT';
    return getDate(apiUrl).then(data => {
      expect(data).toBe('2024-01-09'); // Adjusting correctly and accordingly
    });
  });

  it('should handle errors for an invalid API link', async () => {
    const invalidApiUrl = 'https://example.com/api/invalid';
    try {
      await getDate(invalidApiUrl);
    } catch (error) {
      expect(error.message).toContain('Erreur lors de la récupération de la date ');
    }
  });
});
