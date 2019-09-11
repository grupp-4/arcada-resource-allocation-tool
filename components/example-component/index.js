import {withLogging} from "gillog"
import classnames from "classnames"

import {useState, useEffect, useRef} from "react"

import Button from "@material-ui/core/Button"

import styles from "./styles.scss"

function ExampleComponent({log}) {
    const [state, setState] = useState({width: "auto", rotating: false})
    const exampleButton = useRef(null)
    useEffect(() => {
        const width = exampleButton.current.getBoundingClientRect().width
        setState(prevState => {
            log.debug(`width set to ${width}px`)
            return {
                width,
                rotating: prevState.rotating
            }
        })
    }, [])
    const onClick = () => {
        setState(prevState => {
            log.debug(`rotating set to ${!state.rotating}`)
            return {
                width: prevState.width,
                rotating: !state.rotating
            }
        })
    }
    return (
        <div style={{width: state.width}}>
            <Button className={styles.exampleButton} ref={exampleButton} onClick={onClick}>Example button</Button>
            <svg
                className={classnames(state.rotating ? styles.cogRotating : null, styles.cog)}
                width="100%"
                height="100%"
                viewBox="0 0 240 240"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                space="preserve"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2
                }}>
                <g transform="matrix(0.838391,0,0,0.889585,-179.927,-143.453)">
                    <path
                        d="M371.584,161.891C362.377,161.048 353.105,161.048 343.898,161.891L342.826,189.383C332.925,190.611 323.238,193.057 314.013,196.659L298.499,173.355C290.078,176.964 282.048,181.333 274.522,186.402L288.179,210.716C280.257,216.445 273.165,223.128 267.086,230.594L241.288,217.723C235.91,224.816 231.274,232.384 227.445,240.32L252.172,254.941C248.35,263.636 245.754,272.766 244.451,282.096L215.28,283.107C214.386,291.784 214.386,300.522 215.28,309.199L244.451,310.209C245.754,319.54 248.35,328.67 252.172,337.365L227.445,351.986C231.274,359.922 235.91,367.489 241.288,374.582L267.086,361.711C273.165,369.178 280.257,375.861 288.179,381.59L274.522,405.904C282.048,410.973 290.078,415.342 298.499,418.95L314.013,395.647C323.238,399.248 332.925,401.695 342.826,402.923L343.898,430.415C353.105,431.258 362.377,431.258 371.584,430.415L372.656,402.923C382.556,401.695 392.243,399.248 401.469,395.647L416.983,418.95C425.403,415.342 433.433,410.973 440.959,405.904L427.302,381.59C435.225,375.861 442.316,369.178 448.395,361.711L474.194,374.582C479.572,367.489 484.208,359.922 488.036,351.986L463.31,337.365C467.131,328.67 469.727,319.54 471.03,310.209L500.201,309.199C501.096,300.522 501.096,291.784 500.201,283.107L471.03,282.096C469.727,272.766 467.131,263.636 463.31,254.941L488.036,240.32C484.208,232.384 479.572,224.816 474.194,217.723L448.395,230.594C442.316,223.128 435.225,216.445 427.302,210.716L440.959,186.402C433.433,181.333 425.403,176.964 416.983,173.355L401.469,196.659C392.243,193.057 382.556,190.611 372.656,189.383L371.584,161.891ZM357.741,249.054C385.323,249.054 407.716,270.158 407.716,296.153C407.716,322.148 385.323,343.252 357.741,343.252C330.159,343.252 307.765,322.148 307.765,296.153C307.765,270.158 330.159,249.054 357.741,249.054Z"/>
                </g>
            </svg>
        </div>
    )
}

export default withLogging(ExampleComponent)
