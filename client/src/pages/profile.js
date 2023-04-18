import React from 'react'
import { useGlobalState } from '../context/GlobalState';
import authService from '../services/auth.service';

function profile() {

    const [state, dispatch] = useGlobalState();

    return (
        <div className='w-full h-full flex'>
            <div className='mx-auto mt-5'>

                {/* {state.currentUser.user_id} */}
                <button
                    className='py-2 px-4 rounded-lg bg-mtpurple text-white font-bold'
                    onClick={authService.logout}
                >Log out</button>
            </div>
        </div>
    )
}

export default profile