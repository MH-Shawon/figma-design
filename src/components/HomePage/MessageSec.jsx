const MessageSec=()=>{
    return(
        <div
            className="min-h-screen mt-[75px] hero"
            style={{
                backgroundImage: "url(/assets/images/telephone.jpeg)",
            }}
        >
            <div className="bg-opacity-10 hero-overlay"></div>
            <div
                className="text-center sm:w-[100%] md:w-[680px] hero-content text-neutral-content"
                style={{
                    borderRadius: "41px",
                    border: "1px solid #D0D0D0",
                    background: "rgba(243, 243, 243, 0.50)",
                    backdropFilter: "blur(23.5px)",
                    padding: "2rem", 
                }}
            >
                <div className="max-w-md">
                    <h4 className='text-[40px] tracking-[-0.4px] text-white'>Send us a Message!</h4>
                    <div className='flex items-center justify-center pl-28'><svg xmlns="http://www.w3.org/2000/svg" width="149" height="16" viewBox="0 0 149 16" fill="none">
                        <path d="M129.09 13.037C129.92 12.8808 131.633 12.1708 133.268 11.7347C136.444 10.8873 139.751 11.3007 142.877 9.84615C146.533 8.14488 127.853 7.57647 123.724 7.55844C118.833 7.54041 113.102 7.57448 105.679 7.49733C91.5123 7.35707 72.2241 7.27392 53.0809 7.98123C47.4223 8.19863 41.7603 8.38697 36.1235 8.72962C34.0063 8.86187 31.8855 8.99613 29.7682 9.12836C26.0541 9.36981 22.3426 9.61226 18.6276 9.82768C15.4816 10.01 11.6069 10.9337 8.21758 10.8586C4.35284 10.7724 1.66053 9.21152 0.821205 6.212C0.509883 5.12198 0.308021 3.52593 0.991459 2.59723C1.67855 1.6655 2.06041 1.4 2.47752 1.14955C3.48446 0.560449 4.72853 0.102611 5.32076 0.0855814C13.4917 -0.105773 22.6112 0.0605336 29.9261 0.225842C35.6671 0.360092 41.4207 0.486317 48.9836 0.492344C58.0459 0.608559 85.1841 1.0093 94.2435 1.01733C100.249 1.02334 106.24 1.4341 112.214 1.96509C117.184 2.40592 122.209 2.87178 127.318 3.39473C132.259 3.89266 135.195 3.92571 140.191 4.49878C140.969 4.58194 141.886 4.6651 142.877 4.76529C143.703 4.83042 144.773 4.94763 145.579 4.99071C146.389 5.02277 148.096 5.31676 148.735 8C149.518 11.2898 148.096 13.1142 146.303 14.3264C145.422 14.9225 144.486 14.9325 143.961 15.0076C141.945 15.3733 140.056 15.4875 138.635 15.3062C137.678 15.183 134.809 15.5567 132.299 15.8312C130.445 16.0466 129.393 16.0796 126.519 15.7901C125.006 15.4665 124.967 14.5087 126.73 13.7042C127.517 13.4117 128.418 13.1623 129.09 13.037Z" fill="white" />
                    </svg></div>
                    <div className="flex flex-col w-full max-w-lg mx-auto mt-4 space-y-2">
                    <h4 className='text-white text-[14px] text-left'>Full Name</h4>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        
                            <div className='flex gap-3'>
                                <div className="flex flex-col w-full">


                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        placeholder="First Name"
                                        className="p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col w-full">

                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        placeholder="Last Name"
                                        className="p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="text-white text-[14px] text-left">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                className="p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="message" className="text-white text-[14px] text-left">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Type your message here..."
                                className="p-4 bg-white border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="flex items-center justify-center flex-shrink-0 gap-3 px-6 py-2 bg-white border border-gray-300 rounded-lg w-52 text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                Send Message
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                            
                        </div>
                        <div className='flex justify-end pt-3 pr-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="25" viewBox="0 0 74 25" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.64518 6.45874C8.60728 8.28791 9.81023 10.1167 11.2536 11.9459C11.7348 12.8603 12.6969 13.775 11.7348 15.1468C11.0132 16.0612 9.32938 16.0612 8.36687 15.1468C6.68308 12.4033 4.75847 9.65969 3.07468 6.68763C2.353 5.77324 1.87175 4.85846 1.15007 3.94407C0.668808 3.02968 -0.293289 2.1149 0.668816 0.743114C1.63091 -0.400168 2.83385 0.057223 4.27721 0.285723C7.40435 0.743114 13.8995 0.743114 17.5077 0.971613C20.6348 0.971613 20.6348 3.48668 19.1915 4.62957C18.7102 4.85807 17.9885 4.85807 17.0264 4.85807C15.583 4.85807 14.1397 4.62957 12.4559 4.62957C12.6963 5.08696 17.2672 7.83052 17.7481 8.05902C19.4319 9.2023 21.1161 10.3452 22.7998 11.4885C24.7245 12.8603 30.9788 17.6615 33.8653 17.89C33.1436 16.0608 30.0164 13.0888 28.5731 9.4308C27.1297 5.77285 30.0164 2.3434 32.9032 0.971613C39.6387 -2.22934 49.0204 4.17257 52.87 6.91613C57.9218 10.803 66.1414 15.8866 68.7667 18.0948C70.7101 19.7296 72.2173 20.8944 73.4541 22.6185C74.5359 24.1264 73.8147 24.5788 72.733 24.1264C71.2715 23.5153 70.1551 22.7464 68.4061 21.7138C62.2763 18.0948 56.9601 14.4605 51.4269 10.8026C47.8185 8.05902 36.753 0.285918 32.9034 6.00135C30.4979 9.6593 39.6389 15.3753 38.4364 19.4909C37.9551 21.32 36.0309 22.0059 33.6251 21.777C30.2571 21.5485 26.4082 18.805 24.2432 17.4332C23.5215 16.9758 8.84833 6.91633 7.64518 6.45874Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )}
export default MessageSec;