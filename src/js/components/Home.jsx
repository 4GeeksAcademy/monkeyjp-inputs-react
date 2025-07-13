import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

  // const [inputValue, setInputValue] = useState("")
  // const [nombre, setNombre] = useState(null)

  // const onInputChange = (e) => {
  //   setInputValue(e.target.value)
  // }

  // const handleKeyUp = (e) => {
  //   if (inputValue.trim !== "" && e.key === "Enter") {
  //     setNombre(inputValue)
  //     setInputValue("")
  //   }
  // }

  // return (
  //   <div className="container">
  //     <label className="form-label" htmlFor="name">Escribe un Nombre:</label>
  //     <input 
  //       className="form-control" 
  //       value={inputValue}
  //       id="name" 
  //       name="name" 
  //       type="text" 
  //       onChange={onInputChange} 
  //       onKeyUp={handleKeyUp}  
  //     />
  //     {nombre && <p>Hola {nombre}</p>}
  //   </div>
  // )



  const personajesLOTR = [
  {
    nombre: "Gandalf",
    frase: "You shall not pass!",
    imagen: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/10/why-gandalf-needs-a-staff-in-the-lord-of-the-rings.jpg"
  },
  {
    nombre: "Galadriel",
    frase: "Even the smallest person can change the course of the future.",
    imagen: "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/09/Cate-Blanchett---The-Lord-Of-The-Rings-Trilogy.jpg"
  },
  {
    nombre: "Legolas",
    frase: "A wizard is never late, nor is he early. He arrives precisely when he means to.",
    imagen: "https://static.wikia.nocookie.net/bibliotecadelatierramedia/images/c/c0/Legolas.jpg/revision/latest?cb=20140322121446&path-prefix=es"
  },
  {
    nombre: "Aragorn",
    frase: "Not all those who wander are lost.",
    imagen: "https://sm.ign.com/t/ign_latam/screenshot/default/aragorn11_rmuk.1280.jpg"
  },
  {
    nombre: "Elrond",
    frase: "The time of the Elves is over. Do we leave Middle-earth to its fate?",
    imagen: "https://m.media-amazon.com/images/M/MV5BYTAyODE2MDItYWRhYy00OGJmLTg3ZGItZmQzZmE2ODJjOGIwXkEyXkFqcGc@._V1_QL75_UY281_CR31,0,500,281_.jpg"
  },
  {
    nombre: "Boromir",
    frase: "One does not simply walk into Mordor.",
    imagen: "https://static.wikia.nocookie.net/pjmidearthfilms/images/1/16/Lord-of-the-rings-sean-bean-boromir-1584636601.jpg/revision/latest?cb=20210914103058"
  },
  {
    nombre: "Saruman",
    frase: "Against the power of Mordor there can be no victory.",
    imagen: "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/02/Saruman-Lord-of-the-Rings.jpg"
  },
  {
    nombre: "Gollum / Sméagol",
    frase: "My precious!",
    imagen: "https://www.looper.com/img/gallery/gollums-entire-backstory-explained/intro-1584137078.jpg"
  },
  {
    nombre: "Frodo Baggins",
    frase: "I will take the Ring to Mordor, though I do not know the way.",
    imagen: "https://static.wikia.nocookie.net/lotr/images/3/32/Frodo_%28FotR%29.png/revision/latest?cb=20221006065757"
  },
  {
    nombre: "Samwise Gamgee",
    frase: "I can't carry it for you, but I can carry you!",
    imagen: "https://www.theonering.net/torwp/wp-content/uploads/2013/05/samwise-gamgee.jpg"
  },
  {
    nombre: "Pippin Took",
    frase: "What about second breakfast?",
    imagen: "https://149461325.v2.pressablecdn.com/wp-content/uploads/2018/03/pippinfeature.jpg"
  },
  {
    nombre: "Merry Brandybuck",
    frase: "I don't think he knows about second breakfast, Pip.",
    imagen: "https://tolkien-intheeyesofsirpj.weebly.com/uploads/1/6/9/8/16988074/1997029_orig.jpg"
  },
  {
    nombre: "Arwen",
    frase: "I would rather share one lifetime with you than face all the ages of this world alone.",
    imagen: "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2024/06/andy-serkis-gollum-lord-of-the-rings.webp"
  },
  {
    nombre: "Sauron",
    frase: "One Ring to rule them all.",
    imagen: "https://static.wikia.nocookie.net/lotr/images/3/3a/Sauron.jpg/revision/latest?cb=20120620000759"
  },
  {
    nombre: "Gimli",
    frase: "Faithless is he that says farewell when the road darkens.",
    imagen: "https://assetsio.gnwcdn.com/gimli_OVQOp6S.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
  }
];
  
	const [personajes, setPersonajes] = useState([
    {
      nombre: "Frodo Baggins",
      frase: "I will take the Ring to Mordor, though I do not know the way.",
      imagen: "https://static.wikia.nocookie.net/lotr/images/3/32/Frodo_%28FotR%29.png/revision/latest?cb=20221006065757"
    },
    {
      nombre: "Gandalf",
      frase: "You shall not pass!",
      imagen: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/10/why-gandalf-needs-a-staff-in-the-lord-of-the-rings.jpg"
    }
  ]);

  // Estados del formulario
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaFrase, setNuevaFrase] = useState("");
  const [nuevaImagen, setNuevaImagen] = useState("");

  const agregarPersonaje = (e) => {
    e.preventDefault();

    if (!nuevoNombre || !nuevaFrase || !nuevaImagen) return;

    const nuevoPersonaje = {
      nombre: nuevoNombre,
      frase: nuevaFrase,
      imagen: nuevaImagen
    };

    setPersonajes([...personajes, nuevoPersonaje]);

    // Limpiar formulario
    setNuevoNombre("");
    setNuevaFrase("");
    setNuevaImagen("");
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">👑 Crea tu personaje de El Señor de los Anillos</h2>

      <form className="mb-5" onSubmit={agregarPersonaje}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Frase"
          value={nuevaFrase}
          onChange={(e) => setNuevaFrase(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="URL de la imagen"
          value={nuevaImagen}
          onChange={(e) => setNuevaImagen(e.target.value)}
        />
        <button className="btn btn-success w-100">Agregar Personaje</button>
      </form>

      <div className="row">
        {personajes.map((p, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <img
                src={p.imagen}
                className="card-img-top"
                alt={p.nombre}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text fst-italic">"{p.frase}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;