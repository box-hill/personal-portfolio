import React from 'react';
import ProjectInfo from './ProjectInfo';


function Project(props) {
  const { project } = props;
  const { title, imgUrl, background } = project;
  console.log(background);
  return (
    <section className='project-section' style={{background: `${background}`}}>
        <h3 className='project-title'>{title}</h3>
        <img className='project-image' src={imgUrl}></img>
        <ProjectInfo project={project}/>
    </section>
  );
}

export default Project;
