import React from 'react';
import { ReactComponent as TogetherPic } from './together.svg';
import { ReactComponent as DescripPic } from './description.svg';
import { ReactComponent as StartWithHello } from './hello.svg';
import ResponsiveAppBar from './ResponsiveAppBar';
import LookingButton from './LookingButton';
import SharingButton from './SharingButton';

function HomePage(){
    return(
        <div>
            <header className="App-header" style={{background: '#dcf1f9'}}>
                <TogetherPic/>
                <DescripPic/>
                <StartWithHello/>
            </header>
                <LookingButton/>
                <SharingButton/>
        </div>
    );
}

export default HomePage; 