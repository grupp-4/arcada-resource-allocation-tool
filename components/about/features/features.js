import AccessibilityNewRoundedIcon from "@material-ui/icons/AccessibilityNewRounded"
import DevicesRoundedIcon from "@material-ui/icons/DevicesRounded"
import EditRoundedIcon from "@material-ui/icons/EditRounded"
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded"
import PortableWifiOffRoundedIcon from "@material-ui/icons/PortableWifiOffRounded"
import SettingsBrightnessRoundedIcon from "@material-ui/icons/SettingsBrightnessRounded"
import SpeedRoundedIcon from "@material-ui/icons/SpeedRounded"
import TranslateRoundedIcon from "@material-ui/icons/TranslateRounded"
import ViewAgendaRoundedIcon from "@material-ui/icons/ViewAgendaRounded"
import WebRoundedIcon from "@material-ui/icons/WebRounded"

export default [
    [
        {
            slug: "events",
            icon: <EventNoteRoundedIcon/>
        },
        {
            slug: "perspectives",
            icon: <ViewAgendaRoundedIcon style={{transform: "rotate(90deg)"}}/>
        },
        {
            slug: "editing",
            icon: <EditRoundedIcon/>
        }
    ],
    [
        {
            slug: "responsive",
            icon: <DevicesRoundedIcon/>
        },
        {
            slug: "theme",
            icon: <SettingsBrightnessRoundedIcon/>
        },
        {
            slug: "languages",
            icon: <TranslateRoundedIcon/>
        },
        {
            slug: "accessibility",
            icon: <AccessibilityNewRoundedIcon/>
        }
    ],
    [
        {
            slug: "offline",
            icon: <PortableWifiOffRoundedIcon/>
        },
        {
            slug: "static",
            icon: <WebRoundedIcon/>
        },
        {
            slug: "fast",
            icon: <SpeedRoundedIcon/>
        }
    ]
]
