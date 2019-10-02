import {withLogging} from "gillog"

import {useRouter} from "next/router"

import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded"
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded"
import GroupRoundedIcon from "@material-ui/icons/GroupRounded"

import useStyles from "./styles"

function Navigation({log, open, onClose, landingPage, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const router = useRouter()

    // ====== INITIAL LOGIC ======>
    const definitions = [
        {key: "events-feed", icon: <EventNoteRoundedIcon/>, label: strings.eventsFeed},
        {key: "courses", icon: <MenuBookRoundedIcon/>, label: strings.courses},
        {key: "teachers", icon: <GroupRoundedIcon/>, label: strings.teachers}
    ]
    let initialSelectedItem = router.query.page || landingPage || "events-feed"

    // ====== EVENT HANDLERS ======>
    function onClick(key) {
        log.debug("Navigating to:", key)
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
        <Drawer
            open={open}
            onClose={onClose}
            onKeyDown={onKeyDown}
            ModalProps={{keepMounted: true}}
            id={"navigation-menu"}>
                <div
                    role="presentation"
                    onClick={onClose}
                    onKeyDown={onClose}>
                    <List>
                        {definitions.map(({key, icon, label}) => (
                            <ListItem
                                key={key}
                                className={styles.listItem}
                                onClick={() => onClick(key)}
                                button
                                selected={key === initialSelectedItem}>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText>
                                    {label}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </div>
        </Drawer>
    )
}

export default withLogging(Navigation)
