// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//     reducer: {},
// })



import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})





