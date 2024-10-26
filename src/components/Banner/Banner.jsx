import PropTypes from 'prop-types';

const Banner = ({ increaseCoins }) => {
    return (
        <div className=" bg-black bg-cover bg-center text-center py-20 p-4 w-5/6 mx-auto rounded-lg" style={{ backgroundImage: "url('/assets/assets/bg-shadow.png')" }}>

            <div className="relative max-w-4xl mx-auto text-white z-10">
                <div className="flex justify-center">
                    <img className="w-32 md:w-40 lg:w-48" src="/assets/assets/banner-main.png" alt="" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mt-8">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mt-4">
                    Beyond Boundaries Beyond Limits
                </p>
                <button onClick={increaseCoins} className="mt-8 bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 shadow-lg ring ring-yellow-400 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    increaseCoins: PropTypes.func.isRequired,
};

export default Banner;
