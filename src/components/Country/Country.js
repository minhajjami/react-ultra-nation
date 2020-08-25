import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.Country;
    const handelAddCountry=props.handleAddCountry;
    const flagStyle = { height: '50px' };
    const countryStyle={border:'1px soild red',margin:'10px',padding:'10px'}
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Region:{region}</p>
            <button onClick={()=>handelAddCountry(props.Country)}>Add Country</button>
        </div>
    );
};

export default Country;