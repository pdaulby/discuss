const R = require('ramda');
const push = R.curry((value, array)=> [...array, value]);
const toArray = R.curry((x)=>[x]);

const emptyNode = (id) => ({
    id: id,
    children: [],
});

const createNode = R.curry((id, nodeDetails) => 
    Object.assign({}, nodeDetails, emptyNode(id)));

const createInitial = R.pipe(createNode(0), toArray);

const getChildren = (node) => node.children;

const getNode = R.curry((nodes, id) => nodes[id]);

const addChildId = R.curry((childId, node) => Object.assign({}, node, {children: push(childId, getChildren(node))}));

const addChildIdToParent = R.curry((parentId, childId, nodes) => R.adjust(addChildId(childId), parentId, nodes));

//////////////////////////////////

const addChild = function(nodes, parentId, childDetails) {
    let childId = R.length(nodes);
    let childNode = createNode(childId, childDetails);

    let newNodes = addChildIdToParent(parentId, childId, nodes);
    return push(childNode, newNodes);
}

const addchildalt2 = (childId, parentId, childDetails) => R.pipe(
    push(createNode(childId, childDetails),
    addChildIdToParent(parentId, childId)));

const addchildalt = (nodes, parentId, childDetails) => addchildalt2(R.length(nodes), parentId, childDetails)(nodes);



module.exports = {createInitial, getChildren, push, addChildId, addChildIdToParent, addChild, toArray}
