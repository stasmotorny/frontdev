import React, { Component } from 'react';
import Gallery from '../gallery/gallery';

class GalleryPage extends Component {
    render(){
        return (
            <div className="main">
                <h3 className="header3">Gallery</h3>
                <Gallery />
            </div>
        );
    }
}

export default GalleryPage;