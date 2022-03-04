// Importamos useState 
import { useState, useEffect } from 'react';
// Importamos Component y exportamos App
//import {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import './App.css';


//Functional based component
//===================================================================================================================================================================

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};


//Class based component ===================================================================================================================================================================

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//         monsters: [],
//         // creamos el searchField vacio para almacenarlo en el state
//         searchField: ''
//   };
//   console.log('constructor');
// }

// componentDidMount() {
//   console.log('componentDidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then((users) => this.setState(() => {
//     return {monsters: users}
//   },
//   () => {
//     console.log(this.state);
//   }));
// }

//   // Este metodo fue sacado del render para optimizar el codigo y que no este siendo renderado cada vez que se cambia el searchField adicional solo sera inicializada una vez
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//       });
//   }

//   render() {
//     console.log('render');

//     // Creamos estas constantes para evisar estar poniendo en el codigo this.state.monsters y this.state.searchField
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     // Sacamos esta constante para que no se repita en el render
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//       {/* <input
//         // Esto tambien lo eliminamos y lo pasamos al SearchBox component jsx y lo declaramos como una prop
//         className='search-box' 
//         type="search" 
//         placeholder="Search Monsters"
//         onChange={onSearchChange}
//           // cambiamos searchFiler por seachField para que se pueda usar en el state original
//           // Pasamos el este metodo antes del rednder para optimizar el codigo
//           // const searchField = event.target.value.toLocaleLowerCase();
//           // this.setState(() => {
//           //   return {searchField};
//           //   });
//       /> */}
      
//       {/* {
//         // Esto lo eliminamos y lo pasamos a nuestro card-list.component.jsx para empezar a hacer modulos
//         filteredMonsters.map((monster) => {
//           return <div key={monster.id}>
//           <h1>{monster.name}</h1>
//           </div>;
//         })} */}
//       <h1 className='app-title'> Monsters Rolodex</h1>
//       <SearchBox onChangeHandler={onSearchChange} placeholder = 'search monsters' className = 'monsters-search-box'/>
//       <CardList monsters = {filteredMonsters}/>
//     </div>
//     );
//   }
// }

export default App;
