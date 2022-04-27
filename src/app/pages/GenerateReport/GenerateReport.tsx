import React from 'react';
import { ButtonActionGroup } from '../../../components/ButtonActionGroup/ButtonActionGroup';
import { FormControl, TextField } from '@mui/material';
import { ratingTextsN3 } from '../../../service/ReportOptions/N3';
import { ratingOption } from '../../../model/rating/ratingOption';
import { useGenerateReport } from '../../../hooks/useGenerateReport';
import './GenerateReport.css';

export const GenerateReport = () => {
  const { report, inputHandler, reportHandler, form } = useGenerateReport();

  return (
    <div className="generate-Report-container">
      <div className="generate-Report__form">
        <FormControl>
          <TextField
            onChange={inputHandler}
            color="success"
            required
            label="Nome do aluno"
            name="nome"
          />
        </FormControl>

        {ratingTextsN3.map((rate: ratingOption, key: number) => (
          <ButtonActionGroup
            rating={rate}
            reportHandler={reportHandler}
            key={key}
          />
        ))}
      </div>
      <div className="generate-Report__report">
        <h2 className="generate-Report__form__title">
          {`Relatório ${form.nome}`}
        </h2>
        {report.map((text, key) => (
          <span className="report__text" key={key}>
            {text} <br />
          </span>
        ))}
      </div>
    </div>
  );
};
