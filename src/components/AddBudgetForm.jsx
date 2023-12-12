import { CurrencyEuroIcon } from "@heroicons/react/24/solid"
import { Form } from "react-router-dom"

const AddBudgetForm = () => {
    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create new Budget
            </h2>
            <Form
            method="post"
            className="grid-sm"
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input 
                    type="text" 
                    name="newBudget" 
                    id="newBudget" 
                    placeholder="e.g., Salary"
                    required
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input 
                    type="number" 
                    step="0.01"
                    name="newBudgetAmount"
                    id="newBudgetAmount"
                    placeholder="e.g., 300€"
                    required
                    />
                </div>
                <input type="hidden" name="_action" value="createBudget"/>
                <button type="submit" className="btn btn--dark">
                    <span>Create</span>
                    <CurrencyEuroIcon width={20}/>
                </button>
            </Form>
        </div>
    )
}

export default AddBudgetForm