import { withLogging } from "gillog";
import { useState, useEffect } from "react";
import useStyles from "./styles.js";

import PropTypes from 'prop-types';
import clsx from 'clsx';
import Select from 'react-select';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';


const fuckPenis = [
    {
        "value": "Webbutveckling",
        "label": "Webbutveckling"
    },
    {
        "value": "Matematisk programmering",
        "label": "Matematisk programmering"
    },
    {
        "value": "Pre-Calculus",
        "label": "Pre-Calculus"
    },
    {
        "value": "Webbtjänster och molnteknologi",
        "label": "Webbtjänster och molnteknologi"
    },
    {
        "value": "Mjukvaruutvecklingsprocessen - Devops",
        "label": "Mjukvaruutvecklingsprocessen - Devops"
    },
    {
        "value": "Ramverk och webbapplikationer",
        "label": "Ramverk och webbapplikationer"
    },
    {
        "value": "IT-juridik och etik",
        "label": "IT-juridik och etik"
    },
    {
        "value": "Databearbetning",
        "label": "Databearbetning"
    },
    {
        "value": "Beslutssystemutveckling och verifikation",
        "label": "Beslutssystemutveckling och verifikation"
    },
    {
        "value": "Preskriptiv analytik",
        "label": "Preskriptiv analytik"
    },
    {
        "value": "Oscillation och partikelsystem",
        "label": "Oscillation och partikelsystem"
    },
    {
        "value": "Autonoma agenter",
        "label": "Autonoma agenter"
    },
    {
        "value": "Vektorer och krafter",
        "label": "Vektorer och krafter"
    },
    {
        "value": "Programmering och databehandling",
        "label": "Programmering och databehandling"
    },
    {
        "value": "Introduktion till webbdesign",
        "label": "Introduktion till webbdesign"
    },
    {
        "value": "Front-end programmering",
        "label": "Front-end programmering"
    },
    {
        "value": "Design av analytiska system",
        "label": "Design av analytiska system"
    },
    {
        "value": "Maskininlärning och optimering",
        "label": "Maskininlärning och optimering"
    },
    {
        "value": "Projektledning",
        "label": "Projektledning"
    },
    {
        "value": "Visualisering av information",
        "label": "Visualisering av information"
    },
    {
        "value": "Back-end programmering",
        "label": "Back-end programmering"
    },
    {
        "value": "Innehållshanteringssystem",
        "label": "Innehållshanteringssystem"
    },
    {
        "value": "Statistik och sannolikhet",
        "label": "Statistik och sannolikhet"
    },
    {
        "value": "Deskriptiv analytik - Data/Text mining",
        "label": "Deskriptiv analytik - Data/Text mining"
    },
    {
        "value": "Datorseende",
        "label": "Datorseende"
    },
    {
        "value": "Cloud Native Apps",
        "label": "Cloud Native Apps"
    },
    {
        "value": "Nätverksprotokoll och datasäkerhet",
        "label": "Nätverksprotokoll och datasäkerhet"
    },
    {
        "value": "Datastrukturer och algoritmer",
        "label": "Datastrukturer och algoritmer"
    },
    {
        "value": "Metodologi och examensseminarium",
        "label": "Metodologi och examensseminarium"
    },
    {
        "value": "Webbkommunikation, Databaser och CMS",
        "label": "Webbkommunikation, Databaser och CMS"
    },
    {
        "value": "Datorarkitektur och operativsystem",
        "label": "Datorarkitektur och operativsystem"
    },
    {
        "value": "Prediktiv analytik",
        "label": "Prediktiv analytik"
    },
    {
        "value": "Administration",
        "label": "Administration"
    },
    {
        "value": "Examensarbeten",
        "label": "Examensarbeten"
    },
    {
        "value": "Praktikansvarig",
        "label": "Praktikansvarig"
    },
    {
        "value": "Tutorering",
        "label": "Tutorering"
    },
    {
        "value": "Pro-prefekt",
        "label": "Pro-prefekt"
    },
    {
        "value": "Utbildningsansvarig",
        "label": "Utbildningsansvarig"
    },
    {
        "value": "Studierummet",
        "label": "Studierummet"
    },
    {
        "value": "Breddstudiepaket - Full stack",
        "label": "Breddstudiepaket - Full stack"
    },
    {
        "value": "AFORA - Roboten Amy",
        "label": "AFORA - Roboten Amy"
    },
    {
        "value": "Digimanu - Engineering platform",
        "label": "Digimanu - Engineering platform"
    },
    {
        "value": "Forskning",
        "label": "Forskning"
    },
    {
        "value": "Intro till BDA",
        "label": "Intro till BDA"
    },
    {
        "value": "Machine Learning for Predictive Problems",
        "label": "Machine Learning for Predictive Problems"
    },
    {
        "value": "Visual Analytics",
        "label": "Visual Analytics"
    },
    {
        "value": "Machine Learning for Descriptive Problems",
        "label": "Machine Learning for Descriptive Problems"
    },
    {
        "value": "Big Data Analytics",
        "label": "Big Data Analytics"
    },
    {
        "value": "Analytical Service Development",
        "label": "Analytical Service Development"
    },
    {
        "value": "Research Seminar and Group Supervision",
        "label": "Research Seminar and Group Supervision"
    },
    {
        "value": "Administrering",
        "label": "Administrering"
    },
    {
        "value": "Examensarbete (Magister)",
        "label": "Examensarbete (Magister)"
    },
    {
        "value": "Program director - Spec. Stud.",
        "label": "Program director - Spec. Stud."
    },
    {
        "value": "Program director - Master",
        "label": "Program director - Master"
    },
    {
        "value": "FaceTrack - Facial recognition and tracking",
        "label": "FaceTrack - Facial recognition and tracking"
    },
    {
        "value": "AMCOCP - Adaptive Machine Learning on Cloud Platforms",
        "label": "AMCOCP - Adaptive Machine Learning on Cloud Platforms"
    },
    {
        "value": "Forskning",
        "label": "Forskning"
    }
]


