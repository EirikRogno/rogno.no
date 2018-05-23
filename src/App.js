import React from 'react';
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

const getSizeClass = () => {
	console.log(window.innerWidth)
	return (window.innerWidth > 450) ?
		"fa-3x" :
		"fa-2x"
}

const App = () => {
    return (
        <div className="App">
          <header className="App-header">
            <p className="App-title"> Eirik Rognø </p>
          </header>
          <div className="Icon-row">
			<a href="https://github.com/EirikRogno"> 
				<FontAwesomeIcon icon={faGithub} className={`Icon ${getSizeClass()}`} />
			</a>
			<a href="https://www.linkedin.com/in/eirik-rognø-413983105"> 
				<FontAwesomeIcon icon={faLinkedin} className={`Icon ${getSizeClass()}`} />
			</a>
			<a href="mailto:eirik@rogno.no">
				<FontAwesomeIcon icon={faEnvelope} className={`Icon ${getSizeClass()}`} />
			</a>
          </div>
        </div>
    );
}

export default App;
