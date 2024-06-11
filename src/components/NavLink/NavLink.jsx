import { useState } from 'react';
import Link from 'next/link';

export const NavLink = ({ href, children, setMenuState, ...delegated }) => {

  return (
    <Link {...delegated} href={href} onClick={() => setMenuState("closed")}>
      {children}
    </Link>
  );
};