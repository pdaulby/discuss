const treeArray = require('../src/treeArray');

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

  //test('values', () => {
      //expect(treeArray.toArray(2)).toMatchObject([2]);
  //})