import React, { useState, useEffect } from "react";
import { PageArea } from './styled';
import useApi from "../../helpers/OlxAPI";
import { doLogin } from "../../helpers/AuthHandler";

import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";

const Page = () => {
  const api = useApi();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const cList = await api.getCountries();
      setCountriesList(cList);
    }
    getCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');

    if(password !== confirmPassword) {
      setError('Senhas não batem.');
      setDisabled(false);
      return;
    }

    const json = await api.register(name, email, password, country);

    if(json.error) {
      setError(json.error);
    } else {
      doLogin(json.token);
      window.location.href = '/';
    }

    setDisabled(false);
  }

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }
        <form onSubmit={handleSubmit}>
        <label className="area">
            <div className="area-title">Nome Completo</div>
            <div className="area-input">
              <input 
                type="text" 
                disabled={disabled}
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Estado</div>
            <div className="area-input">
              <select value={country} onChange={e => setCountry(e.target.value)} required>
                <option></option>
                {countriesList.map((i, k) => 
                  <option key={k} value={i._id}>{i.name}</option>)
                }
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area-title">E-mail</div>
            <div className="area-input">
              <input 
                type="email" 
                disabled={disabled}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Senha</div>
            <div className="area-input">
              <input 
                type="password" 
                disabled={disabled}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Confirmar senha</div>
            <div className="area-input">
              <input 
                type="password" 
                disabled={disabled}
                checked={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title"></div>
            <div className="area-input">
              <button disabled={disabled}>Cadastrar Usuário</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Page;