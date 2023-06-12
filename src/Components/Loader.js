import React from 'react';
import ContentLoader from 'react-content-loader';
export default function Loader(){
    return(
        <>
               <ContentLoader viewBox="0 0 1000 800">
      <rect x="0" y="0" width="100%" height="400" />
      <rect x="0" y="420" width="80%" height="30" />
    </ContentLoader>
        </>
    );
}