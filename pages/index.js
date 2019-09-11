import ExampleComponent from "components/example-component";
import HandelserComponent from "components/handelser.js";
import GroupedButtons from "components/NavBar.js"
import HeaderComponent from "components/header.js";
import ContentComponent from "components/content.js";
import styles from "../components/styles.scss";
import MyImage from "components/Image.js";

const uuidv4 = require('uuid');

import Header from '../components/nextTutorial.js';

function Index() {
    return (
        <>
            <div className={styles.gridContainer}>
                <HeaderComponent /> <GroupedButtons /> <HandelserComponent /> <ContentComponent /> 
            </div>
        </>
    );
}

export default Index
