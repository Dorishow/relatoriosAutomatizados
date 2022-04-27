import React from 'react';
import { Button } from '@mui/material';
import { ratingOption } from '../../model/rating/ratingOption';
import './ButtonActionGroup.css';
import { getRandomByRate } from '../../service/ReportOptions/utils/sort';
import { ActionButton } from '../../model/ActionButton/ActionButton';
import { getActionButtons } from '../../model/ActionButton/mockActionButtons';

interface ButtonActionGroupProps {
  rating: ratingOption;
  reportHandler: (subject: string, rate: string) => void;
}

export const ButtonActionGroup = (props: ButtonActionGroupProps) => {
  return (
    <section className="generate-Report__form__option">
      <p>{props.rating.subject}</p>
      <article className="generate-Report__form__option__buttonGroup">
        {getActionButtons(props.rating).map(
          (button: ActionButton, key: number) => (
            <Button
              key={key}
              className="buttonGroup__button"
              onClick={() =>
                props.reportHandler(
                  props.rating.subject,
                  getRandomByRate(
                    props.rating.subjectOptions,
                    button.performance
                  )
                )
              }
              color={button.color}
              variant="contained"
            >
              <span className="button__text">{button.text}</span>
            </Button>
          )
        )}
      </article>
    </section>
  );
};
