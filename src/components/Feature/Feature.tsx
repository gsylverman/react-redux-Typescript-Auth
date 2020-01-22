import React from 'react';
import reqAuth from '../../reqAuth/reqAuth';

export interface FeatureProps {
    
}
 
const Feature: React.SFC<FeatureProps> = () => {
    return ( 
        <div>
            Feature
        </div>
     );
}
 
export default reqAuth(Feature);