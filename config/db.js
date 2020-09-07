const axios = require('axios');

const baseUrl = 'https://search-employes-hsyalwsgdajn37egv3mlydji7a.us-east-1.es.amazonaws.com';
const auth = 'Basic eW9zaGlzdWFyZXoxMDpFbGFzdGljX3kwc2gxc3U0cjN6MTA=';



exports.get = async (index) => {
    var config = {
        method: 'get',
        url: baseUrl+'/'+index+'/_search',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        data : ''
    };
    try {
        let response = await axios(config);
        return response.data;
    } catch (error) {
        return error;
    }
}

exports.getById = async (index, id) => {
    var config = {
        method: 'get',
        url: baseUrl+'/'+index+'/_doc/'+id,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        data : ''
    };
    try {
        let response = await axios(config);
        return response.data;
    } catch (error) {
        return error;
    }

}


exports.post = async (index, body) => {
    var config = {
        method: 'post',
        url: baseUrl+'/'+index+'/_doc',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        data: body
    };
    try {
        let response = await axios(config);
        return response.data;
    } catch (error) {
        return error;
    }
}

exports.put = async (index, body, id) => {
    var config = {
        method: 'put',
        url: baseUrl+'/'+index+'/_doc/'+id,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        data: body
    };
    try {
        let response = await axios(config);
        return response.data;
    } catch (error) {
        return error;
    }
}

exports.delete = async (index, id) => {
    var config = {
        method: 'delete',
        url: baseUrl+'/'+index+'/_doc/'+id,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        data: ''
    };
    try {
        let response = await axios(config);
        return response.data;
    } catch (error) {
        return error;
    }
}