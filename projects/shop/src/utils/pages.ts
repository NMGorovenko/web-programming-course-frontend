
/** Function for generate page indexes from 1 to totalPages number.
 *
 * @param {number} totalPages Amount pages.
 * @return {Array<number>} An array, each element of which is a page number. */
export const getPagesArray = (totalPages : number): number[] => {
    let pagesArray: number[] = [];
    for (let i = 1; i <= totalPages; ++i){
        pagesArray.push(i);
    }
    return pagesArray;
}
