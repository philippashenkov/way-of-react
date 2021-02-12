import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/MX/es/999/UP2538-CUSA05620_00-AV00000000000202/1601167372000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
                followed: true,
                fullName: 'Phil',
                status: 'I am the one',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/999/EP4396-CUSA10659_00-AV00000000000100/1602750992000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
                followed: false,
                fullName: 'Nick',
                status: 'Freeman',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6278497e-5ecc-4d29-908d-5cb8c2e4c561/d8qmc9f-a0a755be-ac30-4390-8fd3-97a4e69eb192.png/v1/fill/w_276,h_430,q_80,strp/avatar_chibi_line_by_kathryn_anon_d8qmc9f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MzAiLCJwYXRoIjoiXC9mXC82Mjc4NDk3ZS01ZWNjLTRkMjktOTA4ZC01Y2I4YzJlNGM1NjFcL2Q4cW1jOWYtYTBhNzU1YmUtYWMzMC00MzkwLThmZDMtOTdhNGU2OWViMTkyLnBuZyIsIndpZHRoIjoiPD0yNzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GLKd_-CNPfFCG0IPZ5ZSPSwMPe1wXoaugl6UQRHIBLc',
                followed: false,
                fullName: 'Ann',
                status: 'In love',
                location: {city: 'Odessa', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZQM89fd9BBUZTGhDyHSkQtSS-i62zDoAcw&usqp=CAU',
                followed: false,
                fullName: 'Lisa',
                status: 'Searching a job',
                location: {city: 'Lviv', country: 'Ukraine'}
            }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} /> 
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={ () => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                    : <button onClick={ () => {
                        props.follow(u.id)
                    }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;