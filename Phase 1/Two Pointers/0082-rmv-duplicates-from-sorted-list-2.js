/*
Abeda Khanam
23 May 23
https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) return head;

  let dummy = new ListNode();
  dummy.next = head;

  let pre = dummy,
    cur = head;

  while (cur != null) {
    if (cur.next != null && cur.val == cur.next.val) {
      while (cur.next != null && cur.val == cur.next.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return dummy.next;
};
