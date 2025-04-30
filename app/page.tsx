import OauthApp from '@/components/OauthApp';

export default async function Home() {
    return (
        <main className="flex flex-col min-h-screen w-full bg-yellow-100 p-2">
            <OauthApp />
        </main>
    );
}