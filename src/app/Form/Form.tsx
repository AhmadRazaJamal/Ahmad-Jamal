import { useState } from 'react';
import { FieldValues, useForm, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { Button, Input, Textarea } from '@nextui-org/react';
import { StyledForm, FormWrapper } from './Form.styles';
import emailjs from 'emailjs-com';

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const templateParams = {
      to_name: 'Your Name', // Replace with your name
      from_name: data.name,
      message: data.message,
      reply_to: data.email,
    };

    try {
      const response = await emailjs.send('service_l33hcys', 'template_1wetdsk', templateParams, 'g3nmDuRZvwSSm3QJb');
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('Email sent successfully!');
      reset();
    } catch (error) {
      console.error('FAILED...', error);
      setErrorMessage('Failed to send email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined) =>
    error ? (error as FieldError).message : undefined;

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className={`form-group ${errors.name ? 'input-error' : ''}`}>
          <Input
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            isRequired
            type="text"
            label="Name"
            placeholder="What should I call you?"
            fullWidth={true}
          />
          {errors.name && <span className="error-message text-danger">{getErrorMessage(errors.name)}</span>}
        </div>

        <div className={`form-group ${errors.email ? 'input-error' : ''}`}>
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            isRequired
            type="email"
            label="Email"
            placeholder="tetris@icloud.com"
            fullWidth={true}
          />
          {errors.email && <span className="error-message text-danger">{getErrorMessage(errors.email)}</span>}
        </div>

        <div className={`form-group ${errors.message ? 'input-error' : ''}`}>
          <Textarea
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' },
            })}
            isRequired
            label="Message"
            fullWidth={true}
            minRows={6}
          />
          {errors.message && <span className="error-message text-danger">{getErrorMessage(errors.message)}</span>}
        </div>

        <Button radius="md" type="submit" disabled={loading}>
          {loading ? 'Sending...' : "Let's talk"}
        </Button>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </StyledForm>
    </FormWrapper>
  );
};
