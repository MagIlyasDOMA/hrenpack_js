/*
* hrenpack_js 3.1.5
* Copyright (c) 2024-2025, Маг Ильяс DOMA (MagIlyasDOMA)
* Licensed under MIT (https://github.com/MagIlyasDOMA/hrenpack_js/blob/main/LICENSE)
*/

function arrayIsEmpty(arr: any[]): boolean {
    return arr.length === 0 || !arr[0];
}


function arraysIsEqual(array1: any[], array2: any[], strict: boolean = true): boolean {
    if (array1.length !== array2.length)
        return false;
    if (strict)
        return array1.every((value, index) => value === array2[index]);
    else {
        array1.forEach(element => {
            if (!array2.includes(element))
                return false;
        })
        return true;
    }
}


/*function arrayObjectsIsEqual(object1: Dict, object2: Dict): boolean {
    if (object1.length !== object2.length)
        return false;
    return object1.every((item, index) => item.id === object2[index].id);
}*/

// export { arrayIsEmpty, arraysIsEqual };
