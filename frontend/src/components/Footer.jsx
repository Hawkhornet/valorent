import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
return (
    <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70 mt-10">

      {/* Logo */}
<img src={assets.logo} alt="logo" className="h-10" />

<p className="mt-4 text-center">
        Copyright © 2025 Valorent. All rights reserved.
</p>

<div className="flex items-center gap-4 mt-6">
        <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
Brand Guidelines
        </a>
        <div className="h-4 w-px bg-black/20"></div>
        <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
Trademark Policy
        </a>
</div>

    </footer>
)
}

export default Footer