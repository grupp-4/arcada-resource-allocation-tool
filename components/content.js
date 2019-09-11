import styles from "./styles.scss";
import Link from "next/link";
import DenseTable from "components/material-table.js";
import SubmitButton from "components/SubmitButton.js";
import DiscardButton from "components/DiscardButton.js";
import MyImage from "components/Image.js";
import SimpleTabs from "components/tab-switcher-buttons.js"


function ContentComponent() {
    return (
        <div className={`${styles.gridStyles} ${styles.gridMain}`}>
            <SimpleTabs />
            <DenseTable />
            <DenseTable />
            <SubmitButton /><DiscardButton />
        </div>
    )
}




export default ContentComponent