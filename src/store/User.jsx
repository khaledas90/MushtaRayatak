import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || [],
    user: JSON.parse(localStorage.getItem('user')) || null,
};

const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        Register: (state, action) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(action.payload);
            localStorage.setItem('users', JSON.stringify(users));

            toast.success('Registered Successfully', {
                position: 'top-center',
                autoClose: 1000,
            });
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);
        },
        Login: (state, action) => {

            const users = JSON.parse(localStorage.getItem('users')) || [];



            if (users[0].email) {
                state.user = users[0];
                localStorage.setItem('user', JSON.stringify(users[0]));
                toast.success('Login Successfully', {
                    position: 'top-center',
                    autoClose: 1000,
                });
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            } else {
                toast.error('Invalid Email or Password', {
                    position: 'top-center',
                    autoClose: 1000,
                });
            }
        },

    },
});

export const { Register, Login } = UserSlice.actions;

export default UserSlice.reducer;
