import {  memo } from 'react';
import styles from './node.module.css';

type TreeNodePropsType = any;

let TreeNode = (({data}: TreeNodePropsType) => {
  return (
    <div className={styles.node}>
      <div className={styles.elementValue}>
      <div className={styles.connectionPartMiddle}/>
        <div className={styles.text}>{data.value}</div>
      </div>
      <div className={styles.childrens}>
        <div className={styles.children}>
        <div className={styles.connectionPartTop}/>  
          {data.left ? <TreeNode data= {data.left}/>:<div className={styles.text}>-</div>}
        </div>
        <div className={styles.children}>
          <div className={styles.connectionPartBot}/>
          {data.right ? <TreeNode data= {data.right}/>:<div className={styles.text}>-</div>}
        </div>
      </div>
    </div>
  );
}
)
export default TreeNode