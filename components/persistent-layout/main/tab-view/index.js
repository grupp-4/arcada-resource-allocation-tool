import {withLogging} from "gillog"

import PropTypes from "prop-types"

import {useState, useEffect} from "react"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import Courses from "components/courses"
import Teachers from "components/teachers"

import TabPanel from "./tab-panel"

function TabView({log, definitions, currentTab, children}) {
    const [value, setValue] = useState(currentTab)
    useEffect(() => {
        log.debug(`Loading tab view with pre-selected tab: ${definitions[value].key}`)
    }, [])
    function changeTab(event, newValue) {
        // TODO: integrate with Next's Link component
        // Sets the `value` variable distributed throughout the tab view
        // to the index of the Tab that was clicked.
        log.debug(`Selecting tab: ${definitions[newValue].key}`)
        setValue(newValue)
    }
    return (
        <>
            <Tabs value={value} onChange={changeTab} indicatorColor="primary" centered aria-label="tabs">
                {definitions.map(({key, label}, index) => {
                    return <Tab id={`tab-${index}`} key={key} label={label} aria-controls={`tabpanel-${index}`}/>
                })}
            </Tabs>
            {definitions.map(({key}, index) => {
                // TODO: integrate with Next's Link component
                // Populates the `content` variable with the appropriate component,
                // based on the key property of the "definition" currently iterated.
                // The `content` variable is then set as the child of the TabPanel returned by the iteration.
                let content
                switch(key) {
                    case "courses":
                        content = <Courses/>
                        break
                    case "teachers":
                        content = <Teachers/>
                }
                return <TabPanel key={key} index={index} currentTab={value}>{content}</TabPanel>
            })}
        </>
    )
}

TabView.propTypes = {
    definitions: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    currentTab: PropTypes.number.isRequired
}

export default withLogging(TabView)
