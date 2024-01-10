import img from '../src/image.js';

describe('img()', () => {
  it('should fetch data from a valid API link', () => {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT';
    return img(apiUrl).then(data => {
      // Use regex to match a valid URL
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      expect(data).toMatch(urlRegex);
    });
  });
  
    it('should handle errors for an invalid API link', async () => {
      const invalidApiUrl = 'https://example.com/api/invalid';
      try {
         img(invalidApiUrl);
      } catch (error) {
        expect(error.message).to.include('Error fetching data from API');
      }
    });
  });
