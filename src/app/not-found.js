'use client' 
import { usePathname } from 'next/navigation';


export default function NotFound({children}){

    
    return  (
        <>
          <h1 className="text-red-600 bg-red-50 bold text-2xl p-4">{usePathname()} Not Found</h1>
          
        </>
    );
}