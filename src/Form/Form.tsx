import React from "react";
import { Controller, useForm } from "react-hook-form";

import "./styles.css";
import TextField from "@mui/material/TextField";

export const Form = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };

    const { control } = useForm();

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">Name</label>
                    <input
                        {...register("firstName", { required: true, maxLength: 2 })}
                    />
                    {errors.firstName && <p>This is required</p>}
                </div>

                <div>
                    <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
                        Email
                    </label>
                    <input {...register("email", { required: true })} />
                    {errors.email && <p>This is required</p>}
                </div>
                <div>
                    <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
                        Message
                    </label>
                    <Controller
                        render={({ field }) => <TextField {...field} className="message-field" fullWidth />}
                        name="TextField"
                        control={control}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}
