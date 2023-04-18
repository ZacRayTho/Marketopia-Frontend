import React from 'react'
import { useGlobalState } from '../context/GlobalState';
import authService from '../services/auth.service';
import Link from 'next/link';

function profile() {

    const [state, dispatch] = useGlobalState();

    return (
        <div className='w-full h-full flex'>
            <div className='mx-auto mt-5 flex-col flex text-center'>
                <Link className='btn' href={"/"}>
                    Home
                </Link>
                {state.currentUser?.user_id}
                <button
                    className='btn'
                    onClick={authService.logout}
                >Log out</button>
            </div>
        </div>
    )
}

export default profile