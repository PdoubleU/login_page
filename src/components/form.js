import React from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';

const Forms = ({ isFirstSection, handleNext, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card className="w-50">
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className={isFirstSection ? 'visible' : 'hidden'}>
            <FormGroup>
              <Label for="nickname">Type your nickname</Label>
              <Input
                type="text"
                name="nickname"
                id="nickname"
                placeholder="nickname"
                {...register('nickname', {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                  pattern: /[A-Za-z0-9_-]+/,
                })}
              />
            </FormGroup>
            <Button color="primary" type="button" onClick={handleNext}>
              Next
            </Button>
          </span>
          <span className={!isFirstSection ? 'visible' : 'hidden'}>
            <FormGroup>
              <Label for="cardNo">Your card's number</Label>
              <Input
                type="number"
                name="card"
                id="cardNo"
                placeholder="card number"
                {...register('cardNo', {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Finish
            </Button>
          </span>
        </form>
        {(errors.nickname?.type === 'minLength' ||
          errors.nickname?.type === 'maxLength' ||
          errors.nickname?.type === 'pattern') && (
          <p>
            Nickname has min 3 and max 20 characters, only letters, digits,
            underscore or dash
          </p>
        )}
        {errors.nickname?.type === 'required' && <p>Field is required</p>}
        {errors.cardNo?.type === 'required' && <p>Field is required</p>}
        {(errors.cardNo?.type === 'minLength' ||
          errors.cardNo?.type === 'maxLength') && (
          <p>Card number should have 10 digits</p>
        )}
      </CardBody>
    </Card>
  );
};

export default Forms;
