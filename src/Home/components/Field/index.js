
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import './Field.css'

const Field = (props) => {
  const formik = useFormik({
      initialValues: {
          email: '',
          name: '',
      },
      validate: values => {
          const { name, email } = values
          const errors = {}
          if (!name) {
              errors.name = 'Digite seu nome'
          }
          if (!email) {
              errors.email = 'Preencha com seu e-mail'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
              errors.email = 'email inválido!'
          }

          return errors
      },
      onSubmit: values => {
          if (formik) {
              console.log('valuess---*', values)
              props.onRequestSend(values)
          }
      },
  });
  var [cadastroNewsletter, setCadastroNewsletter] = useState("");

  return (
      <form onSubmit={formik.handleSubmit}>
          <div>
              <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  placeholder="Digite seu nome"
              />
              {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
          </div>
          <div className="grid">
              <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="Digite seu email"
              />
              {cadastroNewsletter}
              {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
          </div>
          <button type="submit">Eu Quero!</button>
      </form>
  );
};

export default Field;
