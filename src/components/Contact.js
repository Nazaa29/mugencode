import Form from "./Form/Form"
import { Fragment } from "react"

const Contact = () => {
  return (      
    <section className="h-screen bg-dark-custom flex flex-col">
      <h1 className="text-6xl font-bold uppercase mt-10 ml-7">Contact</h1>
      <div>
        <Form/>
      </div>
      
    </section>

    
  )
}

export default Contact