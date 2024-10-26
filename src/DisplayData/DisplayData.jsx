import { useEffect, useState } from "react"
import { FaFlag, FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayData = ({ coins, setCoins }) => {

    const [display, setDisplay] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [isAvailable, setIsAvailable] = useState(true);
    const maxPlayers = 6;

    useEffect(() => {
        fetch('/display.json')
            .then(res => res.json())
            .then(data => setDisplay(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSelectedPlayer = (player) => {
        if (selectedPlayers.length >= maxPlayers) {
            toast.error("You can select up to 6 players!");
            return;
        }

        if (selectedPlayers.includes(player)){
            toast.error("Player already selected!");
            return;
        }

        if (coins < player.biddingPrice) {
            toast.error(`You need more coins to select ${player.name}!`);
            return;
        }

        
            setCoins(coins - player.biddingPrice);
            setSelectedPlayers([...selectedPlayers, player]);
            toast.success(`${player.name} selected successfully!`);
        
    };

    const handleDeletePlayer = (playerId) => {
        setSelectedPlayers(selectedPlayers.filter(player => player.playerId !== playerId));
    };

    const handleToggleView = (view) => {
        setIsAvailable(view === 'available');
    }

    return (
        <div className="container mx-auto flex flex-col justify-between items-center p-4 md:p-6">
            <ToastContainer position="top-center" autoClose={3000}/>

            <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-6 w-full md:w-5/6 mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold mt-8 mr-40 ml-36 md:ml-0">
                    {isAvailable ? "Available Players" : `Selected Players (${selectedPlayers.length} / ${maxPlayers})`}
                </h2>
                <div>

                    <button className={`btn ${isAvailable ? 'bg-yellow-300' : 'bg-slate-200'} block md:inline-block px-6 md:px-10 py-3 md:rounded-l-lg font-semibold mt-6 md:mt-0`} 
                    onClick={() => handleToggleView('available')}>Available</button>

                    <button className={`btn ${!isAvailable ? 'bg-yellow-300' : 'bg-slate-200'} block md:inline-block px-4 md:px-8 py-3 rounded-r-lg font-semibold mt-3 md:mt-0`} 
                    onClick={() => handleToggleView('selected')}>Selected <span>({selectedPlayers.length})</span></button>

                </div>
            </div>

            {isAvailable ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 py-10">
                    {display.map((player) => (
                        <div key={player.playerId} className="card bg-base-100 shadow-xl rounded-lg">
                            <figure className="px-4 pt-6">
                                <img className="w-full h-30 md:h-full rounded-xl" src={player.image} alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl md:text-3xl text-gray-800 font-bold ml-4 md:ml-10 mt-6">
                                    {player.name}
                                </h2>
                                <p className="text-gray-600 text-base flex gap-2 ml-4 md:ml-10 mt-4 mb-3"><FaFlag></FaFlag> {player.country}</p>
                                <hr />
                                <p className="text-gray-600 text-base ml-10">Role: {player.role}</p>
                                <h3 className="text-lg text-gray-800 font-medium ml-10 mt-4">
                                    Batting Style: {player.battingType}
                                    <br />
                                    Bowling Style: {player.bowlingType}
                                </h3>
                                <p className="text-lg text-gray-800 font-medium ml-10 mt-4">
                                    Price: {player.biddingPrice}
                                </p>
                            </div>
                            <div className="card-actions mt-4">
                                <button className="btn border rounded-lg bg-slate-100 px-6 md:px-8 text-lg md:text-xl mt-2 ml-4 md:ml-10 mb-6 md:mb-10 font-medium p-2" onClick={() => handleSelectedPlayer(player)}>
                                    Choose player
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            ) : (
                <div className="w-full md:w-5/6 mx-auto">
                    {selectedPlayers.length === 0 ? (
                        <p className="text-2xl text-gray-800 font-bold">No Players Selected!</p>
                    ) : (
                        <div>
                            <ul>
                                {selectedPlayers.map((player) => (
                                    <li key={player.playerId} className="flex justify-between items-center bg-white p-4 border rounded-lg mb-4">
                                        <div className="flex items-center gap-4">
                                            <img className="w-16 h-16 rounded-full" src={player.image} alt="" />

                                            <div>
                                                <p className="text-lg font-semibold">{player.name}</p>
                                                <p className="text-sm text-gray-600">Role: {player.battingType}</p>
                                                <p className="text-sm text-gray-600">Price: {player.biddingPrice}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDeletePlayer(player.playerId)}>
                                            <FaTrash className="text-red-600"></FaTrash>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn bg-yellow-300 px-8 py-3 rounded-lg font-bold" onClick={() => handleToggleView('available')}>
                                Add More Player
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

DisplayData.propTypes = {
    coins: PropTypes.number.isRequired,
    setCoins: PropTypes.func.isRequired,
}

export default DisplayData;