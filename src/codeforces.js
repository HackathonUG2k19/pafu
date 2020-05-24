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

    getProblems : (tag, minRating, maxRating) => {
        // method to return a list of problems based on tags, and sorted by
        // number of correct submissions
        
        let probList = [];
        let url = BASE_URL + "problemset.problems?tags=" + tag;
        return fetch(url)
            .then(response => response.json())
            .then(jsonResponse => {
                let retList = jsonResponse.result.problems;
                retList = retList.filter(prob => prob.rating <= maxRating && prob.rating >= minRating);
                if(retList.length <= 5) {
                    probList = retList;
                }
                else {
                    for(let i = 0; i<5; i++){
                        probList.push(retList[Math.floor(Math.random()*retList.length)]);
                    }
                }
                return probList;
            })
            .catch(() => []);
    },

};

export default codeforces;
