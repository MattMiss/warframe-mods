import React from 'react';
import classes from './DescCell.css'

const descCell = (props) => {

    const description = props.contents.map(desc => {
        if (desc.includes('Increases')){
            return (
                <li key={desc} className={classes.Green}>
                    {desc}
                </li>
            );
        }else if (desc.includes('Reduces')){
            return (
                <li key={desc} className={classes.Red}>
                    {desc}
                </li>
            );
        }else if (desc.includes('Exclusive to PvP')){
            return (
                <li key={desc} className={classes.Purple}>
                    {desc}
                </li>
            );
        }else{
            return (
                <li key={desc}>
                    {desc}
                </li>
            );
        }
        
        
    });
    
    

    return(     
        <p>{description}</p>
    );
};

export default descCell;