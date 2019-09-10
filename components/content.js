import styles from "./styles.scss"

function ContentComponent() {
    return (
        <div className={`${styles.gridStyles} ${styles.gridMain}`}>
            <form>
                This is the content
            <table>
                </table>
            </form>
        </div>
    )
}

export default ContentComponent