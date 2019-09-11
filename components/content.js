import styles from "./styles.scss"
import Link from "next/link"

function ContentComponent() {
    return (
        <div className={`${styles.gridStyles} ${styles.gridMain}`}>
            <form>
                This is the content<br />
                <table>
                </table>
            </form>
        </div>
    )
}

export default ContentComponent