import Form from "./Form/Form"


const Contact = () => {
  return (      
    <section className="h-screen bg-dark-custom relative">
      <div className="absolute top-8 bottom-0 left-14 bg-red-custom w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute top-16 left-24 right-24 h-1px bg-red-custom"></div> 
      <h1 className="text-6xl absolute left-40 top-14 font-bold uppercase mt-10 ml-7 font-tungsten tracking-wider text-gray-custom">Contact Us</h1>
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full felx flex-col">
        <Form/>
      </div>
      
    </section>
  )
}

export default Contact