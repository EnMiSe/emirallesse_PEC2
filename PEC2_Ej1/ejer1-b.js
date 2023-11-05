// Defineix una funció anomenada 'findOne'. Aquesta funció cerca un valor dins d'una llista donada.
const findOne = (list, key, value) => {
    // Retornem una promesa en lloc d'utilitzar callbacks.
    return new Promise((resolve, reject) => {
        // Utilitza la funció 'find' per cercar un element amb un valor i clau específics dins de la llista.
        const element = list.find(element => element[key] === value);

        // Utilitzem 'setTimeout' per simular una operació asincrònica.
        setTimeout(() => {
            // Si es troba l'element, resolem la promesa amb l'element.
            if (element) {
                resolve(element);
            } 
            // Si no es troba l'element, rebutgem la promesa amb un missatge d'error.
            else {
                reject('ERROR: Element Not Found');
            }
        }, 2000);
    });
};

// Defineix una llista d'usuaris amb noms i rols.
const users = [
    { name: 'Carlos', rol: 'Teacher' },
    { name: 'Ana', rol: 'Boss' }
];

// Mostra un missatge indicant que s'intentarà trobar un usuari amb èxit.
console.log('findOne success');
// Cerca l'usuari anomenat 'Carlos' i utilitza 'then' i 'catch' per gestionar els resultats de la promesa.
findOne(users, 'name', 'Carlos')
    .then(user => console.log(`user: ${user.name}`)) // Gestiona el cas d'èxit.
    .catch(error => console.log(error)); // Gestiona el cas d'error.

// Mostra un missatge indicant que s'intentarà trobar un usuari que no existeix.
console.log('findOne error');
// Cerca l'usuari anomenat 'Fermin' i utilitza 'then' i 'catch' per gestionar els resultats de la promesa.
findOne(users, 'name', 'Fermin')
    .then(user => console.log(`user: ${user.name}`)) // Gestiona el cas d'èxit.
    .catch(error => console.log(error)); // Gestiona el cas d'error.


    /*
    
    Canvis realitzats:

Hem eliminat les definicions onSuccess i onError ja que no les necessitem amb l'ús de promeses.
Hem modificat la funció findOne perquè retorni una promesa. Dins d'aquesta promesa, utilitzem resolve per indicar un èxit i reject per indicar un error.
En lloc de passar callbacks a findOne, utilitzem .then() i .catch() per gestionar el resultat de la promesa. .then() s'executarà si la promesa es resol amb èxit, i .catch() s'executarà si la promesa és rebutjada.
    */