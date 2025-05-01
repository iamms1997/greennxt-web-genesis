
import { useState } from "react";
import { Calculator as CalcIcon, ArrowDown } from "lucide-react";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

interface CalculatorProps {
  type: "msme" | "investor";
}

const Calculator = ({ type }: CalculatorProps) => {
  // MSME calculation fields
  const [monthlyBill, setMonthlyBill] = useState(10000);
  const [terraceArea, setTerraceArea] = useState(1000);
  const [costPerUnit, setCostPerUnit] = useState(8);
  
  // Investor calculation fields
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [years, setYears] = useState(5);
  
  // MSME calculations with updated formula
  const potentialCapacity = terraceArea / 500; // How many units can be generated
  const monthlySavings = potentialCapacity * 30 * 5 * (costPerUnit / 2);
  const annualSavings = monthlySavings * 12;
  
  // Investor calculations with fixed 14% annual return
  const annualReturn = investmentAmount * 0.14; // 14% return
  const monthlyReturn = annualReturn / 12; // Monthly interest payout
  const totalReturn = annualReturn * years;
  const totalValue = investmentAmount + totalReturn;

  // Handle input change for investor amount
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? 0 : parseInt(e.target.value);
    if (!isNaN(value)) {
      setInvestmentAmount(value);
    }
  };

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
            <div className="mt-6 mb-2">
              <Slider
                id="monthly-bill"
                min={5000}
                max={100000}
                step={1000}
                value={[monthlyBill]}
                onValueChange={values => setMonthlyBill(values[0])}
                className="mb-6"
              />
              <div className="flex justify-between mt-2 relative">
                <span className="text-text-secondary">₹5,000</span>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-accent/10 px-3 py-1 rounded border border-accent/30">
                  <span className="text-text font-semibold">₹{monthlyBill.toLocaleString()}</span>
                </div>
                <span className="text-text-secondary">₹100,000</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="terrace-area" className="block text-text-secondary mb-2">
              Terrace Area (sq ft)
            </label>
            <div className="mt-6 mb-2">
              <Slider
                id="terrace-area"
                min={500}
                max={10000}
                step={100}
                value={[terraceArea]}
                onValueChange={values => setTerraceArea(values[0])}
                className="mb-6"
              />
              <div className="flex justify-between mt-2 relative">
                <span className="text-text-secondary">500 sq ft</span>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-accent/10 px-3 py-1 rounded border border-accent/30">
                  <span className="text-text font-semibold">{terraceArea.toLocaleString()} sq ft</span>
                </div>
                <span className="text-text-secondary">10,000 sq ft</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="cost-per-unit" className="block text-text-secondary mb-2">
              Current Electricity Cost (₹ per unit)
            </label>
            <div className="mt-6 mb-2">
              <Slider
                id="cost-per-unit"
                min={5}
                max={15}
                step={0.5}
                value={[costPerUnit]}
                onValueChange={values => setCostPerUnit(values[0])}
                className="mb-6"
              />
              <div className="flex justify-between mt-2 relative">
                <span className="text-text-secondary">₹5</span>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-accent/10 px-3 py-1 rounded border border-accent/30">
                  <span className="text-text font-semibold">₹{costPerUnit.toLocaleString()}</span>
                </div>
                <span className="text-text-secondary">₹15</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-secondary">Monthly Savings</p>
              <p className="text-accent text-2xl font-bold">₹{monthlySavings.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            </div>
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-secondary">Annual Savings</p>
              <p className="text-accent text-2xl font-bold">₹{annualSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            </div>
          </div>
          
          <div className="bg-secondary/50 p-6 rounded-lg text-center">
            <p className="text-text-secondary mb-2">Estimated 5-Year Savings</p>
            <p className="text-accent text-3xl font-bold">₹{(annualSavings * 5).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            <p className="text-text-secondary mt-2 text-sm">With Zero Upfront Cost</p>
          </div>
        </>
      ) : (
        <>
          <div className="mb-6">
            <label htmlFor="investment-amount" className="block text-text-secondary mb-2">
              Investment Amount (₹)
            </label>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                id="investment-amount"
                min="10000"
                max="10000000"
                step="10000"
                value={investmentAmount}
                onChange={handleInvestmentChange}
                className="text-lg font-medium"
              />
              <div className="flex flex-col">
                <span className="text-xs text-text-secondary">Default: ₹1,00,000</span>
                <button 
                  onClick={() => setInvestmentAmount(100000)}
                  className="text-xs text-accent hover:underline"
                >
                  Reset to default
                </button>
              </div>
            </div>
            <div className="mt-4 mb-2">
              <Slider
                id="investment-slider"
                min={10000}
                max={1000000}
                step={10000}
                value={[investmentAmount]}
                onValueChange={values => setInvestmentAmount(values[0])}
                className="mb-6"
              />
              <div className="flex justify-between mt-2 relative">
                <span className="text-text-secondary">₹10,000</span>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-accent/10 px-3 py-1 rounded border border-accent/30">
                  <span className="text-text font-semibold">₹{investmentAmount.toLocaleString()}</span>
                </div>
                <span className="text-text-secondary">₹10,00,000</span>
              </div>
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
              <p className="text-text-secondary">Annual Return (14%)</p>
              <p className="text-accent text-2xl font-bold">₹{annualReturn.toLocaleString()}</p>
            </div>
            <div className="bg-primary/50 p-4 rounded-lg">
              <p className="text-text-secondary">Monthly Interest</p>
              <p className="text-accent text-2xl font-bold">₹{monthlyReturn.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            </div>
          </div>
          
          <div className="bg-secondary/50 p-6 rounded-lg text-center">
            <p className="text-text-secondary mb-2">Total Value After {years} Years</p>
            <p className="text-accent text-3xl font-bold">₹{totalValue.toLocaleString()}</p>
            <p className="text-text-secondary mt-2 text-sm">Interest paid monthly, secured by Solar Assets</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Calculator;
