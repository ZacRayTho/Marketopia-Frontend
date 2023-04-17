import React from 'react'

function Modal({ isVisible, setShowModal, children, modalData }) {
    // if (!isVisible) return null;

    function handleClose(e) {
        if (e.target.id == 'wrapper') {
            setShowModal(false)
        }
    }

    return (
        <div
            className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
            onClick={handleClose}
            id='wrapper'
        >
            <div className=' md:w-[600px] flex flex-col bg-white rounded-xl'>
                <div className='flex text-black items-center justify-between m-4'>
                    <div className='text-lg font-bold'>
                        {/* {modalData.title} */}
                    </div>
                    <button
                        className='text-black text-xl place-self-end '
                        onClick={() => setShowModal(false)}
                    >
                        X
                    </button>
                </div>
                <div className='bg-white p-2 rounded text-black border-y-2 text-center'>
                    {/* {modalData.modal} */}
                </div>
                <div className='text-white m-2 flex justify-end space-x-2'>
                    {/* <a href={modalData.githubLink} className='py-2 px-4 bg-mediumnavy rounded-lg'> */}
                        Project Repo
                    {/* </a> */}
                    {/* <a href={modalData.projectLink} className='py-2 px-4 bg-mediumnavy rounded-lg'> */}
                        Check it out!
                    {/* </a> */}
                </div>
            </div>
        </div>
    )
}

export default Modal