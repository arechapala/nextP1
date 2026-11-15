import Link from "next/link";

const menu="text-blue-700 bg-green-100 rounded p-2 m-2";

export default function LayoutLab({children}) {

    return (
        <div className="flex">
            <aside className="w-48 flex flex-col">
                <Link className={menu} href="colores">Colores</Link>
                <Link className={menu} href="tipografia">Tipografia</Link>
            </aside>
            <section className="flex-1 p-8">{children}</section>
        </div>
    );
}
