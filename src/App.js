import React from 'react';
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

const App = () => {
    return (
        <div className="App">
          <header className="App-header">
            <p className="App-title"> Eirik Rognø </p>
          </header>
          <div className="Icon-row">
			<a href="https://github.com/EirikRogno"> 
				<FontAwesomeIcon icon={faGithub} className="Icon fa-3x" /> 
			</a>
			<a href="https://www.linkedin.com/in/eirik-rognø-413983105"> 
				<FontAwesomeIcon icon={faLinkedin} className="Icon fa-3x" /> 
			</a>
			<a href="mailto:eirik@rogno.no"> 
				<FontAwesomeIcon icon={faEnvelope} className="Icon fa-3x" /> 
			</a>
          </div>
        </div>
    );
}

export default App;
