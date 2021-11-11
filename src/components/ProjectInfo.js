import React from 'react';
import IconWrapper from './IconWrapper';

function ProjectInfo(props) {
  const { project } = props;
  const { madeWith, description, motivation } = project;

  return (
    <div className='project-info'>
      <h4>Description</h4>
      <p>{description}</p>
      <h4>Motivation</h4>
      <p>{motivation}</p>
      <h4>Built with</h4>
      <div className='icon-container'>
        {madeWith.map( (item, index) => {
          return (
            <IconWrapper framework={item} key={index}/>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectInfo;
