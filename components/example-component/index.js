import styles from "../styles.scss"
const uuidv4 = require('uuid');

function ExampleComponent() {
    return (
        <ul key={uuidv4()}> This is the Example Component.</ul>
    )
}

export default ExampleComponent;
