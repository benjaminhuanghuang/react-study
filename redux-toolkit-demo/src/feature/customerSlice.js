import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
