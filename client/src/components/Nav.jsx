import React from "react";

const Nav = () => {
    return(
        <>
            <header className='flex flex-row items-center justify-between'>
                <section className='text-5xl'>
                    Stroke
                </section>

                <ul className='flex flex-row space-x-4'>
                <li>About</li>
                <li>Contact us</li>
                <li>Blog</li>
                </ul>

                <button type="button">
                Log in
                </button>
            </header>
        </>
    )
};


export default Nav;