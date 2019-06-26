import React from "react";
import autamarocchi from '../../images/autamarocchi.png'
import artigiani from '../../images/artigiani.png'
import gourmet from '../../images/gourmet.png'
import platform from '../../images/platform.png'

const project_data = [
  {
   title: 'Autamarocchi',
   image:autamarocchi,
   description: ' I made this site for Crowdm.com; starting from designers project, I developed the web-site from Wp template, with jQuery css and PHP snippets for customization.',
   link: 'https://www.autamarocchi.com/'
  },
  {
    title: 'Artigiani del legno',
    image: artigiani ,
    description: 'I made this Wordpress website for a private company from scratch. I used Wp template and implemented css and jquery for personalization.',
    link: 'https://www.autamarocchi.com/'
   },
  
   {
    title: 'Chez Gourmet',
    image: gourmet,
    description: 'I made this site in a team  for a Chingu project ( list update with FirebaseDB as backend database ), it is deveoped in VUE.JS nad hosted on Github pages (I made the design and some coding parts in VUE for the recipe list).',
    link: 'https://chingu-voyage6.github.io/Geckos-Team-32/#/'
   },
  
   {
    title: 'The Platform',
    image:platform,
    description: 'React-Redux-Firebase final project with MaterializeCSS, a complete platform with autentication and CRUD ability hosted on Firebase.',
    link: 'https://the-platform-e260d.firebaseapp.com'
   },
  
  
  ]

  const listItems = project_data.map(project => (
    <li key={project.title}>
      <div className="col s12 m4 spacer">
        <div className="card">
          <div className="card-image">
            <img src={project.image} alt={project.title} />
            <span className="card-title">{project.title}</span>
            <a
              href={project.link}
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">link</i>
            </a>
          </div>
          <div className="card-content">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </li>
  ));
 

const Project = () => {
  return (
    <div className="text-container">
      <div className="row">
      <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default Project;
