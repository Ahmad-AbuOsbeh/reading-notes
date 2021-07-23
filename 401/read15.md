# Trees

- trees is a hierarchical data structure that contains nodes and starts from one node.

- binary tree is a tree that each node contains two childrens only.

- binary search tree is a binary tree but the left side of the node will has the values that smaller than the root. and right side has the larger ones.

- root : first node of tree, that the tree starts from it.

- edge : connection between two nodes(parent and child)

- leaf : the node that doesn't has a child.

- height : the distance from the root and the furthest child or leaf.(number of edges).

- k : the number that determine the maximun number of childrens the tree could has. in binary tree k=2.

- left : one of two paths that have the childrens of a node.

- right : the other path.

- ways of traversing trees :

  - DFS : depth first search, that means will traverse the tree from the root vertically. it has three types :

    - Pre-order: root >> left >> right
    - In-order: left >> root >> right
    - Post-order: left >> right >> root

  - BFS : breadth first search, that will traverse trees from root horizontally.

- in general, The most common way to traverse through a tree is to use recursion.

- in BFS the best to use Queue to travers the tree.

- in binary search tree, when search about an element the best practice to use while loop.
