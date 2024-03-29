import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('employees')) || [];

export const employeeSlicer = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('employees', JSON.stringify(state));
        },
        deleteEmployee: (state, action) => {
            state = state.filter((employee) => employee.id!== action.payload);
            localStorage.setItem('employees', JSON.stringify(state));
        },
        updateEmployee: (state, action) => {
            state = state.map((employee) => {
                if (employee.id === action.payload.id) {
                    return action.payload;
                }
                return employee;
            });
            localStorage.setItem('employees', JSON.stringify(state));
        }
    }
});

export const { addEmployee, deleteEmployee, updateEmployee } = employeeSlicer.actions;

export default employeeSlicer.reducer;
