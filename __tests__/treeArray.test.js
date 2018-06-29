const treeArray = require('../src/treeArray');
const R = require('ramda');

test('createInitial', () =>{
    expect(treeArray.createInitial({description: 'description'}))
    .toMatchObject([{id:0, children:[], description:'description'}]);
})

test('addChildId adds chlid 25', () => {
    let node = {id: 21, description: 'lelele', children: [22, 23, 24]}
    expect(treeArray.addChildId(25, node)).toMatchObject({id: 21, description: 'lelele', children: [22, 23, 24, 25]});
  });

  test('addChildToParent', () => {
      let nodes = [{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: []}];
      expect(treeArray.addChildIdToParent(2, 3, nodes))
      .toMatchObject([{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: [3]}]);

      expect(nodes)
      .toMatchObject([{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: []}]);
  });

  test('addChild', () => {
      let nodes = [{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: []}];
      expect(treeArray.addChild(nodes, 2, {description: 'new'}))
      .toMatchObject([{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: [3]}, {id: 3, children: [], description: 'new'}]);

      expect(nodes)
      .toMatchObject([{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: []}]);
  });

  test('addChildalt', () => {
      let nodes = [{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: []}];
      expect(treeArray.addchildalt(2, {description: 'new'}, nodes))
      .toMatchObject([{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: [3]}, {id: 3, children: [], description: 'new'}]);

      expect(nodes)
      .toMatchObject([{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: []}]);
  });

  test('getChildIds of createInitial', () => {
      let initialArray = treeArray.createInitial({});
      expect(R.pipe(treeArray.getInitial, treeArray.getChildIds)(initialArray)).toMatchObject([]);   
  })

  test('getChildren', () => {
    let nodes = [{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: []}];
    expect(treeArray.getChildren(nodes, nodes[0]))
    .toMatchObject([{id: 1, children: []}, {id: 2, children: []}]);

    expect(nodes)
    .toMatchObject([{id: 0, children: [1, 2]}, {id: 1, children: []}, {id: 2, children: []}]);
});

  test('maptest', ()=> {
     expect(R.map(R.add(1), [])).toMatchObject([]);
  })

  //test('values', () => {
      //expect(treeArray.toArray(2)).toMatchObject([2]);
  //})