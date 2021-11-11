import React from 'react';
import IconWrapper from './IconWrapper';

function ProjectInfo(props) {
  const { project } = props;
  const { madeWith } = project;

  return (
    <div className='project-info'>
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
