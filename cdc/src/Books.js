import React from "react";

const BookList = () => {

  const livros = [
    { id: 1, titulo: "Hello World", descricao: "Welcome to learning React!" },
    {
      id: 2,
      titulo: "Installation",
      descricao: "You can install React from npm.",
    },
  ];

  return livros.map((livro, id) => (
    <div key={id}>
      <h3>{livro.titulo}</h3>
      <p>{livro.descricao}</p>
    </div>
  ));
};
export default BookList;

