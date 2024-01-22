'use client';

import { GithubLogo } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return <footer className="h-16 flex items-center justify-between opacity-30 font-bold text-sm">
        <span>Eben Vranken</span>

        {/* Links */}
        <a href="https://github.com/eben-vranken" target="_blank">
            <GithubLogo size={25} />
        </a>
    </footer>
}

export default Footer;