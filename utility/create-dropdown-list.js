
export default function CreateDropdownList(dataObj) {
    if (dataObj && dataObj.courses) {
        const courseArray = dataObj.courses.map(course => {
            return ({ value: course.name, label: course.name })
        });
        return courseArray;
    }
    else {
        console.log("No Data Yet for dropdown")
        console.log(dataObj);
    }
}