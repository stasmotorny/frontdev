import React, {Component} from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../gallery.css';

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
            .catch(function (error) {
                console.log(error)
            });
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        };

        console.log(this.state)
        return (
            <Slider {...settings} className="gallery">
                {this.state.gallery.map((data, i) => {
                    const imgUrl = data.context.custom.imgLink;
                    return (
                        <div className="galleryItem">
                            <div className="galleryDescription" style={{backgroundImage: `url(${imgUrl})`}}>
                                <div className="galleryDescription--textBlock">
                                    <h4 className="galleryDescription--textBlock__title">
                                        {data.context.custom.caption}
                                    </h4>
                                    <p className="galleryDescription--textBlock__technologies">
                                        <b>Technologies: </b>{data.context.custom.technologies}
                                    </p>
                                </div>
                                <div className='galleryDescription--links'>
                                    <a href={`${data.context.custom.link}`} className="galleryDescription--links__left">View
                                        site</a>
                                    <a href={`${data.context.custom.code}`} className="galleryDescription--links__right">View
                                        code</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        );
    }
}

export default Gallery;