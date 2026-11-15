export default async function Espera() {
    await new Promise(r=>setTimeout(()=>r("acabé"),2000))
    return (
       <div>
        <h1>Ya acabé</h1>
        <form action="/procesa" className="m-4 p-2 border border-amber-800">
            <label> Nombre: <input className="outline-1  mx-2" name="nombre" /></label>
            <button className="bg-blue-400 rounded p-2">Enviar</button>
        </form>
        <hr></hr>
        <form action="/api/alumnos" method="POST" className="m-4 p-2 border border-amber-800">
            <label> Nombre: <input className="outline-1  mx-2" name="nombre" /></label>
            <label> Clase:  <input className="outline-1  mx-2" name="clase" /></label>
            <label> Nota:   <input className="outline-1  mx-2" name="nota" /></label>
            <button className="bg-blue-400 rounded p-2">Enviar</button>
        </form>
       </div> 
    );

}