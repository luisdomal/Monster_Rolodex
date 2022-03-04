// Dentro de los archivos Component.jsx siempre tenemos que importar el Component de React
//import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";



//Functional based component
//===================================================================================================================================================================

const CardList = ({ monsters }) => (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );


//Class based component ===================================================================================================================================================================

//Extendemos la clase Component para crear una nueva clase
// class CardList extends Component {

//     render() {
//         // Props lo ocupamos para poder acceder a los props que le pasamos al componente
//         // usamos el this.props.monsters para acceder al state
//         // cada que props cambia se renderiza el componente
//         const { monsters } = this.props;
        
//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     return <Card monster={monster}/>
//                 })}
//             </div>
//         );
//     }
// }

// Exportamos la clase CardList para que pueda ser usada en otro archivo
export default CardList;