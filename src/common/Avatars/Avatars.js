import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Avatars = ({ avatars }) => {
    return (
        <AvatarGroup max={5}>
            {avatars?.map((avatar, index) => (
                <Avatar key={index} alt={`photo-${index + 1}`} src={avatar} />
            ))}
        </AvatarGroup>
    );
}

export default Avatars;