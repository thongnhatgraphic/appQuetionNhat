export const style = (theme) => {
    return {
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        main: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        error: {
            color: "red",
            fontSize: 14
        }
    }
}