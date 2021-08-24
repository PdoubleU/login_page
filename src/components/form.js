import React from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import {
  messageWrongNickname,
  messageWrongCardNo,
  messageNicknameReq,
  messageCardNoReq,
  backwardArrowUNICODE,
  checkPattern,
} from '../constans.js';

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
                  pattern: checkPattern,
                })}
              />
            </FormGroup>
            <Button className="btn-primary" type="button" onClick={handleNext}>
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
            <Button className="btn-primary" type="submit">
              Finish
            </Button>
            <Button
              className="btn-primary btn-icon btn-round btn-sm"
              type="button"
              onClick={handleNext}
            >
              {backwardArrowUNICODE}
            </Button>
            <span className="timer">{isTimerVisible && timer}</span>
          </span>
        </form>
        {(errors.nickname?.type === 'minLength' ||
          errors.nickname?.type === 'maxLength' ||
          errors.nickname?.type === 'pattern') &&
          messageWrongNickname}
        {errors.nickname?.type === 'required' && messageNicknameReq}
        {errors.cardNo?.type === 'required' && messageCardNoReq}
        {(errors.cardNo?.type === 'minLength' ||
          errors.cardNo?.type === 'maxLength') &&
          messageWrongCardNo}
      </CardBody>
    </Card>
  );
};

export default Forms;
