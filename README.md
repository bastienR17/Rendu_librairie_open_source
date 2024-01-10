
# Outil de récupération d'informations de l'API NASA


Cette mini-bibliothèque permet de récupérer une images, son titre et la descriptions quotidienne qui lui correspond depuis l'API NASA .




## Installation

Install my-project with npm

```bash
  npm i lyb_naza_a3
```
    
## Utilisation
A travers les requettes nous retrouvons des fonction qui vont nous permettre de récupérer par exemple une image depuis l'API.
```js
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
  ```
## Documentation
Tout au long du projet, il y a eu une utilisation fréquente de JSDoc qui facilite la compréhension et la navigation à travers le code. Voici quelques exemples d'utilisation :    

```js
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
  ```



## Test
commande à exécuter pour run un Test
```
npm test / npm run test
```
## Licence
La licence utilisée sur ce projet est la licence [MIT](https://choosealicense.com/licenses/mit/)
**(Vous pouvez la consulter pour plus d'informations)**




## Screenshots
Tous les test jusquici n eprésentaient aucune issue en local 
![Sreen Test En local](https://i.ibb.co/jrs7WZB/Test-local.png)

Cependant après quelques releases nous avons constater des problèmes uniquiment sur Github 
![Screen test posant problème](https://i.ibb.co/k8JqKjL/Screenshot-2024-01-10-231625.png)


## Contribution

Les contributeurs sont les bienvenus pour enrichir ce projet !

Notamment en commençant par s'attaquer aux problèmes observés dans la capture d'écran juste au-dessus.

Pour cela veillez adresser une  `new issue` pour commencer puis proposer des solutions .

Gardez à l'esprit que les commandes suivantes ont déjà été exécutées dans le but de supprimer les node_modules, de les réinstaller et de vider le cache.
```rm -rf node_modules``` 
```npm install / npm i``` 
```npm cache clean --force``` 


## Run en local

Cloner le projet

```bash
  git clone git@github.com:bastienR17/Rendu_librairie_open_source.git
```

Aller dans le directory

```bash
  cd Rendu_librairie_open_source
```

Installer les dépendances

```bash
  npm install
```

Tester

```bash
  npm run Test
```


## Fonctionalités

- Récupérations Images
- Récupérations dates
- Récupérations Titres
- Récupérations descriptions


## Déploiement sur npmjs

Pour le déploiement npmjs les commandes et les releases étais les suivantes:

```bash
  git add .
  git commit -m "comment"
  npm run release
```


## API Reference

#### Récupération toutes les data

```http
  https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT
```

| Paramètres | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. 1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT |

#### Récupération date

```http
 https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT
```

| Paramètres | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `YYYY-MM-DD` | **Required**. The date of the APOD image to retrieve |

#### Récupération image

```http
 https://api.nasa.gov/planetary/apod?api_key=1aZMIbU6DNwDHXn3TY9JdChfwJcE0UR7wI3pmmiT
```

| Paramètres | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `string` | **Required**. le lien de l'image correspondant à la date et aux autre informations récupérées |




## Auteurs

- [@BastienROC](https://github.com/bastienR17)
- [@SaraYEO](https://github.com/Sarayeo)

