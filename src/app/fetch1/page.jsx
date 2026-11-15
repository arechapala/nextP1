async function getDatos() {
  const res = await fetch('https://randomuser.me/api');
  return res.json();
}

export default async function Home() {
  const datos = await getDatos(); // ¡await directo en el componente!
  
  return <pre>{JSON.stringify(datos, null, 2)}</pre>;
}