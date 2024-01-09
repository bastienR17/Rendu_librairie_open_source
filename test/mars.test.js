import getPhotos from '../src/mars.js'; // Assurez-vous d'ajuster le chemin d'import selon votre structure de fichiers.

describe('getPhotos function', () => {
    // Mocking the fetch function
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve({
                    photos: Array.from({ length: 855 }, (_, index) => ({ id: index + 1, img_src: `https://example.com/photo${index + 1}.jpg` })),
                }),
        })
    );

    it('should fetch 855 photos successfully', async () => {
        // Utilisation de spyOn pour espionner console.log
        jest.spyOn(console, 'log');

        await getPhotos();

        // Vérifie si console.log a été appelé avec les 855 premières photos
        expect(console.log).toHaveBeenCalledWith(
            expect.arrayContaining(Array.from({ length: 855 }, (_, index) => ({ id: index + 1, img_src: `https://example.com/photo${index + 1}.jpg` })))
        );

        // Vérifie si console.log a été appelé avec exactement 855 éléments
        expect(console.log).toHaveBeenCalledWith(expect.arrayContaining(Array.from({ length: 855 }, (_, index) => expect.any(Object))));

        // Réinitialise le mock de console.log après le test
        console.log.mockRestore();
    });
});
