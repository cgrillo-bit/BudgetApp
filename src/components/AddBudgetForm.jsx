import { CurrencyEuroIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom"

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    const formRef = useRef();
    const focusRef = useRef();

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create new Budget
            </h2>
            <fetcher.Form
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
                    ref={formRef}
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
                    ref={focusRef}
                    />
                </div>
                <input type="hidden" name="_action" value="createBudget"/>
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting Budget</span> : (
                            <>
                            <span>Create Budget</span>
                            <CurrencyEuroIcon width={20} />                          
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddBudgetForm