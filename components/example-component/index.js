import styles from "../styles.scss"

function ExampleComponent() {
    return (
        <div className={`${styles.gridStyles} ${styles.gridHeader}`}>
            <h1 className={styles.exampleClass}>This is the Example Component. asd</h1>
        </div>
    )
}

export default ExampleComponent;
