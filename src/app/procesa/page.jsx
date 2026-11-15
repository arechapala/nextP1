import {cookies,headers} from "next/headers";

export default async function ProcesaForm({searchParams}){
    const sp=await searchParams;  // cualquiera de estas 3 instruccioners convierte la página en dinámica
    const cook=await cookies();
    const heads=await headers();
    const cooks=cook.getAll()

    return (
        <div className="p-4">
            <p>Me has enviado el nombre: {sp.nombre}</p>
            <h2 className="bold text-2xl m-2">Cookies</h2>
            <div>{cooks.length==0?"(no hay cookies)":cooks.map(cookie => ( <p key={cookie.name}> {cookie.name}: {cookie.value}</p>))}</div>
            <h2 className="bold text-2xl m-2">Header</h2>
            <div>{[...heads.entries()].map(([k,v])=> <p key={k}>{k}:{v}</p>)}</div>
        </div>
    )
}