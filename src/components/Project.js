import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function Project(props) {
  const { project } = props;
  const { title, imgUrl, background } = project;
  const [ hidden, setHidden ] = useState(false);

  return (
    <section className='project-section' style={{background: `${background}`}}>
        <h3 className='project-title'>
          <FontAwesomeIcon onClick={() => setHidden(!hidden)} icon={faChevronRight} className={hidden ? 'rotate-left' : 'rotate-right'}/>
          {title}
        </h3>
        {hidden ? null : 
        <div className='slide-in'>
          <img className='project-image' src={imgUrl}></img>
          <ProjectInfo project={project}/>
        </div>}
    </section>
  );
}

export default Project;
