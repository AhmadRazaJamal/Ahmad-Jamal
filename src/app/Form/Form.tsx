import React from "react";
import { useForm } from "react-hook-form";

import { Input, Textarea } from "@nextui-org/react";

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
        <div className="mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input
                    isRequired
                    type="text"
                    label="Name"
                    placeholder="Your name? (君の名は)"
                    className="mb-10 "
                />

                <Input
                    isRequired
                    type="email"
                    label="Email"
                    placeholder="tetris@icloud.com"
                    className="mb-10"
                />

                <Textarea
                    isRequired
                    label="Message"
                    placeholder="What can I help you with?"
                />


            </form>
        </div>
    );
}
