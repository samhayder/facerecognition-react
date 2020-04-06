import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div className="">
            <p className="f3">{'This Magic Brain will detect faces in your pictures. Git it a try.'}</p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="f4 center w-70 pa2"/>
                    <button className="w-30 grow link f4 dib ph3  pv2 white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;