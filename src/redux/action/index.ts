import { Action, Dispatch } from "@reduxjs/toolkit";
import { user } from "../../types/user";


export const ProfilesApi = (url: string, token: string, slice: { (pippo: user[]): user[] }) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'FRIENDS', payload: slice(data) })

            } else {
                throw new Error("Errore nel recupero dei dati");
            }
        } catch (error) {
            console.error("Errore:", error);
            throw new Error("Errore nella fetch");
        }
    }
};
