import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  status: "idle", // loading, fullfiled
};

export const delayIncrementThunk = createAsyncThunk("counter/delay", () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // res(44);
      rej(10)
    }, 5000);
  });
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // counter/increment
    increment: (state, action) => {
      // console.log(action);
      state.count += 1;
    },
    // counter/decrement
    decrement: (state) => {
      state.count -= 1;
    },
    // counter/reset
    reset: (state) => {
      state.count = 0;
    },
    incrementByNum: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
    incrementBy2Nums: (state, action) => {
      console.log(action);
      state.count += action.payload.n1 + action.payload.n2;
    },
    incrementWithPrepare: {
      reducer(state, action) {
        state.count += action.payload;
      },
      prepare(num1, num2) {
        return { payload: num1 + num2 };
      },
    },
    // delayIncrement: (state) => {
    //   setTimeout(() => {
    //     state.count += 5;
    //   }, 2500);
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(delayIncrementThunk.pending, (state, action) => {
        state.status = "loading";
        console.log(state.status);
      })
      .addCase(delayIncrementThunk.fulfilled, (state, action) => {
        // console.log(action);
        state.count += action.payload;
      })
      .addCase(delayIncrementThunk.rejected, (state, action) => {
        console.log(action);
        state.count -= Number(action.error.message);
      });
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByNum,
  incrementBy2Nums,
  incrementWithPrepare,
  delayIncrement,
} = counterSlice.actions;

export default counterSlice.reducer;
