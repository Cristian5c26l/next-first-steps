'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  
  const currentPathname = usePathname();
  console.log(currentPathname);

  return (
      <Link className={`${style.link} ${path === currentPathname ? style['active-link']: ''}`} href={path}>{text}</Link>
  )
}
