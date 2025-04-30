"use client";

import { useSession, signOut } from "next-auth/react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function WelcomePage() {

    const user = (useSession().data?.user as {
        id?: string;
        name?: string;
        email?: string;
        image?: string;
        username?: string;
    }) || {};

    return (
            <Container
                maxWidth="sm"
                sx={{
                    textAlign: 'center',
                    border: '2px solid white',
                    borderRadius: 2,
                    p: 3,
                    backgroundColor: 'transparent',
                }}
            >
                <Typography variant="h4" gutterBottom color="white">
                    Welcome, {user.name || user.username || "User"}
                    {user.username ? ` (@${user.username})` : ""}
                    !
                </Typography>

                {user.image && (
                    <Avatar
                        src={user.image}
                        alt="Profile picture"
                        sx={{
                            width: 150,
                            height: 150,
                            mx: 'auto',
                            mb: 2,
                        }}
                    />
                )}

                <Typography variant="body1" color="white">
                    Email: {user.email || "No email provided"}
                </Typography>

                {user.id && (
                    <Typography variant="body2" color="white" sx={{ mt: 1 }}>
                        ID: {user.id}
                    </Typography>
                )}

                <Box sx={{ mt: 3 }}>
                    <Button
                        onClick={() => signOut()}
                        variant="contained"
                        color="primary"
                    >
                        Sign Out
                    </Button>
                </Box>
            </Container>
    );
}
