import React from 'react';
const ProjectList = ({projects}) => {
    return (
        <div className='images'>
            {
                projects.map((item, index) =>
                    <img
                        src={item.img}
                        alt={`portfolio ${index}`}
                        className={item.category}
                        key={index}
                        style={{maxWidth:'100%',
                                padding:'10px',
                                height: '100%'}}
                    />
                )
            }
        </div>
    );
};

export default ProjectList;


