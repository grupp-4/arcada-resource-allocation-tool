import {withLogging} from "gillog"
import Typography from "@material-ui/core/Typography"
import useTypographyStyles from "styles/typography"




function EventsFeed({log, data}) {

    // ====== HOOKS ======>
    let storage, storageData;
    const typographyStyles = useTypographyStyles()
    
    //Filter teachers and add up the hours
    //Not working, don't know what to do!
    const countHours = (data.teacher, data.courses) => {
    setSingle(value);
    console.log("data.teachers.firstName+' '+data.teachers.lastName");
    console.log(data.teachers.firstName+' '+data.teachers.lastName);
    console.log("handleChangeSingle() value: ");
    console.log(value);

    let storageData = JSON.parse(storage.getItem('data'))
    // Finds position of the modified course
    let index = storageData.courses.findIndex(x => x.teacher == data.teachers.firstName+' '+data.teachers.lastName)
    console.log('The event index:');
    console.log(index);
    // Count total hours for a teacher

    for (let elem of storageData.courses[index].hours){
        console.log(elem);
        let totalhours += elem;
    }

    //If it is more than 1600 hours return this pretty typography??
    if (totalhours > 1600) {
        return (
            <Typography className={typographyStyles.typography} variant={"body1"} >
                {storageData.courses[index].teacher}{' has '}{totalhours}{"!!!!"}
            </Typography>
        )
    }
    //Return nothing if it's below 1600hours
    else {
        break;
    }
    /* Pass this component's state to parent component, forcing a re-render
    //passToParent(value.value);
    Don't think we need this*/
    };

    // ====== RENDER ======<<<<

    /*=====================================================================================================
    normal app start cpoy pasta, should be changed to call the hours function while maping teachers????
    =======================================================================================================*/


    // Only starts rendering once data from api is ready
    if (data && data.courses) {
        // Creates array of all course's names, which gets sent to the AddCourse component

        // Defining storage here seems to guarantee it being client rendered
        storage = window.localStorage;

        // If localstorage data key exists it renders with that, this allows you to switch between tabs and not lose data
        if (storage.getItem('data')) {
            console.log('localstorage data exists(event)');
            storageData = JSON.parse(storage.getItem('data'));
            return (
                <Typography className={typographyStyles.typography} variant={"body1"} >
                {testState ? "" : ""}
                    <div className={styles.root}>
                        {storageData.courses.map((course) => mapCourses()}
                    </div>
                </Typography>
            )
        }
        else {
            storage.setItem("data", JSON.stringify(data));
            storageData = JSON.parse(storage.getItem('data'));
            return (
                <Typography className={typographyStyles.typography} variant={"body1"} >
                    <div className={styles.root}>
                        {storageData.courses.map((course) => mapCourses(course, storageData, styles, dropdownList))}
                    </div>
                </Typography>
            )
        }
    }
    else {
        return (
            "Loading Events..."
        );
    }
}
export default withLogging(EventsFeed)
