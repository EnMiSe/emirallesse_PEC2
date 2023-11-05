// Defineix una llista d'usuaris amb noms i rols.
const users = [
    { name: 'Carlos', rol: 'Teacher' },
    { name: 'Ana', rol: 'Boss' }
];

// Hem afegit una funció anomenada 'findUser' que serà async.
const findUser = async (users, key, value, message) => {
    try {
        // Fem ús de 'await' per esperar que la funció 'findOne' acabi.
        const user = await findOne(users, key, value);
        console.log(message);
        console.log(`user: ${user.name}`);
    } catch (error) {
        console.log(message);
        console.log(error);
    }
};

// Fem ús de Promise.all per executar ambdues crides a `findOne` en paral·lel.
// Promise.all accepta un array de promeses i retorna una nova promesa que es resol quan totes les promeses de l'array s'han resolt.
const findUsersInParallel = async () => {
    // L'ús de Promise.all permet executar les promeses en paral·lel.
    await Promise.all([
        findUser(users, 'name', 'Carlos', 'findOne success'),
        findUser(users, 'name', 'Fermin', 'findOne error')
    ]);
};

// Iniciem la cerca en paral·lel.
findUsersInParallel();

/*
Canvis realitzats:

Hem utilitzat Promise.all() per executar les crides a findUser en paral·lel. Això significa que les dues crides a findOne dins de findUser s'executaran al mateix temps, sense esperar que l'una acabi per iniciar l'altra.
Hem creat una funció findUsersInParallel que crida Promise.all amb un array de crides a findUser. Aquesta funció espera que ambdues promeses es completin abans de continuar.
Hem iniciat la cerca en paral·lel cridant findUsersInParallel.
L'ús de Promise.all permet executar múltiples operacions asincròniques en paral·lel, optimitzant així el temps total d'execució quan es volen realitzar diverses tasques al mateix temps.
*/