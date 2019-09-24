import {withLogging} from "gillog"

import {useEffect, useState} from "react"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Grid from "@material-ui/core/Grid"

import Courses from "components/courses"
import Teachers from "components/teachers"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function CoursesTeachersTabView({log, pathname, strings, children}) {

    // ====== INITIAL LOGIC ======>

    // TODO: integrate with Next's Link component
    // definitions: Array of information about tabs to render.
    // key: Used for determining the pre-selected tab by matching URL path to this.
    // label: Tab title (in Swedish), hardcoded for now.
    const definitions = [
        {key: "courses", label: strings.coursesTabName},
        {key: "teachers", label: strings.teachersTabName}
    ]
    // Gets the index of the "definition" that has a key that matches the current URL path.
    let currentTab = definitions.findIndex(definition => {
        return definition.key === pathname
    })
    // If no match is found (which probably means the current URL path is root, a.k.a /) then
    // currentTab defaults to the first index (0).
    if (currentTab === -1) currentTab = 0

    // ====== HOOKS ======>

    const styles = useStyles()

    const [value, setValue] = useState(currentTab)

    useEffect(() => {
        log.debug(`Loading tab view with pre-selected tab: ${definitions[value].key}`)
    }, [])

    // ====== EVENT HANDLERS ======>

    function changeTab(event, newValue) {
        // TODO: integrate with Next's Link component
        // Sets the `value` variable distributed throughout the tab view
        // to the index of the Tab that was clicked.
        log.debug(`Selecting tab: ${definitions[newValue].key}`)
        setValue(newValue)
    }

    function submitChanges() {
        // TODO: implement submitting changes
        log.debug("User tried to submit changes, a feature which isn't yet implemented.")
    }

    function discardChanges() {
        // TODO: implement submitting changes
        log.debug("User tried to discard changes, a feature which isn't yet implemented.")
    }

    // ====== "SUB" COMPONENTS ======>

    function TabPanel({index, currentTab, children}) {
        return (
            <div
                className={styles.tabPanel}
                role="tabpanel"
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                hidden={index !== currentTab}>
                {children}
            </div>
        )
    }

    // ====== RENDER ======>

    return (
        <>
            <Tabs className={styles.tabs} value={value} onChange={changeTab} indicatorColor="primary" centered aria-label="tabs">
                {definitions.map(({key, label}, index) => {
                    return <Tab id={`tab-${index}`} key={key} label={label}
                                aria-controls={`tabpanel-${index}`}/>
                })}
            </Tabs>
            {definitions.map(({key}, index) => {
                // TODO: integrate with Next's Link component
                // Populates the `content` variable with the appropriate component,
                // based on the key property of the "definition" currently iterated.
                // The `content` variable is then set as the child of the TabPanel returned by the iteration.
                let content
                switch (key) {
                    case "courses":
                        content = <Courses data={children.props.data}/>
                        break
                    case "teachers":
                        content = <Teachers data={children.props.data}/>
                }
                return <TabPanel key={key} index={index} currentTab={value}>{content}</TabPanel>
            })}
        </>
    )
}

export default withLogging(CoursesTeachersTabView)
