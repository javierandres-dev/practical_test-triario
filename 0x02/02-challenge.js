/* Crea un nuevo método para el siguiente objeto:
const myCollection = { books: [ { title: 'Cien Años de Soledad', author:
'Gabriel García Márquez', read: true }, { title: 'Do Androids Dream of Electric
Sheep', author: 'Phillip K. Dick', read: false } ] };
El método debe llamarse isRead() que recibirá objeto con los atributos title,
author y read.  Si el libro ha sido leído debe retornar: "Ya has leido xLibro
de xAutor"  Si el libro no ha sido leído debe retornar: "Aún necesitas leer
y Libro de yAutor" */
const myCollection = {
  books: [
    {
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Márquez',
      read: true,
    },
    {
      title: 'Do Androids Dream of Electric Sheep',
      author: 'Phillip K. Dick',
      read: false,
    },
  ],
  isRead({ title, author, read }) {
    let res = undefined;
    read
      ? (res = `Ya has leido ${title} de ${author}`)
      : (res = `Aún necesitas leer ${title} de ${author}`);
    return res;
  },
};

// tests
console.log(myCollection.isRead(myCollection.books[0]));
console.log(myCollection.isRead(myCollection.books[1]));
