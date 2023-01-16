import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'random',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/dimitar.mandarliev.3/',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://twitter.com/mandarliev',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/dimitar-mandarliev-515273172/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/mandarliev',
    icon: <FaGithub />,
  },
]
