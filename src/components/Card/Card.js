import { CardContainer } from "./CardStyles";
import { motion } from "framer-motion";
import incomeSvg from "../../assets/income.svg";
import expenseSvg from "../../assets/expense.svg";
import totalSvg from "../../assets/total.svg";

const Card = () => (
  <>
      <CardContainer 
        as={motion.div} 
        drag={'x'} 
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={1}
      >
        <h3>
          <span>Income</span>
          <img src={incomeSvg} alt="Income logo" />
        </h3>
        <p>R$ 5.000,00</p>
      </CardContainer>
      <CardContainer 
        as={motion.div} 
        drag={'x'} 
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={1}
      >
        <h3>
          <span>Expense</span>
          <img src={expenseSvg} alt="Expense logo" />
        </h3>
        <p>R$ 2.000,00</p>
      </CardContainer>
      <CardContainer 
        as={motion.div} 
        drag={'x'} 
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} 
        dragElastic={1}
        className="total">
        <h3>
          <span>Total</span>
          <img src={totalSvg} alt="Total logo" />
        </h3>
        <p>R$ 3.000,00</p>
      </CardContainer>
  </>
);

export default Card;
