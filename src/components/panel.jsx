import styles from '@/styles/Home.module.css'

const Panel = (props = {}) => {

  return <div className={styles.panel}>
    {props.children}
  </div>
}

export default Panel