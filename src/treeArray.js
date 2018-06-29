const R = require('ramda');
const push = R.flip(R.concat);
const toArray = R.curry((x)=>[x]);

const emptyNode = (id) => ({
    id: id,
    children: [],
});

const createNode = R.curry((id, nodeDetails) => 
    Object.assign({}, nodeDetails, emptyNode(id)));

const createInitial = R.pipe(createNode(0), toArray);

const getNode = R.curry((nodes, id) => nodes[id]);

const getInitial = (nodes) => nodes[0];

const getChildIds = (node) => node.children;

const getChildren = (nodes, node) => R.pipe(getChildIds, R.map(getNode(nodes)))(node)


const addChildId = R.curry((childId, node) => Object.assign({}, node, {children: R.concat(getChildIds(node), [childId])}));

const addChildIdToParent = R.curry((parentId, childId, nodes) => R.adjust(addChildId(childId), parentId, nodes));

//////////////////////////////////

const addChild = function(nodes, parentId, childDetails) {
    let childId = R.length(nodes);
    let newNodes = addChildIdToParent(parentId, childId, nodes);
    return R.concat(newNodes, [createNode(childId, childDetails)]);
}

const addchildalt2 = (childId, parentId, childDetails) => 
    R.pipe(
        addChildIdToParent(parentId, childId),
        push([createNode(childId, childDetails)]));

const addchildalt = R.curry((parentId, childDetails, nodes) => addchildalt2(R.length(nodes), parentId, childDetails)(nodes));



module.exports = {createInitial, getInitial, getChildIds, getChildren, addChildId, addChildIdToParent, addChild, addchildalt}
