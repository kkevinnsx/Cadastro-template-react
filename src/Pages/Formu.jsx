import React from "react";
import { Container } from 'react-bootstrap';

const Formu = () => {
  return (
    <>
      <Container>
        <div className="container pt-2">
          <div className="card-title">
            <div className="card">
              <h2 className="p-3">Contato</h2>
            </div>
          </div>
          <div className="card">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
              <label className="label-control col-sm-6 col-md-6 col-lg-6 mt-6 p-3">
                <b>Digite o seu Nome</b>
                <input
                  className="form-control"
                  placeholder="Digite o seu Nome"
                  type="text"
                ></input>
              </label>
              <label className="label-control col-sm-6 col-md-6 col-lg-6 mt-6 p-3">
                <b>Digite o Gmail de contato</b>
                <input
                  className="form-control"
                  placeholder="Digite o seu gmail"
                  type="text"
                ></input>
              </label>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
              <label className="label-control col-sm-6 col-md-6 col-lg-6 mt-6 p-3">
                <b>Digite o telefone de contato</b>
                <input
                  className="form-control"
                  placeholder="Digite o seu telefone"
                  type="text"
                ></input>
              </label>
                
              <label className="label-control col-sm-6 col-md-6 col-lg-6 mt-6 p-3">
                <b>Digite o assunto</b>
                <input
                  className="form-control"
                  placeholder="Assunto..."
                  type="text"
                ></input>
              </label>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
              <label className="label-control col-sm-12 col-md-12 col-lg-12 mt-12 p-3">
                <b>Digite a mensagem.</b>
                <input
                  className="form-control"
                  placeholder="Digite a mensagem"
                  type="text"
                ></input>
              </label>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Formu;