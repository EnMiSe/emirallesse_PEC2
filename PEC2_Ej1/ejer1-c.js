
// Defineix una funció anomenada 'findOne'. Aquesta funció cerca un valor dins d'una llista donada.
const findOne = (list, key, value) => {
    // Aquesta part no ha canviat. Continuem retornant una promesa.
    return new Promise((resolve, reject) => {
        const element = list.find(element => element[key] === value);
        setTimeout(() => {
            if (element) {
                resolve(element);
            } else {
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

// Agregada una funció anomenada 'findUser' que serà async.
const findUser = async (users, key, value, message) => {
    console.log(message);
    try {
        // Fem ús de 'await' per esperar que la funció 'findOne' acabi.
        const user = await findOne(users, key, value);
        console.log(`user: ${user.name}`);
    } catch (error) {
        console.log(error);
    }
};

// Ara, es crida la nova funció 'findUser' amb els paràmetres desitjats.
findUser(users, 'name', 'Carlos', 'findOne success');
findUser(users, 'name', 'Fermin', 'findOne error');

/*
Canvis realitzats:
- Eliminades les crides originals a `findOne` amb `.then()` i `.catch()` ja que ara farem servir `async/await`.
- Hem creat una nova funció `async` anomenada `findUser` que crida `findOne` i gestiona els resultats amb `await`. Si `findOne` resol amb èxit, obtenim l'usuari. Si es rebutja, gestionem l'error amb un bloc `catch`.
- Hem cridat la funció `findUser` amb els paràmetres desitjats en lloc de les crides originals a `findOne`.

L'ús de `async/await` ens permet escriure codi asincrònic d'una manera més llegible i similar al codi síncron, facilitant la seva comprensió i gestió d'errors.
*/