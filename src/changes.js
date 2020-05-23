// implements the function for strength change

const plus_change = (x,a) => {
    let ans = a;
    let tmp = (x-a)/50;
    tmp = Math.exp(tmp)/(1 + Math.exp(tmp));
    tmp = tmp*(50*x/a - 10);
    ans = ans + tmp*(Math.log(1+x))/Math.log(10);
    return Math.floor(ans);
};

const minus_change = (x,a) => {
    let ans = Math.max(a-100, Math.sqrt(a*x));
    ans = Math.min(ans, a+50);
    ans = ans - 50;
    return Math.floor(ans);
};

const changes = (strength, difficulty, verdict) => {
    if(verdict == 'OK'){
        return plus_change(difficulty,strength);
    }
    else {
        return minus_change(difficulty,strength);
    }
}

export default changes;
