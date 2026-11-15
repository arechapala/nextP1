import Link from 'next/link';

const menu=[ "text-blue-700 bg-blue-100 rounded p-2 m-0  mb-0 w-1/12","text-blue-700 bg-red-100 rounded p-2 m-0  mb-0 w-1/12"];

export default function Nav() {
  return (
    <nav className="flex gap-1 p-x-4 border-b-2">
      <Link className={menu[0]} href="/">Inicio</Link>
      <Link className={menu[0]} href="/mision">Misión</Link>
      <Link className={menu[0]} href="/bitacora">Bitácora</Link>
      <Link className={menu[0]} href="/labs/colores">Labs</Link>
      <Link className={menu[0]} href="/archivo">Archivo</Link>
      <a  className={menu[1]} href="/mision">Misión -a-</a>
      <a  className={menu[1]} href="/bitacora">Bitácora -a-</a>
    </nav>
  );
}