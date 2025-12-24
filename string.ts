function stringToBoolean(input: string): NullBool {
    if (input.toLowerCase() === "true") return true;
    if (input.toLowerCase() === "false") return false;
    return null
}