/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}


function kthToLastNode(k, head){
  if (!head || !k) return undefined;
  let current = head;
  const cache = [];
  while (current !== null) {
    cache.push(current.value);
    current = current.next;
  }
  console.log(cache);
  if (k <= cache.length) {
    const index = (cache.length - k);
    return cache[index];
  } else {
    return undefined;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));

//Do not delete! 
module.exports = {Node, kthToLastNode};