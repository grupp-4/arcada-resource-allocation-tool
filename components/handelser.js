import styles from "./styles.scss";
import ExampleComponent from "components/example-component";
const uuidv4 = require('uuid');

function HandelserComponent() {

    let compArray = [];

    let loopComps = () => {
        for (let i = 0; i < 4; i++) {
            console.log("lolol " + i);
            compArray[i] = <ExampleComponent />;
        }
    }

    return (
        <>
            <div key={uuidv4()} className={`${styles.gridStyles} ${styles.gridHandelser}`}>
                This is the handelser
                {/*
            {loopComps()}
            <li>
            {compArray.map((item) => {
                return item;
            })}
            </li>
            */}
            </div>
        </>
    )
}

export default HandelserComponent