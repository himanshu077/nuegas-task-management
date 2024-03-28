import React from 'react';
import { Box } from "@mui/material";

const PrimaryButton = ({ title, className }) => {
    return (
            <button style={{ backgroundColor: 'var(--Primary-500)' }}  className={`${className} !text-sm !font-medium !text-white !py-3 !rounded-lg`}>{title}</button>
    )
}

export default PrimaryButton;
