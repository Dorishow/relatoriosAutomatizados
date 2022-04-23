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
          className="buttonGroup__button"
          onClick={() =>
            props.reportHandler(
              props.rating.subject,
              getRandomByRate(props.rating.subjectOptions, performance.LOW)
            )
          }
          color="error"
          variant="contained"
        >
          <span className="button__text">{props.rating.lowButtonText}</span>
        </Button>
        <Button
          className="buttonGroup__button"
          onClick={() =>
            props.reportHandler(
              props.rating.subject,
              getRandomByRate(props.rating.subjectOptions, performance.MEDIUM)
            )
          }
          color="warning"
          variant="contained"
        >
          <span className="button__text">{props.rating.mediumButtonText}</span>
        </Button>
        <Button
          className="buttonGroup__button"
          onClick={() =>
            props.reportHandler(
              props.rating.subject,
              getRandomByRate(props.rating.subjectOptions, performance.HIGH)
            )
          }
          color="success"
          variant="contained"
        >
          <span className="button__text">{props.rating.highButtonText}</span>
        </Button>
      </article>
    </section>
  );
};
