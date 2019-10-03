import {withLogging} from "gillog"

import {useEffect, useState} from "react"

import {useRouter} from "next/router"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import Footer from "components/footer"

import useStyles from "./styles"

function CoursesTeachersTabView({log, strings, footerStrings, children}) {

    // ====== INITIAL LOGIC ======>
    // definitions: Array of information about tabs to render.
    // key: Used for determining the pre-selected tab by matching page query to this.
    // label: Tab title.
    const definitions = [
        {key: "courses", label: strings.coursesTabName},
        {key: "teachers", label: strings.teachersTabName}
    ]
    // Gets the index of the "definition" that has the key that matches
    // the client's landing page preference.
    let currentTab = definitions.findIndex(definition => definition.key === children.props.landingPage)
    // If no match is found, currentTab defaults to the first index (0).
    if (currentTab === -1) currentTab = 0

    // ====== HOOKS ======>
    const styles = useStyles()
    const [state, setState] = useState({
        currentTab: currentTab
    })
    const router = useRouter()
    useEffect(() => {
        log.debug(`Loading tab view with pre-selected tab: ${definitions[currentTab].key}`)
    }, [])
    useEffect(() => {
        const page = router.query.page
        if (page) {
            // Gets the index of the "definition" that has a key that matches page query.
            currentTab = definitions.findIndex(definition => definition.key === page)
            log.debug(`Loading tab view with pre-selected tab: ${definitions[currentTab].key}`)
            setState(prevState => ({...prevState, currentTab: currentTab}))
        }
    }, [router])

    // ====== EVENT HANDLERS ======>
    function changeTab(event, newValue) {
        // Sets the `state` variable distributed throughout the tab view
        // to the index of the Tab that was clicked.
        log.debug(`Selecting tab: ${definitions[newValue].key}`)
        setState(prevState => ({...prevState, currentTab: newValue}))
    }
    function onClick(key) {
        router.replace(
            {pathname: "/", query: {page: key}},
            {pathname: "/", query: {page: key}},
            {shallow: true}
        ).catch(error => {
            log.error(error.stack)
        })
    }

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

export default withLogging(CoursesTeachersTabView)
