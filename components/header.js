import styles from "./styles.scss"

function HeaderComponent() {
    return (
        <div className={`${styles.gridStyles} ${styles.gridHeader}`}>
            This is the header
        </div>
    )
}

export default HeaderComponent