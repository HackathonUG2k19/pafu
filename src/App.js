import React from 'react';
import './App.css';
import codeforces from './codeforces'
import changes from './changes.js'

const BLANK_TAGS = {
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
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handle : '',
            tags : BLANK_TAGS,
            suggestedProblems : [],
            submissions: []
        };
        this.handleHandleChange = this.handleHandleChange.bind(this);
        this.getSubmissions = this.getSubmissions.bind(this);
    }

    handleHandleChange(event) {
        this.setState({ handle: event.target.value });
    }

    getSubmissions() {
        codeforces.getSubmissions(this.state.handle).then(submissions =>{
            this.setState({submissions: submissions});
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Cf-Suggester</h1>
                <div>
                    <input onChange={this.handleHandleChange} placeholder="enter codeforces handle" />
                    <button onClick={this.getSubmissions}>Go</button>
                </div>
                {/*this.state.submissions.map(sub => sub.id.toString())*/}
            </div>
            //input for handle here
            //suggested problems here
        );
    }
}


export default App;
