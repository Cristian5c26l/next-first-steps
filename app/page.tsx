import Link from "next/link";

export default function Home() {
  return (
    // main por defecto ocupa todo el ancho o width de la pantalla
    // <main className="border border-solid">
    //   <span className="text-5xl">Hola Mundo!!!</span>
    // </main>
    
    // main ahorá usa flex para que los elementos internos se conviertan en cajas flexibles las cuales se colocarán en columna (flex-col). Todas esas cajas flexibles se colocarán en el centro de la etiqueta main (items-center), es decir, en el centro a lo ancho o eje x.
    <main className="flex flex-col items-center p-24 border border-solid">
      <span className="text-5xl">Hola Mundo!!!</span>

      <Link href={'/about'}>About Page</Link>
    </main>
  );
}
