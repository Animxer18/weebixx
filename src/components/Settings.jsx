import React, { useContext, useState } from 'react'
import SettingsContext from '../context/SettingsContext'
import SettingsSelect from './SettingsSelect'

const Settings = () => {
    const [animeProviders] = useState(['Gogoanime', 'Crunchyroll', 'Zoro', 'Enime', '9anime']);
    const streamQualities = ['360p', '480p', '720p', '1080p']
    const mangaProviders = ['MangaKakalot', 'MangaDex', 'MangaHere']

    const {animeProvider, setAnimeProvider, streamQuality, setStreamQuality, mangaProvider, setMangaProvider} = useContext(SettingsContext);

  return (
    <main className='dark:text-white'>
        <section className='py-2 px-5 flex flex-col gap-3 sm:px-7 md:px-10'>
            <h2 className='font-montserrat font-bold sm:text-lg'>Settings</h2>

            <article className='flex flex-col text-sm gap-2'>
                <h3 className='text-base font-montserrat'>Anime</h3>

                <form action="" className='flex flex-col'>
                    <SettingsSelect label='Provider' id='anime-provider' state={animeProvider} setState={setAnimeProvider} options={animeProviders} />

                    <SettingsSelect label='Default Stream Quality' id='stream-quality' state={streamQuality} setState={setStreamQuality} options={streamQualities} />
                </form>
            </article>

            <article className='flex flex-col text-sm gap-2'>
                <h3 className='text-base font-montserrat'>Manga</h3>

                <form action="" className='flex flex-col'>
                    <SettingsSelect label='Provider' id='manga-provider' state={mangaProvider} setState={setMangaProvider} options={mangaProviders} />
                </form>
            </article>
        </section>
    </main>
  )
}

export default Settings