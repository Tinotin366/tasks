import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.svg';


function App() {
    return (
        <div className="tasks">
	        <div className='freecodecamp-logo-contenedor'>
                <img
                    src={ freeCodeCampLogo }
                    className='freecodecamp-logo'
                />
	        </div>
            <div className='tasks-list-main'>
                   <p>Hola Victoria</p>
            </div>
         </div>
  );
}

export default App;
