# Linked Lists

# Linked Lists

- linked list is a collection of nodes, starting with head object that will be null when the linked list is empty, then when adding the first node will update the value of the head to this node object, including the next propert that will point to the reference of the next node if it exist or null if it was the last node in the linked list.

- if we add a node to the first BigO of time will be O(1), but if we add between nodes or at the end, BigO of time will be O(n). and in the both cases the BigO of space will be as the value of nodes, and mostly will be O(1).

- there are two types of linked lists : singly & doubly; the difference is the singly only have one pointer to the next node. but the doubly has two pointers; the first one for the next node and the second one for the previous node.

# What’s a Linked List, Anyway pt1

- data structures : ways of organizing our data.
- linked lists are a linear data structure, that means we traversed over the data sequentially.
- arrays and linked lists are linear data structure.
- array is a static data structure, that means when the array created will allocate a certain space in memory, and this will be fixed even the number of elements inside the array decreased or increased. and every time will allocate the same space directly.
- linked lists are a dynamic data structure, that means every time we add a new element or node inside the linked list will allocate a small space for this element only, and every element will take a special space for it when it's created.
- also in dynamic data structure, the allocated spaces will be in different places depending on the element itself. but in static will be at the same place.

# What’s a Linked List, Anyway pt2

- Big O Notation is a way of evaluating the performance of an algorithm.
- Big O determine how much the time & space we need to run this algorithm.
- O(1) : means i need a constant time & and same space, and doesn't matter how much the elements we have or how huge our input is.
- O(n) : means that as our input grows, the space and time that we need to run that algorithm grows linearly.
- a linked list is usually efficient when it comes to adding and removing most elements, but can be very slow to search and find a single element.

![arrays Vs linked lists](https://miro.medium.com/max/700/1*cUehR5S18XSoVLaPNfNzlA.jpeg)
