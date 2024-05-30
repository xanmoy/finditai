import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FlaskConical } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 lg:p-5 lg:px-96 text-xl text-gray-400">
      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        <Link href="https://search.xanmoy.me">
                  <Image
                    src="/logo.svg"
                    alt="Xeoly Logo"
                    width={90}
                    height={70}
                    />
        </Link>
      </span>
      
       
          <Link href="https://labs.xanmoy.me" className="text-blue-600">
                  <FlaskConical className="text-white" />
        </Link>
      
    </nav>
  );
};

export default Navbar;
