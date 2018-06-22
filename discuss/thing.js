const R = require('ramda');

const curry = R.curry;
const pipe = R.pipe;
const log = curry(function(x) { console.log(x); return x; });
const get = pipe((x)=>[x] ,R.pick);
const isContainedBy = curry((array, item) => R.contains(item, array));

const type_initial = { type: 'initial', d:'fadf' };
const type_counterpoint = { type: 'counterpoint' };
const type_supportingPoint = { type: 'supporting point' };
const type_supportingEvidence = { type: 'supporting Evidence' };
const type_supportingExplanation = { type: 'supporting Explanation' };

const getType = get('type');

const isSupporting = pipe(getType, isContainedBy([type_supportingPoint, type_supportingEvidence, type_supportingExplanation]));

pipe(isSupporting, log)(type_initial);
pipe(isSupporting, log)(type_supportingEvidence);
pipe(isSupporting, log)(Object.assign(type_initial));
pipe(isSupporting, log)(Object.assign(type_supportingEvidence));