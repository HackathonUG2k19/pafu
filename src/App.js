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
        this.updateStrengths = this.updateStrengths.bind(this);
    }

    handleHandleChange(event) {
        this.setState({ handle: event.target.value });
    }

    getSubmissions() {
        codeforces.getSubmissions(this.state.handle).then(submissions =>{
            this.setState({submissions: submissions}, this.updateStrengths);
        });
    }

    updateStrengths() {
        let tags = JSON.parse(JSON.stringify(BLANK_TAGS));
        let submissions = this.state.submissions.reverse();
        for(let sub of submissions){
            let prob = sub.problem;
            for(let tag of prob.tags){
                if(tags[tag]){
                    tags[tag].submissionCount += 1;
                    tags[tag].strength = changes(tags[tag].strength, prob.rating, sub.verdict);
                }
            }
        }
        this.setState({tags: tags});
    }

    render() {
        return (
            <div className="App">
                <h1>Cf-Suggester</h1>
                <div>
                    <input onChange={this.handleHandleChange} placeholder="enter codeforces handle" />
                    <button onClick={this.getSubmissions}>Go</button>
                </div>
                {/*Object.entries(this.state.tags).map(tag => <h4>{tag[0]+"-"+tag[1].strength}</h4>)*/}
            </div>
            //input for handle here
            //suggested problems here
        );
    }
}


export default App;
