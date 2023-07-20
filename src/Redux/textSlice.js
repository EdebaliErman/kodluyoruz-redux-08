import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthTexts = createAsyncThunk(`text/getText`, async (paragraph, format) => {
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paragraph}&format=${format}`)
    return res.data
})



export const textSlice = createSlice({
    name: 'texts',
    initialState: {
        items: [],
        paragraph: 1,
        status: "idle",
        format: "text"
    },
    reducers: {
        setParagraph: (state, aciton) => {
            state.paragraph = aciton.payload
        },
        setFormat: (state, aciton) => {
            state.format = aciton.payload
        },
    },
    extraReducers: {
        [fecthTexts.pending]: (state, aciton) => {
            state.status = "loading"
        },
        [fecthTexts.fulfilled]: (state, aciton) => {
            state.status = "succes"
            state.items = aciton.payload
        },
        [fecthTexts.rejected]: (state, aciton) => {
            state.status = "failed"
            state.error = aciton.error.message
        },
    }

})

export const selectParagraph = (state) => state.texts.paragraph
export const selectFormat = (state) => state.texts.format
export const selectItems = (state) => state.texts.items

export const { setFormat, setParagraph } = textSlice.actions
export default textSlice.reducer