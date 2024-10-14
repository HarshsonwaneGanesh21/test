import React from 'react';
import { useNavigate } from 'react-router-dom';

function BatchTimings() {
    const navigate = useNavigate();

    const handleBatchTimingsClick = () => {
        navigate('/batch-timings'); // Navigate to batch timings page
    };

    const handleBackToHome = () => {
        navigate('/', { replace: true }); // Navigate back to home page
    };

    return (
        <div className="batch-timings-container" onClick={handleBatchTimingsClick}>
            <div className='B1'>
                <h2 className='b1'>Flexible Time Slots</h2>
                <div className='B2'>
                    <div className='b3'>
                    <p className='b2'>You can join more than one batch. Get reminders and session links on WhatsApp</p>
                    <p className='b2'>Session Duration: 45 Min</p>
                    </div>
                    <img src='https://assets.habit.yoga/freeyoga/timing_images.png'></img>
                </div>
            <img  src='https://assets.habit.yoga/freeyoga/batches_images.png'></img>
            </div>
            <button  className=" b4" onClick={(e) => {
                e.stopPropagation(); // Prevent the parent container's onClick event from firing
                handleBackToHome();
            }}>
                Back to Home
            </button>
        </div>
    );
}

export default BatchTimings;