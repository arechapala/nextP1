import { revalidatePath } from "next/cache";

// almacenamos en un array, normalemente sería accediendo a BD
const alumnos = [
    { id: 1, nombre: 'Ana', clase:"Grupo-1", nota: 7 },
    { id: 2, nombre: 'Luis', clase:"Grupo-1", nota: 5 },
    { id: 2, nombre: 'Carlos', clase:"Grupo-2", nota: 6 }
];

// GET /api/alumnos
export async function GET(request,{params}) {  // siempre se recibe una Request, que podemos usar o no, tb recibimos param si hay ruta
       
    const { searchParams } = new URL(request.url);  // 1.- para acceder a los parámetros de GET /api/alumnos?clase="Grupo-1"
    // = await params                               // 2.- parámetros dinamicos de la ruta: /api/alumnos/17

    const solo1 = searchParams.get('clase');     // accedemos via .get()
    if(solo1) {
      return Response.json(alumnos.filter(a=>a.clase==solo1));
    } else     
      return Response.json(alumnos);
}

// POST /api/alumnos
export async function POST(request) {

    // const datos = await request.json();          // 3.- accedemos al body
    const datos = await request.formData();         // 4. si son datos de un formulario, accedemos a los datos via .get()

    const nuevoAlumno = {          // antes deberíamos re-validar los datos!!
        id: alumnos.length + 1,    // ojo a este tipo de id, que genera duplicados si se borran intermedios
        nombre: datos.get("nombre"),
        clase: datos.get("clase"),
        nota: datos.get("nota")
    };
    alumnos.push(nuevoAlumno);     // lo metemos en esta "BD temporal"

    return Response.json(nuevoAlumno, { status: 201 });  // registro creado
}