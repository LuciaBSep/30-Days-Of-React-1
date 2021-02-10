import React from 'react'
import ReactDOM from 'react-dom'

const Greeting=()=>{
    const [name,setName]=React.useState('')
    
    const handleChange=event=>setName(event.target.value)

    return(
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input onBlur={handleChange} id="name"/>
            </form>
            {name ? <b>Hello {name}</b> : 'Please type your name'}
        </div>
    ) 
}

<div className="hola">
    
</div>


const Formulario=()=>{

    const [username,setUsername]=React.useState('')

    const isLowerCase = username === username.toLowerCase()
    const error=isLowerCase ? null: 'Username must be lower case'

    //const usernameInputRef= React.useRef()

    function handleSubmit(event){
        event.preventDefault()
        console.log("Submitted")
        console.dir(event.target)
        //La variable username se va porque esta especificada en el state
      //  const username=event.target.elements.usernameInput.value
       // const username=usernameInputRef.current.value
       //Si se usa ref en input tiene que estar: ref={usernameInputRef}
      //  alert(`You entered: ${username}`)


        const password=event.target.elements.passwordInput.value
        alert("You enter: "+username)
        alert("Your password is: "+password)
    }

    function handleChange(event){
        //toLowerCase convierte mayusuclas en minisculas
        //hay que agregar en input value={username}
        //y con eso se quita lo de verificar si es lowercase y el error
        setUsername(event.target.value.toLowerCase())
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usernameInput">Username:</label>
                <input value={username} id="usernameInput" type="text" onChange={handleChange}/>
                <div style={{color:'red'}}>{error}</div>

            </div>
            <div>
                <label htmlFor="passwordInput">Password</label>
                <input id="passwordInput" type="password"/>
            </div>
            <button disabled={Boolean(error)} type="submit">Submit</button>
        </form>
    )
}



class ErrorBoundary extends React.Component {
    state={error:null}
    static getDerivedStateFromError(error){
        return {error}
    }
    render()
    {
        const {error}=this.state
        if (error)
        {
            return <this.props.FallbackComponent error={error}/>
        }
        return this.props.children
    }
}

function ErrorFallback({error}){
    return (
        <div>
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
        </div>
      )
}

function Bomb(){
    throw new Error('CABOOM')
}

const Bomba=()=>{
    const [explode, setExplode] = React.useState(false)
      return (
        <div>
          <div>
            <button onClick={() => setExplode(true)}>💣</button>
          </div>
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              {explode ? <Bomb /> : 'Push the button Max!'}
            </ErrorBoundary>
          </div>
        </div>
    )
}

const allItems=[
    {id:'a',value:'apple'},
    {id:'b', value:'orange'},
    {id:'g', value:'grape'},
    {id:'p', value:'pear'}
]

const Lista=()=>
{

    const [items,setItems]=React.useState(allItems)

    const addItem=()=>
    {
        setItems([...items, allItems.find(i => !items.includes(i))])
    }
    

    const removeItem=(item)=>
    {
        setItems(items.filter(i => i !== item))
    }

    return(
        <div>
        <button disabled={items.length >= allItems.length} onClick={addItem}>
          add item
        </button>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          {items.map(item => (
            <li key={item.id}>
              <button onClick={() => removeItem(item)}>remove</button>{' '}
              <label htmlFor={`${item.value}-input`}>{item.value}</label>{' '}
              <input id={`${item.value}-input`} defaultValue={item.value} />
            </li>
          ))}
        </ul>
      </div>
    )


}



const App = () =>
(
    <div>
        <Greeting/>
        <Formulario/>
        <br/>
        <Bomba/>
        <br/>
        <Lista/>
    </div>
)



ReactDOM.render(<App/>,document.getElementById("root"))