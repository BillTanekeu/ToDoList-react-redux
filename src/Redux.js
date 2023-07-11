import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name : 'todo',
    initialState : [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
      ],
    
      reducers: {
            addTask: (state, action) => {
                const newTask = {
                    text: action.payload,
                    id : Date.now(),
                    done: false
                }
                state.push(newTask)  
            },

            toggleTask :(state, action) => {
                const realTask = state.find((t) => (t.id === action.payload))
                realTask.done = !realTask.done
            },
            deleteTask: (state, action) => {
                state = state.filter((t) => t.id !== action.payload)
                
                return state

            }
            
        }
})

const  taskNumber = createSlice({
    name : 'nb',
    initialState : 2,
    reducers : {
        setTaskNumber : (state, action) =>{
            state = state + action.payload
            return state
        },
    }
}) 

export const {addTask, toggleTask, deleteTask} = toDoSlice.actions
export const {setTaskNumber} = taskNumber.actions

export const store = configureStore({
    reducer : {
        todo : toDoSlice.reducer,
        taskNumber: taskNumber.reducer 
    }
}
)