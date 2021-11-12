import React from 'react';
import IconWrapper from './IconWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

function ProjectInfo(props) {
  const { project } = props;
  const { madeWith, description, motivation, demoUrl, githubUrl } = project;

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
      {demoUrl ? <a href={demoUrl} target='none'>Live Demo <FontAwesomeIcon icon={faExternalLinkAlt}/></a> : null}
      <a href={githubUrl} target='none'>Github Code <FontAwesomeIcon icon={faExternalLinkAlt}/></a>
    </div>
  );
}

export default ProjectInfo;
