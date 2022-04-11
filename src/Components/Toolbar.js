import React from 'react';

const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
        <div className='box-btn'>
            {filters.map((filter, inx)=>
                <button
                    onClick={(o)=> {onSelectFilter(o.target.value)}}
                    value={filter}
                    key={inx}
                    className={filter===selected?selected+'--active': selected}>{filter}</button>
                )
            }
        </div>
    );
};

export default Toolbar;