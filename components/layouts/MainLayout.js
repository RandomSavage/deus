const MainLayout = (props) => {
  // const globalState = useStateContext()
  return(
    <div>
      <section className="content-container">
        {props.children}
      </section>
    </div>
  )
}

export default MainLayout;

/* style={{background: "url('https://rawredemptionphotography.com/eb.jpg')", minHeight: '100vh', minWidth: '100%',backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center"}} */