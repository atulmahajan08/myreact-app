const theme = {
    primaryColor: 'blue'
}


const ThemeContext = React.createContext(theme);

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value={theme}>
                <WelcomeMessage />
            </ThemeContext.Provider >
        )
    }
}


const WelcomeMessage = () => {
    <div>
        Welcom!
        <Button> Try it for free! </Button>
    </div >
};


const Button = ({ children }) => {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ color: theme.primarycolor }}>
            {children}
        </ button>

    )
}