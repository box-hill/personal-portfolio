import React from 'react';

function Introduction() {

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