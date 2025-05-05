
import { useState, useEffect } from "react";
import { Calculator as CalcIcon, ArrowDown, IndianRupee } from "lucide-react";
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
  const [billInputValue, setBillInputValue] = useState("10000");
  
  // Investor calculation fields
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [investmentInputValue, setInvestmentInputValue] = useState("100000");
  const [years, setYears] = useState(5);
  
  // MSME calculations with updated formula based on the new logic:
  // 100 sq ft contains 1 kWh capacity which produces 5 units per day
  const potentialCapacity = terraceArea / 100; // kWh capacity based on terrace area
  const potentialDailyUnits = potentialCapacity * 5; // Daily units produced
  const potentialMonthlySavings = potentialDailyUnits * (costPerUnit / 2) * 30; // Monthly savings at half price
  const maxPossibleSavings = monthlyBill / 2; // Maximum possible savings (50% of current bill)
  
  // Take the minimum of potential savings and maximum possible savings
  const monthlySavings = Math.min(potentialMonthlySavings, maxPossibleSavings);
  const annualSavings = monthlySavings * 12;
  
  // Investor calculations with 12% annual return (changed from 14%)
  const annualRate = 0.12; // Changed from 0.14
  const annualReturn = investmentAmount * annualRate;
  const monthlyReturn = annualReturn / 12;
  const totalReturn = annualReturn * years;
  const totalValue = investmentAmount + totalReturn;

  // Sync the input values with the slider values
  useEffect(() => {
    setBillInputValue(monthlyBill.toString());
  }, [monthlyBill]);

  useEffect(() => {
    setInvestmentInputValue(investmentAmount.toString());
  }, [investmentAmount]);

  // Handle direct input change for monthly bill
  const handleBillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBillInputValue(value);
    
    const numericValue = value === '' ? 0 : parseInt(value);
    if (!isNaN(numericValue)) {
      // Clamp the value between min and max
      const clampedValue = Math.min(Math.max(numericValue, 5000), 1000000);
      setMonthlyBill(clampedValue);
    }
  };

  // Handle blur event to ensure the input value is within range
  const handleBillInputBlur = () => {
    const numericValue = billInputValue === '' ? 0 : parseInt(billInputValue);
    if (!isNaN(numericValue)) {
      const clampedValue = Math.min(Math.max(numericValue, 5000), 1000000);
      setMonthlyBill(clampedValue);
      setBillInputValue(clampedValue.toString());
    } else {
      setMonthlyBill(10000);
      setBillInputValue("10000");
    }
  };

  // Handle input change for investor amount
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInvestmentInputValue(value);
    
    const numericValue = value === '' ? 0 : parseInt(value);
    if (!isNaN(numericValue)) {
      // Clamp the value between min and max
      const clampedValue = Math.min(Math.max(numericValue, 10000), 1000000);
      setInvestmentAmount(clampedValue);
    }
  };

  // Handle blur event for investment input
  const handleInvestmentBlur = () => {
    const numericValue = investmentInputValue === '' ? 0 : parseInt(investmentInputValue);
    if (!isNaN(numericValue)) {
      const clampedValue = Math.min(Math.max(numericValue, 10000), 1000000);
      setInvestmentAmount(clampedValue);
      setInvestmentInputValue(clampedValue.toString());
    } else {
      setInvestmentAmount(100000);
      setInvestmentInputValue("100000");
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
            
            {/* Direct input field */}
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IndianRupee className="h-5 w-5 text-text-secondary" />
              </div>
              <Input
                type="number"
                id="monthly-bill-input"
                value={billInputValue}
                onChange={handleBillInputChange}
                onBlur={handleBillInputBlur}
                min={5000}
                max={1000000}
                className="text-lg font-medium pl-10"
                placeholder="Enter monthly bill"
              />
            </div>
            
            <div className="mt-6 mb-2">
              <Slider
                id="monthly-bill"
                min={5000}
                max={1000000}
                step={1000}
                value={[monthlyBill]}
                onValueChange={values => setMonthlyBill(values[0])}
                className="mb-6 h-3"
              />
              <div className="flex justify-between mt-2 relative">
                <span className="text-text-secondary">₹5,000</span>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-accent/20 px-3 py-1 rounded-md border border-accent shadow-sm">
                  <span className="text-text font-semibold">₹{monthlyBill.toLocaleString()}</span>
                </div>
                <span className="text-text-secondary">₹10,00,000</span>
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
                className="mb-6 h-3"
              />
              <div className="flex justify-between mt-2 relative">
                <span className="text-text-secondary">500 sq ft</span>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-accent/20 px-3 py-1 rounded-md border border-accent shadow-sm">
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
                className="mb-6 h-3"
              />
              <div className="flex justify-between mt-2 relative">
                <span className="text-text-secondary">₹5</span>
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-accent/20 px-3 py-1 rounded-md border border-accent shadow-sm">
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
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IndianRupee className="h-5 w-5 text-text-secondary" />
              </div>
              <Input
                type="number"
                id="investment-amount-input"
                value={investmentInputValue}
                onChange={handleInvestmentChange}
                onBlur={handleInvestmentBlur}
                min={10000}
                max={1000000}
                className="text-lg font-medium pl-10"
                placeholder="Enter investment amount"
              />
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
              <p className="text-text-secondary">Annual Return (12%)</p>
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
