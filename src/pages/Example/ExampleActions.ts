export const SEARCH_TRY = "SEARCH_TRY";

export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";
export const SEARCH_LOADING = "SEARCH_LOADING";


export const searchTryAction = (text: string) => {
    console.log("검색 : "+text);
    
    return {
        type: SEARCH_TRY,
        payload: text
    };
}

