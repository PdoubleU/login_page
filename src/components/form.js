import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';

const Forms = ({
  isFirstSection,
  handleNext,
  onSubmit,
  isTimerVisible,
  timer,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card className="w-50">
      <CardBody>
        <form className="register_form" onSubmit={handleSubmit(onSubmit)}>
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
            <span className="timer">{isTimerVisible && timer}</span>
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
            <span className="timer">{isTimerVisible && timer}</span>
          </span>
        </form>
        {(errors.nickname?.type === 'minLength' ||
          errors.nickname?.type === 'maxLength' ||
          errors.nickname?.type === 'pattern') &&
          'Nickname has min 3 and max 20 characters, only letters, digits, underscore or dash'}
        {errors.nickname?.type === 'required' && 'Nickname is required'}
        {errors.cardNo?.type === 'required' && 'Card is required'}
        {(errors.cardNo?.type === 'minLength' ||
          errors.cardNo?.type === 'maxLength') &&
          'Card number should have 10 digits'}
      </CardBody>
    </Card>
  );
};

export default Forms;
