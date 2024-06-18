import { FieldValues, useForm, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { Button, Input, Textarea } from "@nextui-org/react";
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

    const getErrorMessage = (
        error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    ) => error ? (error as FieldError).message : undefined;

    return (
        <FormWrapper>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
                    isRequired
                    type="text"
                    label="Name*"
                    placeholder="What should I call you?"
                    fullWidth={true}
                    style={{ marginBottom: 12 }}
                    errorMessage={getErrorMessage(errors.name)}
                    className={errors.name ? "input-error" : ""}
                />

                <Input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address"
                        }
                    })}
                    isRequired
                    type="email"
                    label="Email*"
                    placeholder="tetris@icloud.com"
                    fullWidth={true}
                    style={{ marginBottom: 12 }}
                    errorMessage={getErrorMessage(errors.email)}
                    className={errors.email ? "input-error" : ""}
                />

                <Textarea
                    {...register("message", {
                        required: "Message is required",
                        minLength: { value: 10, message: "Message must be at least 10 characters" }
                    })}
                    isRequired
                    label="Message*"
                    fullWidth={true}
                    style={{ marginBottom: 12 }}
                    minRows={6}
                    errorMessage={getErrorMessage(errors.message)}
                    className={errors.message ? "input-error" : ""}
                />
                <Button radius="md">
                    Lets Talk
                </Button>
            </StyledForm>
        </FormWrapper>
    );
};
