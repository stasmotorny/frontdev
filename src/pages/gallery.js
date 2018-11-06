import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import { Request } from '../requestPhoto';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    };

    componentWillMount() {
        // Request for images tagged animals
        axios.get('https://res.cloudinary.com/dphlxxsh1/image/list/animals.json', {heders: {sign_url: true,}})
            .then(res => {
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            })
            .catch(function(error) {
                console.log(error)
            });
        // {Request};
    };

    render(){
        return (
            <div className="main">
                <h1>Gallery</h1>
                <div className="gallery">
                    <CloudinaryContext cloudName="dphlxxsh1"> {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <div>
                                                <a target="_blank" href={`https://res.cloudinary.com/dphlxxsh1/image/upload/${data.public_id}.jpg`}>
                                                    <Image publicId={data.public_id } signUrl="true">
                                                        <Transformation
                                                            crop="scale"
                                                            width="300"
                                                            height="200"
                                                            dpr="auto"
                                                            responsive_placeholder="blank"
                                                        />
                                                    </Image>
                                                </a>
                                            </div>
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Gallery;