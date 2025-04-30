"use client";

import Box from '@mui/material/Box';
import WelcomeCard from '../../components/WelcomeCard';

export default function WelcomePage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#95a590',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <WelcomeCard />
        </Box>
    );
}