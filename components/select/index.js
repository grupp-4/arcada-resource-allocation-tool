import {withLogging} from "gillog"

import PropTypes from "prop-types"

import useTheme from "@material-ui/core/styles/useTheme"

import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

import ReactSelect from "react-select"

import useStyles from "./styles"

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}>
                {props.children}
        </Typography>
    )
}

/*NoOptionsMessage.propTypes = {
    /!**
     * The children to be rendered.
     *!/
    children: PropTypes.node,
    /!**
     * Props to be passed on to the wrapper.
     *!/
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired
}*/

function inputComponent({inputRef, ...props}) {
    return <div ref={inputRef} {...props} />
}

/*inputComponent.propTypes = {
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired
        })
    ])
}*/

function Control({children, innerProps, innerRef, selectProps: {classes, TextFieldProps}}) {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: classes.input,
                    ref: innerRef,
                    children,
                    ...innerProps
                }
            }}
            {...TextFieldProps}/>
    )
}

/*Control.propTypes = {
    /!**
     * Children to render.
     *!/
    children: PropTypes.node,
    /!**
     * The mouse down event and the innerRef to pass down to the controller element.
     *!/
    innerProps: PropTypes.shape({
        onMouseDown: PropTypes.func.isRequired
    }).isRequired,
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired
        })
    ]).isRequired,
    selectProps: PropTypes.object.isRequired
}*/

function Option(props) {
    return (
        <MenuItem
            ref={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{fontWeight: props.isSelected ? 500 : 400}}
            {...props.innerProps}>
                {props.children}
        </MenuItem>
    )
}

/*Option.propTypes = {
    /!**
     * The children to be rendered.
     *!/
    children: PropTypes.node,
    /!**
     * props passed to the wrapping element for the group.
     *!/
    innerProps: PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        onMouseMove: PropTypes.func.isRequired,
        onMouseOver: PropTypes.func.isRequired,
        tabIndex: PropTypes.number.isRequired
    }).isRequired,
    /!**
     * Inner ref to DOM Node
     *!/
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired
        })
    ]).isRequired,
    /!**
     * Whether the option is focused.
     *!/
    isFocused: PropTypes.bool.isRequired,
    /!**
     * Whether the option is selected.
     *!/
    isSelected: PropTypes.bool.isRequired
}*/

function Placeholder(props) {
    const {selectProps, innerProps = {}, children} = props
    return (
        <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
            {children}
        </Typography>
    )
}

/*Placeholder.propTypes = {
    /!**
     * The children to be rendered.
     *!/
    children: PropTypes.node,
    /!**
     * props passed to the wrapping element for the group.
     *!/
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired
}*/

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    )
}

/*SingleValue.propTypes = {
    /!**
     * The children to be rendered.
     *!/
    children: PropTypes.node,
    /!**
     * Props passed to the wrapping element for the group.
     *!/
    innerProps: PropTypes.any.isRequired,
    selectProps: PropTypes.object.isRequired
}*/

function ValueContainer(props) {
    return (
        <div className={props.selectProps.classes.valueContainer}>
            {props.children}
        </div>
    )
}

/*ValueContainer.propTypes = {
    /!**
     * The children to be rendered.
     *!/
    children: PropTypes.node,
    selectProps: PropTypes.object.isRequired
}*/


function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    )
}

/*Menu.propTypes = {
    /!**
     * The children to be rendered.
     *!/
    children: PropTypes.element.isRequired,
    /!**
     * Props to be passed to the menu wrapper.
     *!/
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired
}*/

function Select({log, placeholder, options, value, onChange}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const theme = useTheme()

    // ====== RENDER ======>
    return (
        <ReactSelect
            classes={styles}
            styles={{
                input: base => ({
                    ...base,
                    color: theme.palette.text.primary,
                    "& input": {
                        font: "inherit"
                    }
                })
            }}
            inputId={"select-single"}
            TextFieldProps={{
                InputLabelProps: {
                    htmlFor: "select-single",
                    shrink: true
                }
            }}
            placeholder={placeholder}
            options={options.map(option => ({value: option, label: option}))}
            components={{
                Control,
                Menu,
                NoOptionsMessage,
                Option,
                Placeholder,
                SingleValue,
                ValueContainer
            }}
            value={value}
            onChange={onChange}/>
    )
}

export default withLogging(Select)
