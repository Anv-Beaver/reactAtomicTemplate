import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { get } from '../api/axios';
import { SEARCH_FAIL, SEARCH_SUCCESS, SEARCH_TRY } from '../pages/Example/ExampleActions';

type returnType = {
    title: string,
    content: string
}

const googleAPI = async(text: string) => {
    const result = await get("/api/search?q="+text);
    if(result.data){
        return ({
            title: result.data,
            content: result.data
        })
    }
    return false;
}


function* searchSaga (action: any) {
    console.log('Hello Sagas!' + action.payload);

    const data:returnType = yield call(googleAPI, action.payload);
    
    if(data)
    {
        yield put({
            type: SEARCH_SUCCESS,
            payload: data
        })
    }
    else{
        yield put({
            type: SEARCH_FAIL,
        })
    }
}




export function* watchGoogleSearch () {
    yield takeLatest(SEARCH_TRY, searchSaga)
}
