/* eslint-disable @next/next/no-img-element */
import HeaderItem from './HeaderItem'
import {BadgeCheckIcon,CollectionIcon,HomeIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'
const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
            <div className="flex flex-grow justify-evenly max-w-2xl ">
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VARIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTION" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>

            </div>
            <img className="object-contain cursor-pointer" src="https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg" width={150} height={100} alt=""/>
        </header>
    )
}

export default Header
