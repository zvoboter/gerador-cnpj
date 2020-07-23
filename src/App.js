import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cnpj: ''
    }
  }

  createCnpj = () => {
    var o = this.getRandom(9),
      r = this.getRandom(9),
      n = this.getRandom(9),
      t = this.getRandom(9),
      m = this.getRandom(9),
      i = this.getRandom(9),
      s = this.getRandom(9),
      d = this.getRandom(9),
      u = 2 + 6 * d + 7 * s + 8 * i + 9 * m + 2 * t + 3 * n + 4 * r + 5 * o;
    (u = 11 - this.getMod(u, 11)) >= 10 && (u = 0);
    var e = 2 * u + 3 + 0 + 0 + 0 + 7 * d + 8 * s + 9 * i + 2 * m + 3 * t + 4 * n + 5 * r + 6 * o;
    // eslint-disable-next-line no-unused-expressions
    (e = 11 - this.getMod(e, 11)) >= 10 && (e = 0);
    return "" + o + r + "." + n + t + m + "." + i + s + d + "/0001-" + u + e;
  }

  getRandom = (a) => {
    return Math.round(Math.random() * a)
  }

  getMod = (a, o) => {
    return Math.round(a - Math.floor(a / o) * o)
  }

  handleCNPJ = (e) => {
    e.preventDefault();

    let cnpj = this.createCnpj();
    this.setState({ cnpj });
  }

  render() {
    return (
      <>
        <main>
          <h1>Gerador de CNPJ</h1>
          <form onSubmit={this.handleCNPJ}>
            <div className="content-left">
              <div className="input-block">
                <input name="cnpj"
                  id="cnpj"
                  value={this.state.cnpj}
                  onChange={e => this.setState({ cnpj: e.target.value })}
                  placeholder="00.000.000/0001-01"
                  contentEditable="false" />
              </div>

              <div className="recent-list">
                <ul>
                  <li>{'00.000.000/0001-01'}</li>
                </ul>
              </div>
            </div>
            <div className="content-right">
              <button type="submit">Gerar</button>
            </div>
          </form>
        </main>
        <footer></footer>
      </>
    )
  }
}