"use client"
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import InviteGuessModal from './components/invite-guests-modal';
import ConfirmTripModal from './components/confirm-trip-modal';
import InputDestination from './components/input-destination';
import InputInvite from './components/input-invite';

const Home = () => {
    const [isInputGuess, setInputGuess] = useState(false);
    const [isModalGuess, setModalGuess] = useState(false);
    const [isEmailGuess, setEmailGuess] = useState([
        'pedrolopes@gmail.com'
    ])
    const [isConfirmTrip, setConfirmTrip] = useState(false)

    const router = useRouter()

    const handleSubmitConfirmTrip = () => {
        router.push("/tripDetails");
    }

    const openGuessInput = () => {
        setInputGuess(true)
    }

    const closeGuessInput = () => {
        setInputGuess(false)
    }

    const openGuessModal = () => {
        setModalGuess(true)
    }

    const closeGuessModal = () => {
        setModalGuess(false)
    }

    const openConfirmModal = () => {
        setConfirmTrip(true)
    }

    const closeConfirmModal = () => {
        setConfirmTrip(false)
    }

    const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (isEmailGuess.includes(email)) {
            return
        }

        setEmailGuess([
            ...isEmailGuess, email
        ])

        event.currentTarget.reset()
    }

    const removeEmailFromInvites = (emailToRemove: string) => {
        const newEmailList = isEmailGuess.filter(email => email !== emailToRemove)

        setEmailGuess(newEmailList)
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center">
                <div className="flex flex-col items-center gap-3">
                    <h1 className='font-semibold text-xl'>Voyage with Pedro</h1>
                    <p className="text-zinc-300 text-lg">
                        Convide seus amigos e planeje sua próxima viagem!
                    </p>
                </div>
                <div className='mt-6'>
                    <InputDestination
                        closeGuessInput={closeGuessInput}
                        isInputGuess={isInputGuess}
                        openGuessInput={openGuessInput}
                    />
                    {isInputGuess && (
                        <InputInvite
                            isEmailGuess={isEmailGuess}
                            openConfirmModal={openConfirmModal}
                            openGuessModal={openGuessModal}
                        />
                    )}
                </div>

                <p className="text-xs lg:text-sm text-zinc-500 mt-6 p-2">
                    Ao planejar sua viagem pelo Voyage with Pedro você automaticamente concorda
                    <br /> com os nossos{' '}
                    <a className="text-zinc-300 underline">termos de uso</a> e{' '}
                    <a className="text-zinc-300 underline">políticas de privacidade</a>
                </p>
            </div>
            {isModalGuess && (
                <InviteGuessModal
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeGuessModal={closeGuessModal}
                    isEmailGuess={isEmailGuess}
                    removeEmailFromInvites={removeEmailFromInvites}
                />
            )}
            {isConfirmTrip && (
                <ConfirmTripModal
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeConfirmModal={closeConfirmModal}
                    handleSubmitConfirmTrip={handleSubmitConfirmTrip}
                />
            )}
        </div>
    );
};

export default Home;
