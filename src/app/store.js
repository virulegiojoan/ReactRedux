import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice' 


export const store = configureStore({
  reducer: {
    // Define your reducers here
    // (e.g., { counter: counterReducer })
    tasks: taskReducer
        
    }
  },
)