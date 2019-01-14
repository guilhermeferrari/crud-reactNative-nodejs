var axios = require('axios');


module.exports.get = () => {
    axios({
        method: 'get', // verbo http
        url: 'http://192.168.1.6:3300/', // url
    })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
};

module.exports.post = (fName, lName, bio) => {
    axios({
        method: 'post', // verbo http
        url: 'http://192.168.1.6:3300/', // url
        data: {
            first_name: fName,
            last_name: lName,
            bio: bio
        }
    })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports.put = (id, fName, lName, bio) => {
    var url = `http://192.168.1.6:3300/${id}`;
    axios({
        method: 'put', // verbo http
        url: url, // url
        data: {
            first_name: fName,
            last_name: lName,
            bio: bio
        }
    })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports.delete = (id) => {
    var url = `http://192.168.1.6:3300/${id}`;
    axios({
        method: 'delete', // verbo http
        url: url, // url
    })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}