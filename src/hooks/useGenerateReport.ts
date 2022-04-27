import { useCallback, useEffect, useState } from 'react';

export const useGenerateReport = () => {
  const [form, setForm] = useState({ nome: '' });
  const [report, setReport] = useState(['']);

  const inputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    },
    [form]
  );

  const reportHandler = useCallback(
    (subject: string, text: string) => {
      setForm({ ...form, [subject]: text });
    },
    [form]
  );

  const showReport = useCallback(() => {
    const report: string[] = [];
    Object.values(form).map((value: unknown) => {
      const formated = value as string;
      value !== form.nome &&
        report.push(
          formated.replaceAll('**student**', form.nome.split(' ')[0])
        );
    });
    setReport(report);
  }, [form]);

  useEffect(() => {
    showReport();
  }, [showReport]);

  return { report, inputHandler, reportHandler, form };
};
