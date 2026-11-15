// export const instant = false;  // si el cache component está habilitado (o poner <Suspense>)

export default async function InviPage({params,}) {
  
  const { nombre } = await params;
  return <h1 className="text-2xl">Nombre: {nombre}</h1>;
}

