import React, { useState } from 'react';
import { ButtonActionGroup } from '../../../components/ButtonActionGroup/ButtonActionGroup';
import { Button, FormControl, TextField } from '@mui/material';
import { ratingTextsN3 } from '../../../service/ReportOptions/N3/options';
import './GenerateReport.css';
import { ratingOption } from '../../../model/rating/ratingOption';

export const GenerateReport = () => {
  const [form, setForm] = useState({ nome: '' });

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const reportHandler = (subject: string, text: string) => {
    setForm({ ...form, [subject]: text });
  };

  return (
    <div className="generate-Report-container">
      <div className="generate-Report__form">
        <FormControl onChange={inputHandler}>
          <TextField required label="Nome do aluno" name="nome" />
        </FormControl>

        {ratingTextsN3.map((rate: ratingOption, key: number) => (
          <ButtonActionGroup
            rating={rate}
            reportHandler={reportHandler}
            key={key}
          />
        ))}

        <Button
          onClick={() =>
            console.log(
              Object.values(form)[Object.values(form).indexOf('nome')]
            )
          }
          variant="outlined"
          size="large"
        >
          Consolar form
        </Button>
      </div>
      <div className="generate-Report__form">
        <h2>{'Relatório '.concat(form.nome)}</h2>
        {Object.values(form).map((value: unknown, key: number) => (
          <span key={key}>{value as string}</span>
        ))}
      </div>
    </div>
  );
};
