
const nameArray = ['Michael', 'Jackson', 'Biden', 'Trump'];
const elementsHtml = [<h2>Congrats</h2>,<h3>React is awesome.</h3>];

ReactDOM.render(
    <div>
        <div className="card">
        <h1>Hello World</h1>

        <ol>
        {nameArray.map((element,item) => {
            console.log(item)
            console.log(element)
         return <li key={item} className={item === 0 ? 'first' : item === 1 ? 'second' : item === 2 ? 'third' : ''}>{element}</li>
         
        })}
        </ol> 
        
        </div>

        <div>
        {elementsHtml.map((element,item) => {
            return <dl key={item}>{element}</dl>})}
        </div>

    </div>,

document.getElementById('example')
)
    
      
        
        
        
     

    

