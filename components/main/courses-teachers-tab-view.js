import {clientSide} from "gillog"

import {useEffect, useState} from "react"

import {useRouter} from "next/router"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import Footer from "components/footer"

import useStyles from "./styles"

const log = clientSide.getLogger("CoursesTeachersTabView")

function CoursesTeachersTabView({strings, footerStrings, children}) {

    // ====== INITIAL LOGIC ======>
    // definitions: Array of information about tabs to render.
    // key: Used for determining the pre-selected tab by matching URL path to this.
    // label: Tab title.
    const definitions = [
        {key: "courses", label: strings.coursesTabName},
        {key: "teachers", label: strings.teachersTabName}
    ]

    // ====== HOOKS ======>
    const styles = useStyles()
    const [state, setState] = useState({
        currentTab: 0
    })
    useEffect(() => {
        log.debug(`Loading tab view with pre-selected tab: ${definitions[currentTab].key}`)
        setState(prevState => ({...prevState, currentTab: currentTab}))
    }, [])
    const router = useRouter()

    // ====== EVENT HANDLERS ======>
    function changeTab(event, newValue) {
        // Sets the `state` variable distributed throughout the tab view
        // to the index of the Tab that was clicked.
        log.debug(`Selecting tab: ${definitions[newValue].key}`)
        setState(prevState => ({...prevState, currentTab: newValue}))
    }
    function onClick(key) {
        router.replace(`/?page=${key}`, `/${key}`, {shallow: true}).catch(error => {
            log.error(error.stack)
        })
    }

    // ====== MISC. LOGIC ======>
    // Gets the index of the "definition" that has a key that matches the current URL path.
    const url = router.asPath.slice(1)
    let currentTab = definitions.findIndex(definition => {
        return definition.key === url
    })
    // If no match is found, then checks if current URL path is root (a.k.a /). If so, then
    // gets the index of the "definition" that has the key that matches the client's landing page preference.
    if (currentTab === -1 && !url) {
        currentTab = definitions.findIndex(definition => {
            return definition.key === children.props.landingPage
        })
    }
    // If once again no match is found, currentTab defaults to the first index (0).
    if (currentTab === -1) currentTab = 0

    // ====== RENDER ======>
    return (
        <>
            <Tabs
                className={styles.tabs}
                onChange={changeTab}
                centered
                indicatorColor={"primary"}
                value={state.currentTab}
                aria-label={"tabs"}>
                    {definitions.map(({key, label}, index) => {
                        return <Tab id={`tab-${index}`} key={key} onClick={() => onClick(key)} label={label}
                                    aria-controls={`tabpanel-${index}`}/>
                    })}
            </Tabs>
            <div
                className={styles.tabPanel}
                role="tabpanel"
                id={`tabpanel-${state.currentTab}`}
                aria-labelledby={`tab-${state.currentTab}`}>
                    {children}
            </div>
            <Footer strings={footerStrings}/>
        </>
    )
}

export default CoursesTeachersTabView
