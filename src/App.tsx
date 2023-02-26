import { useState, useEffect } from 'react';
import './App.css';
import TreeNode from './components/Node/node';


export default function App() {
  class BinarySearchTree {
    root: null | TreeElem
    constructor() { this.root = null }  //Уставливаем коренной элемент дерева навным null

    insert(value: number) {  // метод добавления нового элемента дерева
      let newNode = new TreeElem(value); // создаем объект узла дерева
      if (this.root === null) {  //если дерево пустое, добавленный элемент становится корнем дерева
          this.root = newNode;
      } else {  //если дерево не пустое, то ищем место для нового элемента в дереве начиная с корня дерева
          this.insertNode(this.root, newNode);  
      }
    }

    insertNode(node: TreeElem, newNode: TreeElem) {
      if (newNode?.value == node?.value) {return} //если такой элемент найден, то не делаем ничего (только потому что индекс и значение элемента в нашей задаче совпадают)
      if (newNode?.value < node?.value) { // если новый элемент меньше рассматриваемого узла
          if (node.left === null) { //и рассматриваемый узел не имеет ветки с меньшими значениями
              node.left = newNode;  // то назначаем новый элемент началом данной ветки
          } else {
              this.insertNode(node.left, newNode); // если рассматриваемый узел имеет ветку с меньшими значениями, то рекурсивно  ищем место для нового элемента в этой ветке
          }
      } else {  // тоже самое с правой веткой
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

  useEffect(() => {  //обработчик добавления элемента в дерево по нажатию пробела
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
