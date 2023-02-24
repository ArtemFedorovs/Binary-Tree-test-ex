import {  memo } from 'react';
import styles from './node.module.css';

type TreeNodePropsType = any;

let TreeNode = (({data}: TreeNodePropsType) => {
  return (
    <div className={styles.node}>
      <div className={styles.elementValue}>
       <div className={styles.connectionPartMiddle}/> {/*вертикальная  часть стрелки, соединяющей кружки */}
        <div className={styles.text}>{data.value}</div>
      </div>
      {(data.left || data.right) &&<div className={styles.childrens}>
        <div className={styles.children}>
        <div className={styles.connectionPartLeft}/>   {/*верхняя горизонтальная часть стрелки, соединяющей кружки */}
          {data.left ? <TreeNode data= {data.left}/>:<div className={styles.text}>-</div>}
        </div>
        <div className={styles.children}>
          <div className={styles.connectionPartRight}/> {/*нижняя горизонтальная часть стрелки, соединяющей кружки */}
          {data.right ? <TreeNode data= {data.right}/>:<div className={styles.text}>-</div>}
        </div>
      </div>}
    </div>
  );
}
)
export default TreeNode