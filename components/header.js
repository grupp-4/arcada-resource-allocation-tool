import styles from "./styles.scss"
import MyImage from "components/Image.js";

function HeaderComponent() {
    return (
        <div className={`${styles.gridStyles} ${styles.gridHeader}`}>
            <MyImage />
        </div>
    )
}

export default HeaderComponent