"use client"
import { useAuth } from '@/hooks/auth';
import { useEffect, useState } from 'react';
import React from 'react'


const Page = () => {
    const [user, setUser] = useState(null);

    const [nameTag, setNameTag] = useState(false);
    const [emailTag, setEmailTag] = useState(false);
    const { myAccount } = useAuth();

    useEffect(() => {
        myAccount()
            .then(data => setUser(data))
            .catch(error => console.error('Erreur lors de la récupération du profil utilisateur', error));
    }, []);

    if (!user) {
        return <div>Chargement...</div>;
    }

    const setTagNameValue = () => {
        setNameTag(!nameTag);
    }

    const setTagEmailValue = () => {
        setEmailTag(!emailTag);
    }

    return (
        <div className="">
            <h1 className="text-3xl ">Mon Profil</h1>
            <div className="flex items-center space-x-2">
                <p>Nom : { nameTag ? (<input type="text" value={user.name} className="text-black"></input>) : (<span>{user.name}</span>)}</p>
                <button onClick={setTagNameValue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Modifier
                </button>
            </div>
            <div className="flex items-center space-x-2">
                <p>Nom : {emailTag ? (<input type="text" value={user.email} className="text-black"></input>) : (
                    <span>{user.email}</span>)}</p>
                <button onClick={setTagEmailValue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Modifier
                </button>
            </div>
        </div>
    );
};

export default Page;
