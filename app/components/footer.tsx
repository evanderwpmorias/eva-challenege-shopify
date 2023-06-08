import type { V2_MetaFunction } from "@remix-run/node";

import logo from '~/images/Eva-White.webp'
import greenLogo from '~/images/green-logo.svg'
import youtube from '~/images/youtube.svg'
import facebook from '~/images/facebook.svg'
import instagram from '~/images/instagram.svg'

export default function Index() {
    return (
        <footer>
        <div className=" bg-slate-700 text-white p-4">
            <div className="lg:hidden py-2">
                <img src={logo} className="h-8" alt="" />
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <p className="signup" ><b>We’ve got secrets…</b></p>
                    <p className=" text-sm" >We'll drop prices, give insider cosy knowledge and never send spam (promise).</p>
                </div>
                <div>

                    <ul className="flex gap-5">
                        <li className="HorizontalList__Item">
                            <a href="https://www.facebook.com/evahomeofficial/" className="Link Link--primary" target="_blank" rel="noopener" aria-label="Facebook">
                                <img src={facebook} className=" h-5" alt="" />
                            </a>
                        </li>


                        <li className="HorizontalList__Item">
                            <a href="https://instagram.com/eva.home" className="Link Link--primary" target="_blank" rel="noopener" aria-label="Instagram">
                                <img src={instagram} className="h-5" alt="" />
                            </a>
                        </li>


                        <li className="HorizontalList__Item">
                            <a href="https://www.youtube.com/channel/UCESSp-9_XRezy-EJbjWZf0Q" className="Link Link--primary" target="_blank" rel="noopener" aria-label="YouTube">
                                <img src={youtube} className="h-5" alt="" />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <div className="Footer__Aside p-4">
            <div>
                <img className="footer-green-logo" src={greenLogo} />
                <br />
            </div>
            <div className="md:flex text-xs justify-between gap-5">
                <div className="f-left w-full md:w-2/3">
                
                    <p>Eva acknowledges the Traditional Owners of the land where we work and live. We pay our respects to Elders past, present and emerging. We celebrate the stories, culture and traditions of Aboriginal and Torres Strait Islander Elders of all communities who also work and live on this land.</p>
                    <br />
                </div>
                <div className="f-right">
                    <div className="flex  flex-col gap-3 md:flex-row md:gap-6 ">
                        <a href="https://eva.com.au" className="Footer__StoreName  u-h7 Link Link--secondary">©2023  Eva</a>
                        <a href="/pages/terms-of-service" className="Footer__StoreName u-h7 Link Link--secondary">Terms and Conditions</a>
                        <a href="/pages/privacy-policy" className="Footer__StoreName u-h7 Link Link--secondary">Privacy Policy</a>
                        <a href="/pages/sitemap" className="Footer__StoreName u-h7 Link Link--secondary">Sitemap</a>
                    </div>
                </div>
            </div>
        </div>

        </footer>
    );
}

/*

<div className="above-footer">
            <div className="containers">
                <p className="hidden-lg">
                    <img src="https://cdn.shopify.com/s/files/1/1877/3353/files/evalogo.svg?v=1628558523" /></p>
                <p className="signup" >We’ve got secrets…</p>
                <p className="signup" >We'll drop prices, give insider cosy knowledge and never send spam (promise).</p>
                <div className="row">
                    <div className="col-lg-12 above-footer-container">

                        <div className="form-container">
                            
                                </div>
                            <div className="social-media-container">
                                <ul className="Footer__Social HorizontalList HorizontalList--spacingLoose">
                                    <li className="HorizontalList__Item">
                                        <a href="https://www.facebook.com/evahomeofficial/" className="Link Link--primary" target="_blank" rel="noopener" aria-label="Facebook">
                                            <img src={facebook} className=" w-8" alt="" />
                                        </a>
                                    </li>


                                    <li className="HorizontalList__Item">
                                        <a href="https://instagram.com/eva.home" className="Link Link--primary" target="_blank" rel="noopener" aria-label="Instagram">
                                            <img src={instagram} className=" w-8" alt="" />
                                        </a>
                                    </li>


                                    <li className="HorizontalList__Item">
                                        <a href="https://www.youtube.com/channel/UCESSp-9_XRezy-EJbjWZf0Q" className="Link Link--primary" target="_blank" rel="noopener" aria-label="YouTube">                                        
                                                <img src={youtube} className=" w-8" alt="" />
                                        </a>
                                    </li>



                                </ul>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className=" fixed top-0 w-full left-0 bg-green-900">
                        <div className="flex flex-row justify-between items-center container mx-auto ">
                            <ul className=" text-white flex gap-2 items-center">
                                <li className="mr-8"><img src={logo} alt="Eva logo" className=" h-12 py-2" /></li>
                                <li>Shop All</li>
                                <li>Shop All</li>
                                <li>Shop All</li>
                            </ul>
                            <ul>
                                <li>
                                    <button className="bg-white text-green-900 px-4 py-2 rounded-lg bg-transparent ">
                                        <img src={youtube} className=" w-8" alt="" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

*/