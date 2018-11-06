import axios from 'axios';

export const Request = () => {
    return axios.get('https://res.cloudinary.com/dphlxxsh1/image/list/animals.json', {heders: {sign_url: true,}})
        .then(res => {
            console.log(res.data.resources);
            this.setState({gallery: res.data.resources});
        })
        .catch(function(error) {
            console.log(error)
        });
}

