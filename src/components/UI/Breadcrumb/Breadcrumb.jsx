import React from 'react';
import { useLocation } from 'react-router';

const Breadcrumb = () => {

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <>
            {/* Common Page Banner */}
            <div className="page-banner pt-[4rem] pb-[3.7rem] lg:py-[4rem]">
                <div className="banner-details text-center">
                    <h4 className="page-title capitalize text-slate-100 font-[600] tracking-wider text-[1.3rem] sm:text-[1.4rem] lg:text-[2.3rem]">Page Breadcrumb</h4>
                    <div className="page-breadcrumb text-slate-100 flex items-center justify-center gap-[0.7rem] lg:pt-1">
                        <a href="/" className='main-link text-decoration-none text-slate-100 capitalize tracking-wide font-[500] text-[0.8rem] lg:text-[1rem]'>menu</a>
                        <span className='text-[1.1rem]'>~</span>
                        <a href="/" className='sub-link text-decoration-none text-slate-100 capitalize tracking-wide font-[500] text-[0.8rem] lg:text-[1rem]'>menu restaurant</a>
                    </div>
                </div>
            </div>
            {/* Common Page Banner */}
        </>
    )
}

export default Breadcrumb