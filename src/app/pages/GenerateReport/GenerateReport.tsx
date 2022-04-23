import React, { useCallback, useEffect, useState } from 'react';
import { ButtonActionGroup } from '../../../components/ButtonActionGroup/ButtonActionGroup';
import { FormControl, TextField } from '@mui/material';
import { ratingTextsN3 } from '../../../service/ReportOptions/N3/options';
import './GenerateReport.css';
import { ratingOption } from '../../../model/rating/ratingOption';

export const GenerateReport = () => {
  const [form, setForm] = useState({ nome: '' });
  const [report, setReport] = useState(['']);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const reportHandler = (subject: string, text: string) => {
    setForm({ ...form, [subject]: text });
  };

  const showReport = useCallback(() => {
    const report: string[] = [];
    Object.values(form).map(
      (value: unknown) => value !== form.nome && report.push(value as string)
    );
    setReport(report);
  }, [form]);

  useEffect(() => {
    showReport();
  }, [showReport]);

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
      </div>
      <div className="generate-Report__form">
        <h2 className="generate-Report__form__title">
          {`Relatório ${form.nome}`}
        </h2>
        {report.map((text, key) => (
          <span key={key}>
            {text} <br />
          </span>
        ))}
      </div>
    </div>
  );
};
