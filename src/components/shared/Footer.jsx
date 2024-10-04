import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer=()=>{
    return(
        <div className=''>
            <footer className=" p-24 footer bg-[#EFEFEF] text-base-content">
                <aside className="space-y-4">
                    <a className="text-[26px] font-notoSerifJP text-[#515151]">
                        <span className="text-primary">Franchies</span>Expert
                    </a>
                    <p className="font-poppins text-[13px] text-[#5E6282]">
                        Book a consultation with us and get a solution instantly.
                    </p>
                </aside>

                <div className="flex space-x-24">
                    <nav>
                        <h6 className="font-notoSerifJP text-[21px] text-[#080809]">Company</h6>
                        <div className="grid grid-cols-1 mt-2 space-y-1">
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">About</a>
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">Careers</a>
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">Mobile</a>
                        </div>
                    </nav>

                    <nav>
                        <h6 className="font-notoSerifJP text-[21px] text-[#080809]">Contact</h6>
                        <div className="grid grid-cols-1 mt-2 space-y-1">
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">Help/FAQ</a>
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">Press</a>
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">Affiliates</a>
                        </div>
                    </nav>

                    <nav>
                        <h6 className="font-notoSerifJP text-[21px] text-[#080809]">More</h6>
                        <div className="grid grid-cols-1 mt-2 space-y-1">
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">Etc</a>
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">Etc</a>
                            <a className="font-baiJamjuree text-[16px] text-[#5E6282]">Etc</a>
                        </div>
                    </nav>
                </div>

                <div className="space-y-4">
                    <div className="flex space-x-4">
                        <a href="#" className="text-black  bg-white social-icon h-[41px] w-[41px] rounded-full hover:bg-primary hover:text-white">
                            <FaFacebookF size={20} className='mx-auto mt-3' />
                        </a>
                        <a href="#" className="text-black  bg-white social-icon h-[41px] w-[41px] rounded-full hover:bg-primary hover:text-white">
                            <FaInstagram size={20} className='mx-auto mt-3' />
                        </a>
                        <a href="#" className="text-black  bg-white social-icon h-[41px] w-[41px] rounded-full hover:bg-primary hover:text-white">
                            <FaTwitter className='mx-auto mt-3' size={20} />
                        </a>
                    </div>
                    <p className="font-baiJamjuree text-[16px] text-[#5E6282]">Discover our app</p>
                    <div className="flex space-x-4">
                        <a href="#">
                            <Image height={12} width={12} src="/path-to-google-play-badge.svg" alt="Google Play Store" />
                        </a>
                        <a href="#">
                            <img src="/path-to-apple-store-badge.svg" alt="Apple App Store" />
                        </a>
                    </div>
                </div>


            </footer>
            <p className="text-center w-full -mt-8 font-poppins text-[12px] text-[#5E6282]">
                All rights reserved @FranchiesExpert
            </p>
       </div>
       
            
        
    )}
export default Footer;