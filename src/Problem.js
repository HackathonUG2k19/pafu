import React from 'react';
import './Problem.css'

const PROB_URL = "http://www.codeforces.com/problemset/problem/";

class Problem extends React.Component {
    render() {
        return (
            <a className="problem" href={PROB_URL + this.props.problem.contestId.toString() + "/" + this.props.problem.index} target="_blank">
                <div className="prob-id">{this.props.problem.contestId.toString()+this.props.problem.index}</div>
                <div className="prob-name">{this.props.problem.name}</div>

            </a>
        );
    }
}

export default Problem;
