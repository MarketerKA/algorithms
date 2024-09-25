function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
    // Create a dummy node to start the merged list
    let head = new ListNode();
    let current = head;

    // Merge the lists by comparing values
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes if one list is not empty
    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the merged list, skipping the initial dummy node
    return head.next;
};


let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(list1, list2));