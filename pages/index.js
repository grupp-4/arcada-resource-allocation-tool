import ExampleComponent from "components/example-component";
import HandelserComponent from "components/handelser.js"
import HeaderComponent from "components/header.js"
import ContentComponent from "components/content.js"
import styles from "../components/styles.scss";

function Index() {
    return (
        <>
            <div className={styles.gridContainer}>
                <HeaderComponent /> <HandelserComponent /> <ContentComponent />
            </div>
        </>
    );
}

export default Index
