import {emphasize, makeStyles} from "@material-ui/core/styles"

/* Special note regarding add-course-teacher.js:
 * The reason why this file is called add-course-teacher.js and exists in the styles directory
 * instead of being called styles.js and existing next to the component it is used in,
 * is because these styles are used in multiple components in different locations.
 * Instead of having an identical styles.js file next to each component that uses these styles,
 * it makes more sense to have one file at a dedicated location.
 * In cases where the styles are only used by one component, it probably makes more sense
 * to have the file containing the styles reside next to the component.
 * As per this file's name, these styles are always applied to AddCourse or AddTeacher components .
 */

/**
 * The function that will be given as an argument to {@link makeStyles()}.
 * @param theme We can assume that the function we provide as an argument to {@link makeStyles()} will be called with an argument containing the app's Material-UI theme. So inside the function body we have access to the theme via the `theme` variable.
 * @returns {Object} An object containing classnames with their corresponding styles that we want {@link makeStyles()} to make into a hook, which in turn we can use to make the styles available to us in a {@link React.Component}.
 */
function styles(theme) {
    return (
        {
            root: {
                flexGrow: 1,
                minWidth: 290
            },
            input: {
                display: "flex",
                padding: 0,
                height: "auto"
            },
            valueContainer: {
                display: "flex",
                flexWrap: "wrap",
                flex: 1,
                alignItems: "center",
                overflow: "hidden"
            },
            chip: {
                margin: theme.spacing(0.5, 0.25)
            },
            chipFocused: {
                backgroundColor: emphasize(
                    theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700],
                    0.08
                )
            },
            noOptionsMessage: {
                padding: theme.spacing(1, 2)
            },
            singleValue: {
                fontSize: 16
            },
            placeholder: {
                position: "absolute",
                left: 2,
                bottom: 6,
                fontSize: 16
            },
            paper: {

                zIndex: 1,
                marginTop: theme.spacing(1),
                left: 0,
                right: 0
            },
            divider: {
                height: theme.spacing(2)
            }
        }
    )
}

// Exporting the hook that the makeStyles function returns
export default makeStyles(styles)
