import Header  from "../Header/Header";

const Main = () => (
  <div>
    <Header />
    <main className="container">
      <section className="balance">
        <h2>Balance</h2>
        <div className="card">
          <h3>Entry</h3>
          <p>R$ 5.000,00</p>
        </div>
        <div className="card">
          <h3>Exit</h3>
          <p>R$ 2.000,00</p>
        </div>
        <div className="card total">
          <h3>Total</h3>
          <p>R$ 3.000,00</p>
        </div>
      </section>

      <section className="transaction">
        <h2>Transactions</h2>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Value</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="description">Light</td>
              <td className="expense">- R$ 500,00</td>
              <td className="date">23/01/2021</td>
            </tr>
            <tr>
              <td className="description">Light</td>
              <td className="income">- R$ 5000,00</td>
              <td className="date">23/01/2021</td>
            </tr>
            <tr>
              <td className="description">Light</td>
              <td className="expense">- R$ 200,00</td>
              <td className="date">23/01/2021</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
);

export default Main;
