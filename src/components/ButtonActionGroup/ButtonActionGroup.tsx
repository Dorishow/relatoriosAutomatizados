import React from 'react';
import { Button } from '@mui/material';
import { ratingOption } from '../../model/rating/ratingOption';
import './ButtonActionGroup.css';
import { performance } from '../../enumerator/performance';
import { getRandomByRate } from '../../service/ReportOptions/utils/sort';

interface ButtonActionGroupProps {
  rating: ratingOption;
  reportHandler: (subject: string, rate: string) => void;
}

export const ButtonActionGroup = (props: ButtonActionGroupProps) => {
  return (
    <section className="generate-Report__form__option">
      <p>{props.rating.subject}</p>
      <article className="generate-Report__form__option__buttonGroup">
        <Button
          onClick={() =>
            props.reportHandler(
              props.rating.subject,
              getRandomByRate(props.rating.subjectOptions, performance.LOW)
            )
          }
          color="error"
          variant="outlined"
        >
          {props.rating.lowButtonText}
        </Button>
        <Button
          onClick={() =>
            props.reportHandler(
              props.rating.subject,
              getRandomByRate(props.rating.subjectOptions, performance.MEDIUM)
            )
          }
          color="warning"
          variant="outlined"
        >
          {props.rating.mediumButtonText}
        </Button>
        <Button
          onClick={() =>
            props.reportHandler(
              props.rating.subject,
              getRandomByRate(props.rating.subjectOptions, performance.HIGH)
            )
          }
          color="success"
          variant="outlined"
        >
          {props.rating.highButtonText}
        </Button>
      </article>
    </section>
  );
};
