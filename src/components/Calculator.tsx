
import { useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";

interface CalculatorProps {
  type: "msme" | "investor";
}

const Calculator = ({ type }: CalculatorProps) => {
  const [monthlyBill, setMonthlyBill] = useState(10000);
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [years, setYears] = useState(5);
  
  // MSME calculations
  const monthlySavings = monthlyBill * 0.5; // 50% savings
  const annualSavings = monthlySavings * 12;
  const totalSavings = annualSavings * 5; // 5 years
  
  // Investor calculations
  const annualReturn = investmentAmount * 0.16; // 16% return
  const totalReturn = annualReturn * years;
  const totalValue = investmentAmount + totalReturn;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-full overflow-hidden">
      <div className="flex items-center mb-6">
        <CalcIcon className="h-6 w-6 text-accent mr-3" />
        <h3 className="text-xl font-bold text-text">
          {type === "msme" ? "Savings Calculator" : "Investment Calculator"}
        </h3>
      </div>
      
      {type === "msme" ? (
        <>
          <div className="mb-6">
            <label htmlFor="monthly-bill" className="block text-text-secondary mb-2">
              Your Current Monthly Electricity Bill (₹)
            </label>
            <input
              type="range"
              id="monthly-bill"
              min="5000"
              max="100000"
              step="1000"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
              className="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2">
              <span className="text-text-secondary">₹5,000</span>
              <span className="text-text font-semibold">₹{monthlyBill.toLocaleString()}</span>
              <span className="text-text-secondary">₹100,000</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-secondary">Monthly Savings</p>
              <p className="text-accent text-2xl font-bold">₹{monthlySavings.toLocaleString()}</p>
            </div>
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-secondary">Annual Savings</p>
              <p className="text-accent text-2xl font-bold">₹{annualSavings.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="bg-secondary/50 p-6 rounded-lg text-center">
            <p className="text-text-secondary mb-2">Estimated 5-Year Savings</p>
            <p className="text-accent text-3xl font-bold">₹{totalSavings.toLocaleString()}</p>
            <p className="text-text-secondary mt-2 text-sm">With Zero Upfront Cost</p>
          </div>
        </>
      ) : (
        <>
          <div className="mb-6">
            <label htmlFor="investment-amount" className="block text-text-secondary mb-2">
              Investment Amount (₹)
            </label>
            <input
              type="range"
              id="investment-amount"
              min="10000"
              max="1000000"
              step="10000"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(parseInt(e.target.value))}
              className="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2">
              <span className="text-text-secondary">₹10,000</span>
              <span className="text-text font-semibold">₹{investmentAmount.toLocaleString()}</span>
              <span className="text-text-secondary">₹1,000,000</span>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="years" className="block text-text-secondary mb-2">
              Investment Period (Years)
            </label>
            <div className="flex space-x-2">
              {[1, 3, 5, 10].map((y) => (
                <button
                  key={y}
                  onClick={() => setYears(y)}
                  className={`flex-1 py-2 rounded-md transition-colors ${
                    years === y 
                      ? "bg-accent text-white" 
                      : "bg-primary text-text hover:bg-secondary"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-secondary">Annual Return (16%)</p>
              <p className="text-accent text-2xl font-bold">₹{annualReturn.toLocaleString()}</p>
            </div>
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-secondary">Total Returns ({years} years)</p>
              <p className="text-accent text-2xl font-bold">₹{totalReturn.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="bg-secondary/50 p-6 rounded-lg text-center">
            <p className="text-text-secondary mb-2">Total Value After {years} Years</p>
            <p className="text-accent text-3xl font-bold">₹{totalValue.toLocaleString()}</p>
            <p className="text-text-secondary mt-2 text-sm">Secured by Solar Assets</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Calculator;
