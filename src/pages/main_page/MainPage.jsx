import React from 'react'
import Banner from '../../../src/components/banner/Banner.jsx'
import CardList from '../../../src/components/card_list/CardList.jsx'
import bannerImage from '../../../src/assets/images/bannerMain.png'

export default function MainPage() {
    return (
        <div>
            <Banner src={bannerImage} text="Chez vous, partout et ailleurs" hasBackgroundColor={true} />
            <CardList />
        </div>
    )
}
