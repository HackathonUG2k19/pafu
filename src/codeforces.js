// Contains all request methods to the codeforces api

import React from 'react';

const BASE_URL = "https://codeforces.com/api/";

const codeforces = {
    getSubmissions : (handle) => {
        // method to return a list of all submissions for a given handle
        let url = BASE_URL + "user.status?handle=" + handle;
        return fetch(url)
            .then(response => response.json())
            .then(jsonResponse => jsonResponse.result)
            .catch(() => []);
    },

    getProblems : () => {
        // method to return a list of problems based on tags, and sorted by
        // number of correct submissions
    },

};

export default codeforces;
