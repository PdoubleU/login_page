import React from 'react';
import { FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';

const Forms = ({ isFirstSection, handleNext }) => {
  return (
    <Card className="w-50">
      <CardBody>
        <form>
          {isFirstSection && (
            <>
              <FormGroup>
                <Label for="nickname">Type your nickname</Label>
                <Input
                  type="name"
                  name="nickname"
                  id="nickname"
                  placeholder="nickname"
                />
              </FormGroup>
              <Button color="primary" type="button" onClick={handleNext}>
                Next
              </Button>
            </>
          )}
          {!isFirstSection && (
            <>
              <FormGroup>
                <Label for="cardNo">Your card's number</Label>
                <Input
                  type="number"
                  name="card"
                  id="cardNo"
                  placeholder="card number"
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Finish
              </Button>
            </>
          )}
        </form>
      </CardBody>
    </Card>
  );
};

export default Forms;
