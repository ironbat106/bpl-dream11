const Footer = () => {
    return (
        <footer className="relative bg-[#13172b] text-white py-8 md:py-16 mt-8 md:mt-[257px]">
            <div className="absolute -top-16 md:-top-32 left-1/2 transform -translate-x-1/2 w-11/12 md:w-1/2  bg-gradient-to-r from-[#f1e3e0] to-[#f4dcae] p-6 md:p-8 rounded-lg shadow-lg ring-8">
                <h2 className="text-2xl font-semibold mb-2 text-center text-black">Subscribe to our Newsletter</h2>
                <p className="text-center mb-4 text-gray-600">Get the latest updates and news right in your inbox!</p>
                <div className="flex justify-center space-x-2">
                    <input type="email" placeholder="Enter your email" className="w-3/4 p-3 rounded-lg border border-gray-300" />
                    <button className="bg-gradient-to-r from-[#e09cff] to-[#f4b500] text-black px-4 py-3 rounded-lg font-semibold">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="mb-8 md:mb-0 flex justify-center items-center mt-44 md:mt-12">
                <img src="/assets/assets/logo-footer.png" alt="" />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left mt-16 md:mt-24 space-y-8 md:space-y-0">

                <div className="mb-8 md:mb-0 w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">About us</h3>
                    <p className="text-sm text-gray-400">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>

                <div className="mb-8 md:mb-0 w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="" className="text-sm hover:underline text-gray-400">Home</a></li>
                        <li><a href="" className="text-sm hover:underline text-gray-400">Services</a></li>
                        <li><a href="" className="text-sm hover:underline text-gray-400">About</a></li>
                        <li><a href="" className="text-sm hover:underline text-gray-400">Contact</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/3 text-center">

                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                    <p className="text-sm mb-4 text-gray-400">Subscribe to our newsletter <br /> for the latest updates.</p>

                    <div className="flex flex-col md:flex-row space-x-2 items-center">

                        <input type="email" placeholder="Enter you email" className="w-3/4 p-3 rounded-lg border border-gray-300" />

                        <button className="bg-gradient-to-r from-[#e09cff] to-[#f4b500] text-black font-semibold px-4 py-3 rounded-lg mt-3 md:mt-0">
                            Subscribe
                        </button>

                    </div>
                </div>
            </div>

            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p className="text-xs ">©2024 All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;