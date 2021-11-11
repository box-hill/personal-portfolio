import React from 'react';
import IconWrapper from './IconWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

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
      <button>Live Demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
      <button>Github Code <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
    </div>
  );
}

export default ProjectInfo;
