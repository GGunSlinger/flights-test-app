const styles = (theme) => ({
    '@global': {
        "*": {
            "boxSizing": "border-box"
        },
        "p": {
            "margin": "0",
            "padding": "0"
        }
    },
    "item_wrap": {
        "width": "900px",
        "margin": "20px 0",
        [theme.breakpoints.down(1260)]: {
            "width": "auto"
        }
    },
    "header": {
        "background": "#0087C9",
        "width": "100%",
        "height": "50px",
        "display": "flex",
        "justifyContent": "space-between",
        "color": "#fff",
        "padding": "0 10px"
    },
    "header_text_total_amount": {
        "textAlign": "end"
    },
    "derection": {
        "display": "flex",
        "borderBottom": "1px solid #CDCDCD",
        "justifyContent": "center",
        "padding": "10px 0 15px 20px",
        "margin": "0 10px"
    },
    "date_box": {
        "display": "flex",
        "padding": "5px 10%"
    },
    "text_time": {
        "fontSize": "20px"
    },
    "blue_text": {
        "color": "#0A88CA"
    },
    "item_main_content": {
        "padding": "0 10",
        "margin": "15px 0",
        "borderBottom": "2px solid #0087C9"
    },
    "button": {
        "width": "100%",
        "height": "50px",
        "backgroundColor": "#FFB168",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "color": "#fff",
        "fontSize": "18px"
    },
    "stops_box": {
        "position": "relative",
        "width": "70%",
        "height": "1px",
        "backgroundColor": "#CDCDCD",
        "margin": "12px 0"
    },
    "stops_box_text": {
        "position": "absolute",
        "left": "36%",
        "top": "-13px",
        "color": "#FF9B5A",
        "height": "25px",
        "width": "auto",
        "backgroundColor": "#fff",
        "padding": "0 20px"
    },
    "filter_wrap": {
        "margin": "20px 0 0 20px",
        "display": "flex",
        "flexDirection": "column"
    }
})

export default styles