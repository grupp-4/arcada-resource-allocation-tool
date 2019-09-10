import styles from "./styles.scss"

function ContentComponent() {
    return (
        <div className={`${styles.gridStyles} ${styles.gridMain}`}>
            This is the content
        </div>
    )
}

export default ContentComponent