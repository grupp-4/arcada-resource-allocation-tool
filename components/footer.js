import styles from "./styles.scss"

function FooterComponent() {
    return (
        <div className={`${styles.gridStyles} ${styles.gridFooter}`}>
            This is the footer
        </div>
    )
}

export default FooterComponent