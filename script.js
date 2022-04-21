class Node {
constructor(data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
}
}

class Tree {
    constructor() {
        this.root = null;

    }
    toString = () =>{
        if(this.root){
            console.log(this.root.data);
            if((this.root.leftChild !== null) && (this.root.rightChild !== null)){
                console.log(this.root.leftChild.data);
                console.log(this.root.rightChild);
            }else if(this.root.leftChild){
                console.log(this.root.leftChild.data);
            }else if(this.root.rightChild){
                console.log(this.root.rightChild.rightChild.data);
            }
        }
    };
   insert = (data) => {
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }else{
            const searchTree = (node) =>{
                if(data < node.data){
                    if(node.leftChild === null){
                        node.leftChild = new Node(data);
                        return;
                    }else if(node.leftChild !== null){
                        return searchTree(node.leftChild);
                    }
                }else if(data > node.data){
                    if(node.rightChild === null){
                        node.rightChild = new Node(data);
                        return;
                    }else if(node.rightChild !== null){
                        return searchTree(node.rightChild);
                    }
                }else{
                    return null;
                }
            };return searchTree(node);
        }
   };
   find = (num) => {
       let current = this.root;
       while(current.data !== num){
           if(num < current.data){
               current = current.leftChild;
           }else{
               current= current.rightChild;
           }
           if(current === null){
               return null;
           }
       }
       return current;
   };


}

const bst = new Tree();

bst.insert(2);
bst.insert(5);
bst.insert(8);
bst.insert(9);
bst.insert(3);
bst.insert(1);

console.log(bst.root);
bst.toString();
console.log(bst.find(3));
