import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { supabase } from '../supabaseClient';  // Import Supabase client

function Dashboard() {
    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) {
                setError(error.message);
            } else {
                setUser(user);
            }
        };

        const fetchProgress = async () => {
            const userId = supabase.auth.user()?.id;
            const { data, error } = await supabase
                .from('progress')
                .select('*')
                .eq('user_id', userId);

            if (error) {
                setError(error.message);
            } else {
                setProgress(data);
            }
        };

        fetchUserData();
        fetchProgress();
    }, []);

    return (
        <>
            <div className="dashboard">
                <div className="dashboard-user-info">
                    {user ? (
                        <>
                            <h3>Your Information</h3>
                            <div className="info-placeholder">
                                <p>Email: {user.email}</p>
                                <button>Edit Info</button>
                            </div>
                        </>
                    ) : (
                        <p>Loading user info...</p>
                    )}
                </div>
                <div className="dashboard-progress">
                    <h3>Your Progress</h3>
                    <div className="progress-placeholder">
                        {progress.length > 0 ? (
                            progress.map((item) => (
                                <p key={item.module_id}>
                                    Topic {item.module_id}: {item.progress}% Complete
                                </p>
                            ))
                        ) : (
                            <p>No progress data available.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
