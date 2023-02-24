import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeNode from './components/Node/node';


export default function App() {
  console.log("render")
  class BinarySearchTree {
    root: null | TreeElem
    constructor() { this.root = null }

    insert(value: number) {
      let newNode = new TreeElem(value);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode); 
      }
    }

    insertNode(node: TreeElem, newNode: TreeElem) {
      if (newNode?.value == node?.value) {return} //если такой элемент найден, то не дедаем ничего
      if (newNode?.value < node?.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }
};

  class TreeElem {
    value: number;
    left: TreeElem | null;
    right:  TreeElem | null;
    constructor(value: number) {
      this.value = value;
      this.left = null;  
      this.right = null; 
    }
  };

  const [tree, setTree] = useState(new BinarySearchTree()); 

  useEffect(() => {  //Добавление элемента в дерево по нажатию пробела
    function handleSpaceClick(event: KeyboardEvent) {
      if (event.code == 'Space') {
        let newTree = Object.assign(new BinarySearchTree, tree);
        newTree.insert(Math.round(Math.random()*200-100))
        setTree(newTree);
      }
    }
    document.addEventListener('keydown', handleSpaceClick);
    return function cleanup() {document.removeEventListener('keydown', handleSpaceClick)}
  });

  return (
    <div className="app">
      <header>
        <h2>Визуализация бинарного дерева поиска</h2>
        <p>Нажмите пробел, чтобы добавить случайный элемент</p>
      </header>
      <main className="main">
        {tree.root && <TreeNode data ={tree.root}/>}
      </main>
    </div>
  );
}
