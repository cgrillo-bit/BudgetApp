import { Form } from "react-router-dom"

// libary import 
import { UserPlusIcon } from "@heroicons/react/24/solid"

// assets
import illustration from "../assets/illustration.jpg"

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Personal Budget Control <span className="accent">For us</span>
                </h1>
                <p>4 grant and 2 redbull were used to make budget</p>
                <Form method="post">
                    <input 
                     type="text"
                     name="userName" 
                     required placeholder="Enter Name"
                     aria-label="Your name" autoComplete="given-name"
                     />
                     <button type="submit" className="btn btn--dark">
                        <span>Create User</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="money person" width={600}/>
        </div>
    )
}
export default Intro