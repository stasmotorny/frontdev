import React, { Component } from 'react';
import axios from 'axios';
import { Transformation, Image } from 'cloudinary-react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    };

    componentWillMount() {
        axios.get('https://res.cloudinary.com/dphlxxsh1/image/list/sites.json')
            .then(res => {
                this.setState({gallery: res.data.resources});
            })
            .catch(function(error) {
                console.log(error)
            });
    };

    render(){
        return (
                <div className="gallery">
                    {this.state.gallery.map((data, i) => {
                        return (
                            <a target="_blank" href={`${data.context.custom.link}`} className="sitelink" key={i}>
                                <Image cloudName="dphlxxsh1" publicId={data.public_id} className="siteimg">
                                    <Transformation
                                        crop="scale"
                                        width="auto"
                                        dpr="auto"
                                        responsive
                                        responsive_placeholder="blank"
                                    />
                                </Image>
                            </a>
                        )
                    })}
                </div>
        );
    }
}

export default Gallery;