import MainNavigation from './main-nav';

export default function Layout({ children }) {
    return (
        <>
            <MainNavigation />
            <main>
                {children}
            </main>
        </>
    )
}
