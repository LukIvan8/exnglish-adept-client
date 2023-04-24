import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IMaterialItem} from "@/data/list";

export interface MaterialsState {
  items: IMaterialItem[];
}

const initialState: MaterialsState = {
  items: [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=1",
      preview: "https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=1",
      preview: "https://i.ytimg.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=1",
      preview: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
  ],
}

export const materialsSlice = createSlice({
  reducers: {
    addMaterial: (state:MaterialsState, action: PayloadAction<IMaterialItem>) => {
      state.items.push(action.payload)
    },
  },
  name: 'materials',
  initialState,
})
export const { addMaterial } = materialsSlice.actions
export default materialsSlice.reducer