import React, { useEffect, useState } from 'react'
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../atoms/playlistAtom'

function Sidebar() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [spotifyApi, session])

  // console.log(session);
  // console.log(playlists);
  // console.log("You picked playlist >>> ", playlistId);

  return (
    <div className="hidden h-screen overflow-y-scroll border-r border-gray-900 p-5 text-sm text-gray-500 scrollbar-hide sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] lg:text-sm pb-36">
      <div className="space-y-4">

        {/* <button
          className="item-center flex space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <p>Logout</p>
        </button> */}

        <button className="item-center flex space-x-2 hover:text-white">
          <HomeIcon className="h-3 w-5" />
          <p>Home</p>
        </button>
        <button className="item-center flex space-x-2 hover:text-white">
          <SearchIcon className="h-3 w-5" />
          <p>Search</p>
        </button>
        <button className="item-center flex space-x-2 hover:text-white">
          <LibraryIcon className="h-3 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="item-center flex space-x-2 hover:text-white">
          <PlusCircleIcon className="h-3 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="item-center flex space-x-2 hover:text-white">
          <HeartIcon className="h-3 w-5 text-blue-500" />
          <p>Liked Songs</p>
        </button>
        <button className="item-center flex space-x-2 hover:text-white">
          <RssIcon className="h-3 w-5 text-green-500" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlists */}
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer hover:text-white"
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
