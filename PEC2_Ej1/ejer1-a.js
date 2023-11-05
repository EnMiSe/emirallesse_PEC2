// Defineix una funció anomenada 'findOne'. Aquesta funció cerca un valor dins d'una llista donada.
const findOne = (list, { key, value}, {onSuccess, onError}) => {
    // Utilitza la funció 'find' per cercar un element amb un valor i clau específics dins de la llista.
    const element = list.find(element => element[key] === value);

    // Si es troba l'element, es crida al callback 'onSuccess' amb l'element com a argument.
    // Si no es troba l'element, es crida al callback 'onError' amb un missatge d'error.
    setTimeout(() => element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' }), 2000);
};

// Defineix un callback que mostra el nom de l'usuari trobat.
const onSuccess = ({ name }) => console.log(`user: ${name}`);

// Defineix un callback que mostra el missatge d'error.
const onError = ({ msg }) => console.log(msg);

// Defineix una llista d'usuaris amb noms i rols.
const users = [
    { name: 'Carlos', rol: 'Teacher' },
    { name: 'Ana', rol: 'Boss' }
];

// Mostra un missatge indicant que s'intentarà trobar un usuari amb èxit.
console.log('findOne success');
// Cerca l'usuari anomenat 'Carlos' i utilitza els callbacks per mostrar el resultat.
findOne(users, { key: 'name', value: 'Carlos' }, onSuccess, onError);

// Mostra un missatge indicant que s'intentarà trobar un usuari que no existeix.
console.log('findOne error');
// Cerca l'usuari anomenat 'Fermin' (que no està a la llista) i utilitza els callbacks per mostrar el resultat.
findOne(users, { key: 'name', value: 'Fermin' }, onSuccess, onError);

/*
L'èmfasi aquí està en el fet que findOne utilitza dos callbacks: un per quan es troba l'element (onSuccess) 
i un altre per quan no es troba (onError). Aquests callbacks es criden després de 2 segons gràcies a 
la funció setTimeout.
*/
/*
findOne success
findOne error
user: Carlos
ERROR: Element Not Found
*/