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

const getChildren = (node) => node.children;

const getNode = R.curry((nodes, id) => nodes[id]);

const addChildId = R.curry((childId, node) => Object.assign({}, node, {children: R.concat(getChildren(node), [childId])}));

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

const addchildalt = (parentId, childDetails, nodes) => addchildalt2(R.length(nodes), parentId, childDetails)(nodes);



module.exports = {createInitial, getChildren, push, addChildId, addChildIdToParent, addChild, toArray}
