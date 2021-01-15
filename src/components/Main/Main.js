import { TitleH2 } from "../Balance/BalanceStyles";
import Header  from "../Header/Header";
import { MainContainer } from './MainStyles'
import BalanceSection from '../Balance/Balance';

const Main = () => (
  <>
    <Header />
    <MainContainer>
      <BalanceSection />
      <section className="transaction">
        <TitleH2>Transactions</TitleH2>

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
    </MainContainer>
  </>
);

export default Main;
