import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/react";
import { StyledForm, FormWrapper } from './Form.styles'; 

export const Form = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data: FieldValues) => {
        alert(JSON.stringify(data));
    };

    // If you're using `control` from useForm(), make sure it's being used or remove this declaration.
    // const { control } = useForm();

    return (
        <FormWrapper>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>

                <Input
                    {...register("name", { required: true })}
                    isRequired
                    type="text"
                    label="Name"
                    placeholder="Your name? (君の名は)"
                    className="mb-10 "
                />

                <Input
                    {...register("email", { required: true })}
                    isRequired
                    type="email"
                    label="Email"
                    placeholder="tetris@icloud.com"
                    className="mb-10"
                />

                <Textarea
                    {...register("message", { required: true })}
                    isRequired
                    label="Message"
                    placeholder="What can I help you with?"
                />

            </StyledForm>
        </FormWrapper>
    );
};
