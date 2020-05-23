import React from 'react';
import './App.css';
import codeforces from './codeforces'
import changes from './changes.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handle : '',
            submissions: [],
            tags : {
                'binary search' : {submissionCount: 0, strength: 1000},
                'bitmasks' : {submissionCount: 0, strength: 1000},
                'brute force' : {submissionCount: 0, strength: 1000},
                'chinese remainder theorem' : {submissionCount: 0, strength: 1000},
                'combinatorics' : {submissionCount: 0, strength: 1000},
                'constructive algorithms' : {submissionCount: 0, strength: 1000},
                'data structures' : {submissionCount: 0, strength: 1000},
                'dfs and similar' : {submissionCount: 0, strength: 1000},
                'divide and conquer' : {submissionCount: 0, strength: 1000},
                'dsu' : {submissionCount: 0, strength: 1000},
                'dp' : {submissionCount: 0, strength: 1000},
                'expression parsing' : {submissionCount: 0, strength: 1000},
                'fft' : {submissionCount: 0, strength: 1000},
                'flows' : {submissionCount: 0, strength: 1000},
                'games' : {submissionCount: 0, strength: 1000},
                'geometry' : {submissionCount: 0, strength: 1000},
                'graph matchings' : {submissionCount: 0, strength: 1000},
                'graphs' : {submissionCount: 0, strength: 1000},
                'greedy' : {submissionCount: 0, strength: 1000},
                'hashing' : {submissionCount: 0, strength: 1000},
                'implementation' : {submissionCount: 0, strength: 1000},
                'interactive' : {submissionCount: 0, strength: 1000},
                'math' : {submissionCount: 0, strength: 1000},
                'matrices' : {submissionCount: 0, strength: 1000},
                'meet-in-the-middle' : {submissionCount: 0, strength: 1000},
                'number theory' : {submissionCount: 0, strength: 1000},
                'probabilities' : {submissionCount: 0, strength: 1000},
                'schedules' : {submissionCount: 0, strength: 1000},
                'shortest paths' : {submissionCount: 0, strength: 1000},
                'sortings' : {submissionCount: 0, strength: 1000},
                'string suffix structures' : {submissionCount: 0, strength: 1000},
                'strings' : {submissionCount: 0, strength: 1000},
                'ternary search' : {submissionCount: 0, strength: 1000},
                'trees' : {submissionCount: 0, strength: 1000},
                'two pointers' : {submissionCount: 0, strength: 1000}
            },
            suggestedProblems : [],
            solvedProblems : [],
        };
    }

    render() {
        return (
            <h1>Cf-sugester</h1>
            //input for handle here
            //suggested problems here
        );
    }
}


export default App;