/*const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));
*/

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

NoOptionsMessage.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * Props to be passed on to the wrapper.
     */
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
};

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]),
};

function Control(props) {
    const {
        children,
        innerProps,
        innerRef,
        selectProps: { classes, TextFieldProps },
    } = props;

    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: classes.input,
                    ref: innerRef,
                    children,
                    ...innerProps,
                },
            }}
            {...TextFieldProps}
        />
    );
}

Control.propTypes = {
    /**
     * Children to render.
     */
    children: PropTypes.node,
    /**
     * The mouse down event and the innerRef to pass down to the controller element.
     */
    innerProps: PropTypes.shape({
        onMouseDown: PropTypes.func.isRequired,
    }).isRequired,
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]).isRequired,
    selectProps: PropTypes.object.isRequired,
};

function Option(props) {
    return (
        <MenuItem
            ref={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

Option.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        onMouseMove: PropTypes.func.isRequired,
        onMouseOver: PropTypes.func.isRequired,
        tabIndex: PropTypes.number.isRequired,
    }).isRequired,
    /**
     * Inner ref to DOM Node
     */
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]).isRequired,
    /**
     * Whether the option is focused.
     */
    isFocused: PropTypes.bool.isRequired,
    /**
     * Whether the option is selected.
     */
    isSelected: PropTypes.bool.isRequired,
};

function Placeholder(props) {
    const { selectProps, innerProps = {}, children } = props;
    return (
        <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
            {children}
        </Typography>
    );
}

Placeholder.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired,
};

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

SingleValue.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    /**
     * Props passed to the wrapping element for the group.
     */
    innerProps: PropTypes.any.isRequired,
    selectProps: PropTypes.object.isRequired,
};

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

ValueContainer.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.node,
    selectProps: PropTypes.object.isRequired,
};

function MultiValue(props) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={clsx(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    );
}

MultiValue.propTypes = {
    children: PropTypes.node,
    isFocused: PropTypes.bool.isRequired,
    removeProps: PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        onMouseDown: PropTypes.func.isRequired,
        onTouchEnd: PropTypes.func.isRequired,
    }).isRequired,
    selectProps: PropTypes.object.isRequired,
};

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

Menu.propTypes = {
    /**
     * The children to be rendered.
     */
    children: PropTypes.element.isRequired,
    /**
     * Props to be passed to the menu wrapper.
     */
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
};

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};

function AddCourse({ addCourseData, teacher, dropdownList }) {
    const [single, setSingle] = React.useState(null);
    const suggestions = dropdownList;

    // ====== HOOKS ======>
    const styles = useStyles();
    console.log('just above the hook in add-course');
    const [modifiedJson, setModifiedJson] = useState(addCourseData);


    /*
    useEffect(() => {
        if (addCourseData && addCourseData.courses) {
            const courseArray = addCourseData.courses.map(course => {
                return ({ value: course.name, label: course.name })
            });
            suggestions = courseArray;
        }
        else {
            console.log("No Data Yet in add-course")
            console.log(addCourseData);
        }
    }, [])
    */

    const handleChangeSingle = (value, teacher) => {
        setSingle(value);
        console.log("the value: ");
        console.log(value);
        console.log('the teacher:');
        console.log(teacher);

        console.log('modifiedJson inside handleChangeSingle');
        console.log(modifiedJson);

        setModifiedJson(prevState => ({
            ...prevState,
            courses: prevState.courses.map(
                el => el.name == value.value ? { ...el, teacher: teacher } : el
            ),
        }))
    };


    // ====== RENDER ======>
    // TODO: create this component


    return (
        <div className={styles.placeholder}
        >
            <NoSsr>
                <Select
                    classes={styles}

                    inputId="react-select-single"
                    TextFieldProps={{
                        label: 'Country',
                        InputLabelProps: {
                            htmlFor: 'react-select-single',
                            shrink: true,
                        },
                    }}
                    placeholder="Search a country (start with a)"
                    options={suggestions}
                    components={components}
                    value={single}
                    onChange={e => handleChangeSingle(e, teacher)}
                />
                <div className={styles.divider} />
            </NoSsr>
        </div>
    );
}

AddCourse.id = "AddCourse"

export default withLogging(AddCourse)
