import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Introduction() {
  const [ hidden, setHidden ] = useState(true);

  return (
    <section id='intro-section'>
      <h1>
        <span className='fade-in-delayed'>Hi! I'm <span id='first-name'>Aaron</span>.</span>
        <br/>
        <span className='slide-in-right'>Bringing ideas</span>
        <span className='slide-in-left'>to life</span>
        <br/>
        <span className='slide-in-delayed'>is my passion.</span>
      </h1>
    </section>
  );
}

export default Introduction;