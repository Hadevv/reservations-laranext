"use client"
import { useAuth } from '@/hooks/auth';
import { useEffect, useState } from 'react';

const Page = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { myAccount, modifyAccount } = useAuth();

    useEffect(() => {
        myAccount()
            .then(data => {
                setUser(data);
                setName(data.name);
                setEmail(data.email);
            })
            .catch(error => console.error('Erreur lors de la récupération du profil utilisateur', error));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await modifyAccount(user.id, { name, email });
            console.log('handleSubmit a été appelée avec comme nom', name, "et comme emaail", email);
            alert('Profil mis à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil', error);
        }
    };

    if (!user) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="">
            <h1 className="text-3xl ">Mon Profil</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center space-x-2">
                    <label>Nom :</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="text-black" />
                </div>
                <div className="flex items-center space-x-2">
                    <label>Email :</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="text-black" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Modifier</button>
            </form>
        </div>
    );
};

export default Page;
