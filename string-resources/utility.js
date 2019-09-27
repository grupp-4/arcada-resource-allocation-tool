const utility = {
    cap(string) {
        return string.replace(/^\w/, cap => cap.toUpperCase())
    },
    mergeResources(fallbackResources, resources, setName, log) {

        checkForObjectProperties(fallbackResources, resources, setName)
        mergeOtherProperties(fallbackResources, resources, setName)

        return resources

        function checkForObjectProperties(fallbackObject, targetObject, structureSoFar) {
            for (const key in fallbackObject) {
                // Looking for properties that are objects
                if (fallbackObject.hasOwnProperty(key) && typeof fallbackObject[key] === "object") {
                    const newFBO = fallbackObject[key]
                    const newStructureSoFar = updateStructureSoFar(structureSoFar, key)
                    if (targetObject.hasOwnProperty(key)) {
                        // Making sure the target object's corresponding property also is an object, else logs error telling about structural difference
                        const newOBJ = targetObject[key]
                        if (typeof newOBJ === "object") {
                            checkForObjectProperties(newFBO, newOBJ, newStructureSoFar)
                            mergeOtherProperties(newFBO, newOBJ, newStructureSoFar)
                        } else {
                            const error = new Error(getStructureDifferenceErrorMessage(fallbackObject, targetObject, key))
                            log.error(error.stack)
                            // If a structural difference is detected between the target object and the fallback object
                            // then difference is eliminated by the fallback object overwriting the involved properties in the target object
                            // as the assumption goes that the fallbackObject is the "right" one and the target object has to comply to its structure
                            logFallbackForObject(newStructureSoFar)
                            targetObject[key] = newFBO
                        }
                    } else {
                        // If the target object's property is missing, then assigning the fallback object's corresponding property to the target object
                        logFallbackForObject(newStructureSoFar)
                        targetObject[key] = newFBO
                    }
                }
            }
        }

        function mergeOtherProperties(fallbackObject, object, structureSoFar) {
            for (const key in fallbackObject) {
                // Looking for properties that aren't objects
                if (fallbackObject.hasOwnProperty(key) && typeof fallbackObject[key] !== "object") {
                    const fallbackProperty = fallbackObject[key]
                    const newStructureSoFar = updateStructureSoFar(structureSoFar, key)
                    if (object.hasOwnProperty(key)) {
                        // Making sure that mutual properties are of the same type, else logs error telling about structural difference
                        const prop = object[key]
                        if (!(typeof fallbackProperty === typeof prop)) {
                            log.warn(getStructureDifferenceErrorMessage(fallbackObject, object, key))
                            // If a structural difference is detected between the target object and the fallback object
                            // then difference is eliminated by the fallback object overwriting the involved properties in the target object
                            // as the assumption goes that the fallbackObject is the "right" one and the target object has to comply to its structure
                            logFallback(fallbackProperty, newStructureSoFar)
                            object[key] = fallbackProperty
                        }
                    } else {
                        // If the object's property is missing, assigning the fallback object's corresponding property to the target object
                        logFallback(fallbackProperty, newStructureSoFar)
                        object[key] = fallbackProperty
                    }
                }
            }
        }

        function updateStructureSoFar(structureSoFar, key) {
            return `${structureSoFar}.${key}`
        }

        function getStructureDifferenceErrorMessage(fallbackObject, object, key) {
            return `Requested resource set and fallback set differ in structure! Fallback set's property \`${key}\` of type \`${typeof fallbackObject[key]}\` is of type \`${typeof object[key]}\` in requested set.`
        }

        function logFallback(fallbackProperty, structureSoFar) {
            log.warn(`Falling back to "${fallbackProperty}" with property \`${structureSoFar}\``)
        }

        function logFallbackForObject(structureSoFar) {
            log.warn(`Falling back with object property \`${structureSoFar}\``)
        }
    }
}

export default utility

export const cap = utility.cap

export const mergeResources = utility.mergeResources
