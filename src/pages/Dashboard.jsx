// rrd imports
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
//  helper functions
import { fetchData } from "../helpers"

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";


// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets }
}

// action
export async function dashboardAction({request}) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data)
  //new user submit 
  if (_action == "newUser"){
    try{
      //throw new Error("ERROR")
      localStorage.setItem("userName", JSON.stringify(values.userName))
      return toast.success(`Welcome, ${values.userName}`)
    }
     catch (e) {
      throw new Error("There was a problem creating user.")
    }
  }
}

const Dashboard = () => {
  const {userName} = useLoaderData()

  return (
    <>
    {userName ? (
      <div className="dashboard">
        <h1>Welcome, <span className="accent">
          {userName}</span></h1>
          <div className="grid-sm">
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
      </div>
    ) : <Intro />}
    </>
  )
}

export default Dashboard