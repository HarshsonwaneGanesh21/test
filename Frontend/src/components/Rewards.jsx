import React, { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';



function Rewards () {
    const [selectedRank, setSelectedRank] = useState(null);
    const [showReward, setShowReward] = useState(false);

    const navigate = useNavigate();


    const handleBackToHome = () => {
        navigate('/', { replace: true }); // Navigate back to home page
    };
    const ranks = [
        {
            rank: '1-10',
            image: "https://assets.habit.yoga/freeyoga/top-10Ranks.png"
        },
        {
            rank: '11-50',
            image: 'https://assets.habit.yoga/freeyoga/11-50Ranks.png',
        },
        {
            rank: '51-100',
            image: 'https://assets.habit.yoga/freeyoga/11-50Ranks.png',
        },
        {
            rank: '101-500',

            image: 'https://assets.habit.yoga/freeyoga/Desc-101-500.png',
        },
        {
            rank: '501-1000',
            image: 'https://assets.habit.yoga/freeyoga/Desc-501-1000.png',
        },
        {
            rank: '1001-2000',

            image: 'https://assets.habit.yoga/freeyoga/Desc-501-1000.png',
        },
        {
        
            rank: '2001-3500',
            image: 'https://assets.habit.yoga/freeyoga/Desc-2001-3500.png',
        },
        {
            rank: '3501-5000',
            image: 'https://assets.habit.yoga/freeyoga/Desc-3501-5000.png',
        },
        {
            rank: '5001-7500',
            image: 'https://assets.habit.yoga/freeyoga/Desc-5001-7500.png',
        },
        {
            rank: '7501-10000',
            image: 'https://assets.habit.yoga/freeyoga/Desc-7501-10000.png',
        },
    ];

    const handleRankChange = (rank) => {
        setSelectedRank(rank);
        setShowReward(true);
    };

    return (
        <div className='rew1'>
            <h2>Rewards for You!</h2>
            <p>See your rewards as per your rank in the leaderboard</p>
            <div className='rew2'>
                <select onChange={(e) => handleRankChange(e.target.value)}>
                    <option value="">Select your rank</option>
                    {ranks.map((rank) => (
                        <option key={rank.rank} value={rank.rank}>	
                            {rank.rank}
                        </option>
                    ))}
                </select>
            </div>
            {showReward && (
                <div>
                    <div>
                        <h3>{ranks.find((rank) => rank.rank === selectedRank)?.reward}</h3>
                        <img
                            src={ranks.find((rank) => rank.rank === selectedRank)?.image}
                            alt={ranks.find((rank) => rank.rank === selectedRank)?.reward}
                            style={{ width: '420px', height: 'auto' }}
                        />
                    </div>
                </div>
            )}
            <button className=" b4" onClick={(e) => {
                e.stopPropagation(); // Prevent the parent container's onClick event from firing
                handleBackToHome();
            }}>
                Back to Home
            </button>
        </div>
    );
};

export default Rewards;