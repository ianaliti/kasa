import React from 'react'
import Banner from '../../banner/Banner.jsx'
import CardList from '../../card_list/CardList.jsx'
import bannerImage from '../../../assets/images/bannerMain.png'

export default function MainPage() {
    return (
        <div>
            <Banner src={bannerImage} text="Chez vous, partout et ailleurs" hasBackgroundColor={true} />
            <CardList />
        </div>
    )
}
