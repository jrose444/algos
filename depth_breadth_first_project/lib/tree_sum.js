function treeSum(root) {
    if (!root) return 0
    let val = 0
    let queue = [root]
        while(queue.length){
            let node = queue.shift()
            val += node.val;
            if (node.right) queue.push(node.right)
            if (node.left) queue.push(node.left)
        }
        return val

}


module.exports = {
    treeSum
};