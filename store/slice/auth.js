import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : {
    "_id": "645d3e801d9e65e1123d7577",
    "firstname": "Abhinay Narayan",
    "lastname": "Singh",
    "password": "",
    "email": "abhinay@adzone.com",
    "phone": "8795675599",
    "is_active": true,
    "is_admin": false,
    "is_phone_verified": true,
    "is_email_verified": false,
    "created_at": "2023-05-11T19:14:09Z",
    "updated_at": "2023-05-20T11:50:55Z",
    "last_login": "0001-01-01T00:00:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjY0NWQzZTgwMWQ5ZTY1ZTExMjNkNzU3NyIsIkZpcnN0TmFtZSI6IkFiaGluYXkgTmFyYXlhbiIsIkxhc3ROYW1lIjoiU2luZ2giLCJFbWFpbCI6ImFiaGluYXlAYWR6b25lLmNvbSIsIlBob25lIjoiODc5NTY3NTU5OSIsIklzQWRtaW4iOmZhbHNlLCJJc0FjdGl2ZSI6dHJ1ZSwiZXhwIjoxNjg0NjcwMDU5fQ.DcLPKXk8ZCghCoo2Fnq3IH3IhtDaT_-M-3Ob3ENpasQ",
    "telegram_chat_id": "518057868",
  },
  isAuth: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction: (state, action) => {

      state.isAuth = true
      state.name = action.payload
    },
  },
})


export const { loginAction } = authSlice.actions
export default authSlice.reducer