'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import YoutubeLogo from '../assets/images/youtube-logo.png'
import UserImage from '../assets/images/user-image.jpg'

export default function NavbarWithDropdown() {
    // TODO: Add Search Box, Search with your voice icon, Create and notifications icon
    return (
    <Navbar className=''
      fluid
      rounded
    >
      <Navbar.Brand href="https://youtube.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src={YoutubeLogo}
          href="https://youtube.com"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Youtube <sup>PH</sup>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={UserImage} rounded/>}
        >

        {/* TODO:  Logo should be beside the User Name and add icons for each dropdown item*/}
          <Dropdown.Header>
            <span className="block text-sm">
              Emeroe Neñeria
            </span>
            <span className="block truncate text-sm font-medium">
              iam.emeroe@gmail.com
            </span>
            <span className="block truncate text-sm font-small">
              Manage your Google Account
            </span>
          </Dropdown.Header>

          <Dropdown.Item>
            Your Channel
          </Dropdown.Item>
          <Dropdown.Item>
            Youtube Studio
          </Dropdown.Item>
          <Dropdown.Item>
            Switch Account
          </Dropdown.Item>
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Purchases and memberships
          </Dropdown.Item>
          <Dropdown.Item>
            Your data in Youtube
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Appearance: Device Theme
          </Dropdown.Item>
          <Dropdown.Item>
            Language: English
          </Dropdown.Item>
          <Dropdown.Item>
            Restricted Mode: Off
          </Dropdown.Item>
          <Dropdown.Item>
            Location: Philippines
          </Dropdown.Item>
          <Dropdown.Item>
            Keyboard Shortcuts
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Help
          </Dropdown.Item>
          <Dropdown.Item>
            Send Feedback
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      
      {/* <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  )
}
