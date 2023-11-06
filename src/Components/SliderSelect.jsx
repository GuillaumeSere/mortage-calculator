import React from 'react'
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
    const bank_limit = 10000;

    const homeValue = Number(data.homeValue);
    const downPayment = Number(data.downPayment);
    const loanAmount = Number(data.loanAmount);
    const interestRate = Number(data.interestRate);

    return (
        <div>
            <SliderComponent
                onChange={(e, value) => {
                    const numericValue = Number(value);
                    setData({
                        ...data,
                        homeValue: numericValue.toFixed(0),
                        downPayment: (0.2 * numericValue).toFixed(0),
                        loanAmount: (0.8 * numericValue).toFixed(0),
                    });
                }}
                defaultValue={homeValue}
                min={1000}
                max={bank_limit}
                steps={100}
                unit="$"
                amount={data.homeValue}
                label="Home Value"
                value={homeValue}
            />

            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        downPayment: value.toFixed(0),
                        loanAmount: (data.homeValue - value).toFixed(0),
                    })
                }
                defaultValue={downPayment}
                min={0}
                max={data.homeValue}
                steps={100}
                unit="$"
                amount={data.downPayment}
                label="Down Payment"
                value={data.downPayment}
            />

            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        loanAmount: value.toFixed(0),
                        downPayment: (data.homeValue - value).toFixed(0),
                    })
                }
                defaultValue={data.loanAmount}
                min={0}
                max={data.homeValue}
                steps={100}
                unit="$"
                amount={data.loanAmount}
                label="Loan Amount"
                value={data.loanAmount}
            />

            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        interestRate: value,
                    })
                }
                defaultValue={data.interestRate}
                min={2}
                max={18}
                steps={0.5}
                unit="%"
                amount={data.interestRate}
                label="Interest Rate"
                value={data.interestRate}
            />
        </div>
    )
}

export default SliderSelect
