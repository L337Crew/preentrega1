
import { Fragment } from 'react';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <Fragment>
    <div className="App">
      <Navbar className={'navbar navbar-expand-lg navbar-dark bg-dark'} items={['Inicio','Procesadores','Graficas','Contacto']} navbarLogo={'Uz'}/>
    </div>
    <ItemListContainer greeting={'Hola, aca esta el greeting'}/>
    </Fragment>
  );
}


export default App;





