/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className='picture'>
                <img alt="" width="800" height="250" 
                src='https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/106073578_3386316118099111_2814318963202210032_n.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=3B5QyFTz_AMAX8aS0II&_nc_ht=scontent.fiev6-1.fna&oh=11c972d70620a346fb8a2a1cbb9bdb54&oe=6035E96A'/>
            
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
            </div>
        </div>
    )
}

export default ProfileInfo;