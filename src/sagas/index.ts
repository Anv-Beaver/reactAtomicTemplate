import { takeEvery, call, put, all } from 'redux-saga/effects'
import { watchGoogleSearch } from './ExampleSaga';

export default function* rootSaga() {
    yield all([
        watchGoogleSearch()
    ]);
}