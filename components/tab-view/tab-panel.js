import {withLogging} from "gillog"

import PropTypes from "prop-types"

import Courses from "components/courses"
import Teachers from "components/teachers"

function TabPanel({log, className, index, currentTab, children}) {
    return (
        <div
            className={className}
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            hidden={index !== currentTab}>
                {children}
        </div>
    )
}

TabPanel.propTypes = {
    index: PropTypes.number.isRequired,
    currentTab: PropTypes.number.isRequired,
    children: PropTypes.shape({type: PropTypes.oneOf([Courses, Teachers]).isRequired}).isRequired
}

export default withLogging(TabPanel)
